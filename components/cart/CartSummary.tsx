import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Stripe from "stripe";
import { formatter } from "../../utils/priceFormatter";
import PrimaryButton from "../buttons/PrimaryButton";
import { ErrorMsg } from "../ErrorMsg";
import { useCartState } from "./cartContext";

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!stripePublishableKey) {
  throw new Error("Podaj stripe pusblishable key.");
}
const stripePromise = loadStripe(stripePublishableKey);

const CartSummary = () => {
  const { calculateSubtotal, items } = useCartState();

  const pay = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      throw new Error("Ups! Coś poszło nie tak...");
    }

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        items.map((item) => {
          return {
            slug: item.id,
            count: item.count,
          };
        })
      ),
    });

    const { session }: { session: Stripe.Response<Stripe.Checkout.Session> } =
      await res.json();

    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      <ErrorMsg message={result.error.message} />;
    }
  };

  return (
    <div className="flex justify-end">
      <div className="flex flex-col items-start">
        <h3 className="mt-12 mb-2 text-xl font-bold">Podsumowanie koszyka</h3>
        <div className="mb-8">
          <table className="table-fixed">
            <tbody className="border">
              <tr className="grid grid-cols-2 gap-40 border-b-2 border-neutral-50">
                <td className="p-4 text-sm tracking-widest uppercase">
                  Podsuma
                </td>
                <td className="self-center ">
                  {formatter.format(calculateSubtotal() / 100)}
                </td>
              </tr>
              <tr className="grid grid-cols-2 gap-40">
                <td className="p-4 text-sm font-bold tracking-widest uppercase">
                  Suma
                </td>
                <td className="self-center font-bold">
                  {formatter.format(calculateSubtotal() / 100)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <PrimaryButton pay={pay}>Przejdź do kasy</PrimaryButton>
      </div>
    </div>
  );
};

export default CartSummary;
