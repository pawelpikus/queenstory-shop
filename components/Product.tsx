import React from "react";
import Image from "next/image";

interface ProductDetails {
  title: string;
  imgSrc: string;
  desc: string;
  price: number;
  rating: number;
  category: string;
}

interface ProductProps {
  data: ProductDetails;
}

type ProductListItem = Pick<ProductDetails, "title" | "imgSrc" | "category">;

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full p-4 my-4 bg-gray-100 rounded-lg shadow-md md:p-5 lg:p-6">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <Image
            src={data.imgSrc}
            width={150}
            height={200}
            alt={data.title}
            className="max-w-full"
          />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-center text-slate-800">
          {data.title}
        </h3>
        <h4 className="mb-4 text-lg font-semibold text-center text-slate-500">
          {data.category}
        </h4>

        <p className="mb-6 text-lg font-thin text-slate-800">{data.desc}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="p-2 text-lg font-semibold rounded-md text-slate-600 bg-slate-200">
          {data.rating} &#9733;
        </p>
        <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-amber-800">
          ${data.price}
        </p>
      </div>
    </div>
  );
};
