import React from "react";
import { useCartState } from "../cart/cartContext";
import { formatter } from "../../utils/priceFormatter";
import SecondaryButton from "../buttons/SecondaryButton";

const CheckoutOrderSummary = () => {
  const { items } = useCartState();
  return (
    <div className="hidden w-full md:flex md:flex-col ">
      <table className="table-fixed ">
        <thead className="text-sm tracking-wider text-left uppercase font-narrow bg-neutral-100">
          <tr>
            <th className="p-4">Produkt</th>
            <th>Podsuma</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="p-4">
                {item.title} x <span className="font-bold">{item.count}</span>
              </td>
              <td>{formatter.format((item.price * item.count) / 100)}</td>
            </tr>
          ))}
          <tr className="border-t-4 border-neutral-100">
            <td className="p-4 tracking-wider uppercase ">Podsuma</td>
            <td>{formatter.format(75.33)}</td>
          </tr>
          <tr className="font-bold border-t-4 border-neutral-100 bg-neutral-100">
            <td className="p-4 tracking-wider uppercase ">Suma</td>
            <td>{formatter.format(75.33)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutOrderSummary;
