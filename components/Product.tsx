import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatter } from "../utils/priceFormatter";
import { NextSeo } from "next-seo";
import MyReactMarkDown from "./MyReactMarkDown";
import { MarkDownResult } from "../utils/types";
import { useCartState } from "./cart/cartContext";

interface ProductDetails {
  page?: string;
  id: number;
  title: string;
  imgSrc: string;
  desc: string;
  price: number;
  rating: number;
  category: string;
  longDesc: MarkDownResult;
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
  const { addCartItem } = useCartState();
  return (
    <div className="w-full p-4 my-4 bg-white rounded-lg shadow-xl md:p-5 lg:p-6">
      <div className="flex flex-col items-center justify-between w-full h-full ">
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
            <a className="font-sans font-bold text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br from-emerald-500 to-emerald-800 text-neutral-800">
              {title}
            </a>
          </Link>
          <h4 className="mb-4 text-center font-narrow text-neutral-500">
            {category}
          </h4>
        </div>
        <div className="flex items-baseline justify-between w-full mt-4">
          <button
            onClick={() => addCartItem({ title, price })}
            className="px-2 py-1 font-semibold transition-all bg-transparent border rounded hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent"
          >
            Dodaj do koszyka
          </button>
          <p className="font-sans font-bold text-right text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-emerald-800">
            {formatter.format(price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.desc}
        canonical={`https://queenstory-shop-jkjloayc9-pawelpikus.vercel.app/products/item/${data.id}`}
        openGraph={{
          url: `https://queenstory-shop-jkjloayc9-pawelpikus.vercel.app/products/item/${data.id}`,
          title: data.title,
          description: data.desc,
          images: [
            {
              url: data.imgSrc,
              alt: data.title,
              type: "image/jpeg",
            },
          ],
          site_name: "Queen Story Shop",
        }}
      />
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
          <article className="prose prose-neutral ">
            <h1 className="mb-0 text-center">{data.title}</h1>
            <h3 className="mt-0 mb-6 text-center font-narrow text-neutral-500">
              {data.category}
            </h3>
            <p>{data.desc}</p>
            <MyReactMarkDown>{data.longDesc}</MyReactMarkDown>
          </article>
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
    </>
  );
};
