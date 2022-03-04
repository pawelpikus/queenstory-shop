import React, { useState } from "react";
import { useQuery } from "react-query";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ErrorMsg } from "../components/ErrorMsg";
import { ProductListItem } from "../components/Product";
import { ProductSkeleton } from "../components/ProductSkeleton";

const getProducts = async (offset: number) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=25&offset=${offset}`
  );
  const data = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const [offset, setOffset] = useState(0);

  const { data, error, isError, isLoading, isFetching, isPreviousData } =
    useQuery(["products", offset], () => getProducts(offset), {
      keepPreviousData: true,
    });

  if (isError) {
    return <ErrorMsg message="Error fetching data." />;
  }
  return (
    <div className="min-h-screen bg-slate-200">
      <Header />
      <div className="flex-grow w-11/12 mx-auto mb-8 max-w-7xl">
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
              {[...new Array(8)].map((_, i) => (
                <li key={i}>
                  <ProductSkeleton />
                </li>
              ))}
            </>
          )}
        </ul>
        <span>Current Page: {offset + 1}</span>
        <button
          onClick={() => setOffset((old) => Math.max(old - 25, 0))}
          disabled={offset === 0}
        >
          Previous Page
        </button>{" "}
        <button
          onClick={() => {
            if (!isPreviousData) {
              setOffset((old) => old + 25);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData}
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}{" "}
      </div>
      <Footer />
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
