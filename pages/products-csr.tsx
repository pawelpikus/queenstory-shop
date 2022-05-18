import React, { useState } from "react";
import { useQuery } from "react-query";
import { ErrorMsg } from "../components/ErrorMsg";
import { ProductListItem } from "../components/ProductListItem";
import { ProductSkeleton } from "../components/ProductSkeleton";
import PaginationCSR from "../components/PaginationCSR";
import { FAKE_PRODUCT_COUNT, OFFSET, ITEMS_PER_PAGE } from "../utils/consts";

const getProducts = async (page: number) => {
  let offset = page * OFFSET;
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${ITEMS_PER_PAGE}&offset=${offset}`
  );
  const data = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const [page, setPage] = useState(0);

  const { data, isError, error, isFetching, isPreviousData } = useQuery<
    any,
    Error
  >(["products", page], () => getProducts(page), {
    keepPreviousData: true,
  });

  if (isError) {
    return <ErrorMsg message={`${error && error.message}`} />;
  }

  return (
    <div className="flex flex-col items-center flex-grow w-11/12 mx-auto mb-8 max-w-7xl">
      <PaginationCSR
        page={page}
        setPage={setPage}
        isPreviousData={isPreviousData}
        isFetching={isFetching}
      />
      <ul className="grid content-between grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data ? (
          data.map((item: StoreAPIResponse) => (
            <li key={item.id}>
              <ProductListItem
                id={item.id}
                title={item.title}
                imgSrc={item.image}
                category={item.category}
                price={item.price}
              />
            </li>
          ))
        ) : (
          <>
            {Array.from({ length: FAKE_PRODUCT_COUNT }, (_, i) => (
              <li key={i}>
                <ProductSkeleton />
              </li>
            ))}
          </>
        )}
      </ul>
      <PaginationCSR
        page={page}
        setPage={setPage}
        isPreviousData={isPreviousData}
        isFetching={isFetching}
      />
    </div>
  );
};

export default ProductsCSRPage;

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
