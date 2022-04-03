import Link from "next/link";
import React from "react";

type Props = {
  text: string;
};

const EmptyCartContent = ({ text }: Props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <p>{text}</p>
        <Link href="/products/1">
          <a className="px-2 py-1 mt-8 font-semibold transition-all bg-transparent border rounded hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent">
            Wróć do sklepu
          </a>
        </Link>
      </div>
    </>
  );
};

export default EmptyCartContent;
