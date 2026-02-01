const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || process.env.STRIPE_TEST_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const { price = 9900, metadata = {} } = req.body; // price in cents
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        { price_data: { currency: 'usd', product_data: { name: 'VibeCheckDocs Audit' }, unit_amount: price }, quantity: 1 }
      ],
      success_url: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata
    });
    res.status(200).json({ url: session.url, id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
