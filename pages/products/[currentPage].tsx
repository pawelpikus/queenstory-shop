import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PaginationSSG from "../../components/PaginationSSG";
import { ProductListItem } from "../../components/ProductListItem";
import { ProductSkeleton } from "../../components/ProductSkeleton";
import SecondaryBg from "../../components/SecondaryBg";
import {
  ITEMS_PER_PAGE,
  PAGES_COUNT,
  PAGE_NUM_LIMIT,
} from "../../utils/consts";
import { FAKE_PRODUCT_COUNT } from "../../utils/consts";

const ProductsPage = ({
  data,
  currentPage,
  totalPages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const currentPageNum = Number(currentPage);
  const [minPageLimit, setMinPageLimit] = useState(currentPageNum);
  const [maxPageLimit, setMaxPageLimit] = useState(
    currentPageNum + PAGE_NUM_LIMIT
  );

  useEffect(() => {
    setMinPageLimit(currentPageNum);
    setMaxPageLimit(currentPageNum + PAGE_NUM_LIMIT);
  }, [currentPageNum]);

  const onPrevClick = () => {
    if (currentPageNum % PAGE_NUM_LIMIT === 0) {
      setMaxPageLimit(maxPageLimit - PAGE_NUM_LIMIT);
      setMinPageLimit(minPageLimit - PAGE_NUM_LIMIT);
    }
  };

  const onNextClick = () => {
    if (currentPageNum > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + PAGE_NUM_LIMIT);
      setMinPageLimit(minPageLimit + PAGE_NUM_LIMIT);
    }
  };

  return (
    <>
      <SecondaryBg />
      <div className="w-11/12 mx-auto max-w-7xl ">
        <PaginationSSG
          minPageLimit={minPageLimit}
          maxPageLimit={maxPageLimit}
          totalPages={totalPages}
          activePage={currentPageNum}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
        {router.isFallback ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: FAKE_PRODUCT_COUNT }, (_, i) => (
              <li key={i}>
                <ProductSkeleton />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
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
        <PaginationSSG
          minPageLimit={minPageLimit}
          maxPageLimit={maxPageLimit}
          totalPages={totalPages}
          activePage={currentPageNum}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
      </div>
    </>
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
  let OFFSET = ITEMS_PER_PAGE * Number(params.currentPage) - ITEMS_PER_PAGE;
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
  longDescription: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
