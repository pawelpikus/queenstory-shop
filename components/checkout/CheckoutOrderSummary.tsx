import React from "react";
import { useCartState } from "../cart/cartContext";
import { formatter } from "../../utils/priceFormatter";

const CheckoutOrderSummary = () => {
  const { items } = useCartState();
  return (
    <div className="w-full">
      <table className="w-full table-fixed">
        <thead className="text-sm tracking-wider text-left uppercase font-narrow bg-neutral-100">
          <tr>
            <th className="p-4 text-left">Produkt</th>
            <th className="p-4 text-right">Podsuma</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="p-4">
                {item.title} x <span className="font-bold">{item.count}</span>
              </td>
              <td className="p-4 text-right ">
                {formatter.format((item.price * item.count) / 100)}
              </td>
            </tr>
          ))}
          <tr className="border-t-4 border-neutral-100">
            <td className="p-4 tracking-wider uppercase ">Podsuma</td>
            <td className="p-4 text-right">{formatter.format(75.33)}</td>
          </tr>
          <tr className="font-bold border-t-4 border-neutral-100 bg-neutral-100">
            <td className="p-4 tracking-wider uppercase ">Suma</td>
            <td className="p-4 text-right">{formatter.format(75.33)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutOrderSummary;
