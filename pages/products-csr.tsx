import React from "react";
import { useQuery } from "react-query";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ErrorMsg } from "../components/ErrorMsg";
import { ProductDetails } from "../components/Product";
import { ProductSkeleton } from "../components/ProductSkeleton";

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: StoreAPIResponse[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { data, error } = useQuery("products", getProducts);

  if (error) {
    return <ErrorMsg />;
  }
  return (
    <div className="min-h-screen bg-slate-200">
      <Header />
      <div className="flex-grow w-11/12 mx-auto mb-8 max-w-7xl">
        <ul className="grid content-between grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data ? (
            data.map((item) => (
              <li key={item.id}>
                <ProductDetails
                  title={item.title}
                  imgSrc={item.image}
                  price={item.price}
                  desc={item.description}
                  category={item.category}
                  rating={item.rating.rate}
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
