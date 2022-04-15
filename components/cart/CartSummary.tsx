import React, { useEffect } from "react";
import { routes } from "../../routes/routes";
import { formatter } from "../../utils/priceFormatter";
import PrimaryLink from "../links/PrimaryLink";
import { useCartState } from "./cartContext";

const CartSummary = () => {
  const { calculateSubtotal } = useCartState();

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
        <PrimaryLink href={routes.CHECKOUT}>Przejdź do kasy</PrimaryLink>
      </div>
    </div>
  );
};

export default CartSummary;
