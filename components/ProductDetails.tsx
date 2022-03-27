import React from "react";
import Image from "next/image";
import { formatter } from "../utils/priceFormatter";
import { NextSeo } from "next-seo";
import MyReactMarkDown from "./MyReactMarkDown";
import { MarkDownResult } from "../utils/types";
import PrimaryButton from "./buttons/PrimaryButton";

export interface ProductDetails {
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
      <div className="flex flex-col items-start justify-between w-full h-full p-4 my-4 bg-white rounded-lg md:p-5 lg:p-6">
        <div className="flex flex-col justify-center w-full md:flex-row md:items-center md:justify-between ">
          <div className="block my-12 bg-white md:w-1/2">
            <Image
              src={data.imgSrc}
              layout="responsive"
              width={16}
              height={9}
              objectFit="contain"
              alt={data.title}
            />
          </div>
          <article className="prose md:w-1/2 prose-neutral">
            <h1 className="mb-0 text-2xl text-left ">{data.title}</h1>
            <h3 className="m-0 text-left font-narrow text-neutral-500">
              {data.category}
            </h3>
            <div className="flex items-baseline justify-between w-full">
              <p className="px-1 py-0.5 font-semibold rounded-md text-neutral-600 bg-neutral-200">
                {data.rating} &#9733;
              </p>

              <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-emerald-800">
                {formatter.format(data.price)}
              </p>
            </div>
            <p>{data.desc}</p>
            <PrimaryButton
              item={{ title: data.title, price: data.price, count: 1 }}
            >
              Dodaj do koszyka
            </PrimaryButton>
          </article>
        </div>
        <div className="w-full">
          <article className="p-4 my-12 prose border-t md:p-12 max-w-max border-neutral-200 prose-neutral">
            <MyReactMarkDown>{data.longDesc}</MyReactMarkDown>
          </article>
        </div>
      </div>
    </>
  );
};