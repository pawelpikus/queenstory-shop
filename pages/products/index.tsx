import { InferGetStaticPropsType } from "next";
import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import PaginationSSG from "../../components/PaginationSSG";
import { ProductListItem } from "../../components/Product";
import { ITEMS_PER_PAGE } from "../../utils/consts";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className=" bg-neutral-50">
      <Header />
      <div className="flex flex-col items-center w-11/12 mx-auto mb-8 max-w-7xl">
        {/* <PaginationSSG /> */}
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((item) => (
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
  const OFFSET = 0;
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${ITEMS_PER_PAGE}&offset=${OFFSET}`
  );
  const data: StoreAPIResponse[] | null = await res.json();

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
