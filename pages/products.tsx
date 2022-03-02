import { InferGetStaticPropsType } from "next";
import React from "react";
import Image from "next/image";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            {/* <Image
              src={product.image}
              width={300}
              height={250}
              alt={product.title}
            /> */}
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: StoreAPIResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export interface StoreAPIResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
