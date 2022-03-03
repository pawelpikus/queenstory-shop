import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React from "react";
import { ErrorMsg } from "../../components/ErrorMsg";
import { ProductDetails } from "../../components/Product";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <ErrorMsg />;
  }

  return (
    <ProductDetails
      data={{
        title: data.title,
        imgSrc: data.image,
        category: data.category,
        price: data.price,
        desc: data.description,
        rating: data.rating.rate,
      }}
    />
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: StoreAPIResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),

    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const data: StoreAPIResponse | null = await res.json();

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
