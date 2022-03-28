import Link from "next/link";
import React from "react";
import { formatter } from "../../utils/priceFormatter";
import { useCartState } from "./cartContext";

const CartContent = () => {
  const { items, removeCartItem } = useCartState();
  return (
    <div className="w-11/12 max-w-6xl p-4 my-4 bg-white rounded-lg shadow-xl lg:p-12 ">
      <h1 className="mb-8 text-2xl text-center">Koszyk</h1>
      <div className="flex flex-col w-full h-full p-8 border border-neutral-200 ">
        {items.length < 1 ? (
          <p>Nie masz obecnie produktów w koszyku.</p>
        ) : (
          <ul className="divide-y divide-neutral-200">
            {items.map((item, i) => (
              <li className="flex gap-2 py-2" key={`${item.title}_${i}`}>
                {item.count} x {item.title} - {formatter.format(item.price)}
                <div
                  className="text-red-500"
                  onClick={() => removeCartItem(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-6">
        <Link href="/products/1">
          <a className="px-2 py-1 font-semibold transition-all bg-transparent border rounded hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent">
            Wróć do sklepu
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CartContent;
