import React from "react";
import Image from "next/image";

interface ProductProps {
  title: string;
  imgSrc: string;
  desc: string;
  price: number;
  rating: number;
  category: string;
}

const Product = ({
  title,
  imgSrc,
  desc,
  price,
  rating,
  category,
}: ProductProps) => {
  return (
    <div className="relative flex flex-col items-center justify-between w-full h-full p-4 my-4 bg-gray-100 rounded shadow-md md:p-5 lg:p-6">
      <div className="flex flex-col items-center">
        <h3 className="mb-2 text-2xl font-semibold text-center text-slate-800">
          {title}
        </h3>
        <h4 className="mb-4 text-lg font-semibold text-center text-slate-500">
          {category}
        </h4>
        <div className="mb-6">
          <Image
            src={imgSrc}
            width={300}
            height={350}
            alt={title}
            className="max-w-full"
          />
        </div>
        <p className="mb-6 text-slate-600">{desc}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="p-2 text-lg font-semibold rounded-md bg-slate-200">
          {rating}
        </p>
        <p className="text-4xl font-bold text-orange-600 ">${price}</p>
      </div>
    </div>
  );
};

export default Product;
