import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatter } from "../utils/priceFormatter";

interface ProductDetails {
  page?: string;
  id: number;
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

type ProductListItem = Pick<
  ProductDetails,
  "title" | "imgSrc" | "category" | "price" | "id"
>;

export const ProductListItem = ({
  id,
  title,
  imgSrc,
  category,
  price,
}: ProductListItem) => {
  return (
    <div className="w-full p-4 my-4 bg-white rounded-lg shadow-xl md:p-5 lg:p-6">
      <div className="flex flex-col items-center justify-between w-full h-full">
        <div className="block w-full px-2 py-4 bg-white rounded-lg ">
          <Image
            src={imgSrc}
            layout="responsive"
            width={16}
            height={9}
            objectFit="contain"
            alt={title}
          />
        </div>
        <div>
          <Link href={`/products/item/${id}`}>
            <a className="font-bold text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br from-emerald-500 to-emerald-800 text-neutral-800">
              {title}
            </a>
          </Link>
          <h4 className="mb-4 text-sm text-center font-narrow text-neutral-500">
            {category}
          </h4>
        </div>
        <p className="font-extrabold text-right text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-emerald-800">
          {formatter.format(price)}
        </p>
      </div>
    </div>
  );
};

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div className="flex flex-col items-center justify-between flex-grow w-full h-full p-4 my-4 bg-white rounded-lg shadow-lg md:p-5 lg:p-6">
      <div className="flex flex-col items-center">
        <div className="block w-full px-2 py-4 mb-6 bg-white rounded-lg ">
          <Image
            src={data.imgSrc}
            layout="responsive"
            width={16}
            height={9}
            objectFit="contain"
            alt={data.title}
          />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-center text-neutral-800">
          {data.title}
        </h3>
        <h4 className="mb-4 text-lg text-center font-narrow text-neutral-500">
          {data.category}
        </h4>

        <p className="mb-6 text-lg font-thin text-neutral-800">{data.desc}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="p-2 text-lg font-semibold rounded-md text-neutral-600 bg-neutral-200">
          {data.rating} &#9733;
        </p>
        <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-emerald-800">
          {formatter.format(data.price)}
        </p>
      </div>
    </div>
  );
};
