import Link from "next/link";
import React from "react";
import { formatter } from "../../utils/priceFormatter";
import { useCartState } from "./cartContext";
import Image from "next/image";

const CartContent = () => {
  const { items, removeCartItem } = useCartState();
  return (
    <div className="w-11/12 max-w-6xl p-4 my-4 bg-white rounded-lg lg:p-12 ">
      <h1 className="mb-8 text-2xl text-center">Koszyk</h1>
      <div className="flex flex-col w-full h-full p-8 border border-neutral-200 ">
        {items.length < 1 ? (
          <p>Nie masz obecnie produktów w koszyku.</p>
        ) : (
          <table className="table-fixed ">
            <thead className="text-left bg-neutral-100">
              <tr>
                <th className="p-4">Delete</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="border-b-4 last-of-type:border-none border-neutral-50"
                >
                  <td className="pl-4">
                    <div
                      className="rounded-full w-fit text-neutral-800 hover:bg-neutral-800 hover:text-white"
                      onClick={() => removeCartItem(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </td>
                  <td>
                    <div className="block my-4 bg-white">
                      <Image
                        src={item.thumbnail}
                        layout="responsive"
                        width={16}
                        height={9}
                        objectFit="contain"
                        alt={item.title}
                      />
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>{formatter.format(item.price / 100)}</td>
                  <td>{item.count}</td>
                  <td>{formatter.format((item.price * item.count) / 100)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="my-6">
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
