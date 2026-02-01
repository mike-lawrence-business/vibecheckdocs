const stripeLib = require('stripe');

export const config = { api: { bodyParser: false } };

const buffer = async (req) => {
  const bufs = [];
  for await (const chunk of req) bufs.push(chunk);
  return Buffer.concat(bufs);
};

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
      // TODO: record in DB (Supabase) and trigger audit delivery
      console.log('Checkout completed for', session.id, 'amount', session.amount_total || session.amount_subtotal);
    }
    res.json({ received: true });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
}
