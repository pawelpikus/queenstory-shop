import React from "react";
import { useCartState } from "./cartContext";
import Image from "next/image";
import { formatter } from "../../utils/priceFormatter";
import SecondaryButton from "../buttons/SecondaryButton";

const CartMainTable = () => {
  const { items, removeCartItem } = useCartState();
  return (
    <div className="hidden w-full md:flex md:flex-col ">
      <table className="table-fixed ">
        <thead className="text-sm tracking-wider text-left uppercase font-narrow bg-neutral-100">
          <tr>
            <th></th>
            <th className="w-20 p-4 text-center "></th>
            <th className="pr-4">Produkt</th>
            <th className="pr-4">Cena</th>
            <th className="pr-4">Ilość</th>
            <th>Podsuma</th>
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
                  className="transition-colors rounded-full w-fit text-neutral-800 hover:bg-neutral-800 hover:text-white"
                  onClick={() => {
                    removeCartItem(item.id);
                  }}
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
              <td className="">
                <div className="block min-w-[150px] m-4 bg-white">
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
              <td className="font-bold text-emerald-500">
                {formatter.format((item.price * item.count) / 100)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-end w-full gap-4 mt-12 ">
        <SecondaryButton>Zaktualizuj koszyk</SecondaryButton>
      </div>
    </div>
  );
};

export default CartMainTable;
