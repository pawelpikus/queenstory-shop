import { NextApiHandler } from "next";
import Stripe from "stripe";

const checkoutHandler: NextApiHandler = async (req, res) => {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    res.status(500).json({ message: `Missing Stripe secret key` });
    return;
  }

  const stripe = new Stripe(stripeKey, { apiVersion: `2020-08-27` });
  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/checkout/cancel`,
    payment_method_types: [`p24`, `card`],
    locale: "pl",
    line_items: [
      {
        price_data: {
          currency: "PLN",
          unit_amount: 2341,
          product_data: {
            name: "Mój produkt",
          },
        },
        quantity: 1,
      },
    ],
  });

  res.status(201).json({ session: stripeCheckoutSession });
};

export default checkoutHandler;
