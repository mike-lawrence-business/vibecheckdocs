const stripeLib = require('stripe');
import fetch from 'node-fetch';

export const config = { api: { bodyParser: false } };

const buffer = async (req) => {
  const bufs = [];
  for await (const chunk of req) bufs.push(chunk);
  return Buffer.concat(bufs);
};

async function upsertPaymentToSupabase(session) {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY;
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.warn('Supabase keys not found; skipping upsert');
    return false;
  }
  const payload = {
    session_id: session.id,
    payment_intent: session.payment_intent || null,
    amount_total: session.amount_total || session.amount_subtotal || 0,
    currency: session.currency || 'usd',
    customer_email: session.customer_email || null,
    metadata: session.metadata || {}
  };
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      },
      body: JSON.stringify(payload)
    });
    if (!r.ok) {
      const txt = await r.text();
      console.error('Supabase upsert failed', r.status, txt);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Supabase upsert error', err.message);
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const sig = req.headers['stripe-signature'];
  const raw = await buffer(req);
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripe = stripeLib(process.env.STRIPE_TEST_SECRET_KEY || process.env.STRIPE_SECRET_KEY);
  let event;
  try {
    if (secret) event = stripe.webhooks.constructEvent(raw, sig, secret);
    else event = JSON.parse(raw.toString());
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      console.log('Checkout completed for', session.id, 'amount', session.amount_total || session.amount_subtotal);
      // Upsert payment record to Supabase (best-effort)
      await upsertPaymentToSupabase(session);
      // Trigger audit delivery: if sample PDF exists, send email or attach link (placeholder)
      // TODO: implement email delivery using host email provider or notify admin
    }
    res.json({ received: true });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
}
