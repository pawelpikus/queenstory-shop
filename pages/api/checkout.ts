import { NextApiHandler } from "next";
import Stripe from "stripe";
import {
  GetProductBySlugDocument,
  GetProductBySlugQuery,
  GetProductBySlugQueryVariables,
} from "../../generated/graphql";
import { apolloClient } from "../../graphql/apolloClient";

const checkoutHandler: NextApiHandler = async (req, res) => {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    res.status(500).json({ message: `Missing Stripe secret key` });
    return;
  }

  const body = req.body as {
    slug: string;
    count: number;
  }[];

  const products = await Promise.all(
    body.map(async (cartItem) => {
      const res = await apolloClient.query<
        GetProductBySlugQuery,
        GetProductBySlugQueryVariables
      >({
        query: GetProductBySlugDocument,
        variables: {
          slug: cartItem.slug,
        },
      });

      const { product } = res.data;

      return {
        product,
        count: cartItem.count,
      };
    })
  );

  const stripe = new Stripe(stripeKey, { apiVersion: `2020-08-27` });
  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/checkout/cancel`,
    payment_method_types: [`p24`, `card`],
    locale: "pl",
    line_items: products.map((item) => {
      return {
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 99,
        },
        price_data: {
          currency: "PLN",
          unit_amount: item.product!.price,
          product_data: {
            name: item.product!.name,
            images: item.product!.images.map((i) => i.url),
            metadata: { slug: item.product!.slug },
          },
        },
        quantity: item.count,
      };
    }),
  });

  res.status(201).json({ session: stripeCheckoutSession });
};

export default checkoutHandler;
