import { InferGetStaticPropsType } from "next";
import React from "react";
import Product from "../components/Product";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="w-11/12 mx-auto">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <li key={item.id}>
            <Product
              title={item.title}
              imgSrc={item.image}
              price={item.price}
              desc={item.description}
              category={item.category}
              rating={item.rating.rate}
            />
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
