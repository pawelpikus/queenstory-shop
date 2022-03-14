import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import PaginationSSG from "../../components/PaginationSSG";
import { ProductListItem } from "../../components/Product";
import { ProductSkeleton } from "../../components/ProductSkeleton";
import { ITEMS_PER_PAGE, PAGES_COUNT } from "../../utils/consts";
import { FAKE_PRODUCT_COUNT } from "../../utils/consts";

const ProductsPage = ({
  data,
  currentPage,
  totalPages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [maxPageLimit, setMaxPageLimit] = useState(5);

  const paginationAttributes = {
    minPageLimit,
    maxPageLimit,
    totalPages,
  };

  return (
    <div className=" bg-neutral-50">
      <Header />
      <div className="flex flex-col items-center w-11/12 mx-auto mb-8 max-w-7xl">
        <PaginationSSG currentPage={currentPage} {...paginationAttributes} />
        {router.isFallback ? (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: FAKE_PRODUCT_COUNT }, (_, i) => (
              <li key={i}>
                <ProductSkeleton />
              </li>
            ))}
          </ul>
        ) : (
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
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: PAGES_COUNT }, (_, i) => {
      return {
        params: { currentPage: String(i + 1) },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ currentPage: string }>) => {
  if (!params?.currentPage) {
    return {
      props: {},
      notFound: true,
    };
  }
  let OFFSET = ITEMS_PER_PAGE * Number(params.currentPage);
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${ITEMS_PER_PAGE}&offset=${OFFSET}`
  );
  const data: StoreAPIResponse[] | null = await res.json();

  return {
    props: {
      data,
      currentPage: params.currentPage,
      totalPages: 160,
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
