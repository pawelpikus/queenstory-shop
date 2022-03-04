import { InferGetStaticPropsType } from "next";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductListItem } from "../components/Product";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className=" bg-slate-200">
      <Header />
      <div className="w-11/12 mx-auto mb-8 max-w-7xl">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <li key={item.id}>
              <ProductListItem
                id={item.id}
                title={item.title}
                imgSrc={item.image}
                category={item.category}
                price={item.price}
              />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
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
