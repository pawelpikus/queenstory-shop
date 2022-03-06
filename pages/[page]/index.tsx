import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import PaginationSSG from "../../components/PaginationSSG";
import { ProductListItem } from "../../components/Product";

const ProductsPage = ({
  data,
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className=" bg-slate-200">
      <Header />
      <div className="flex flex-col items-center w-11/12 mx-auto mb-8 max-w-7xl">
        <PaginationSSG page={page} />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((item) => (
              <li key={item.id}>
                <ProductListItem
                  page={page}
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

let OFFSET = 0;
const ITEMS_PER_PAGE = 25;
const PAGES_COUNT = 10;

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: PAGES_COUNT }, (_, i) => {
      return {
        params: { page: i.toString() },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ page: string }>) => {
  if (!params?.page) {
    return {
      props: {},
      notFound: true,
    };
  }

  OFFSET = ITEMS_PER_PAGE * Number(params.page);

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${ITEMS_PER_PAGE}&offset=${OFFSET}`
  );
  const data: StoreAPIResponse[] | null = await res.json();

  return {
    props: {
      data,
      page: params.page,
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
