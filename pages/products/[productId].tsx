import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ErrorMsg } from "../../components/ErrorMsg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductDetails } from "../../components/Product";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (!data) {
    return <ErrorMsg />;
  }

  return router.isFallback ? (
    <div>Loading...</div>
  ) : (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <Header />
      <div className="flex-grow w-11/12 max-w-lg mx-auto mb-8 ">
        <button
          className="p-4 text-2xl font-extrabold w-fit hover:text-amber-700 rounded-4xl bg-slate-200"
          type="button"
          onClick={() => router.back()}
        >
          &#8592; Back
        </button>
        <ProductDetails
          data={{
            id: data.id,
            title: data.title,
            imgSrc: data.image,
            category: data.category,
            price: data.price,
            desc: data.description,
            rating: data.rating.rate,
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
  const data: StoreAPIResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),

    fallback: true,
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
    `https://naszsklep-api.vercel.app/api/products/${params.productId}`
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
