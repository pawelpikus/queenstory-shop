import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { ProductDetails } from "../../../components/Product";
import { ProductSkeleton } from "../../../components/ProductSkeleton";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (!data) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <div className="flex-grow w-11/12 max-w-lg mx-auto mb-8 ">
        <button
          className="p-4 text-2xl font-extrabold bg-transparent w-fit hover:text-emerald-600 rounded-4xl"
          type="button"
          onClick={() => router.back()}
        >
          &#8592; Back
        </button>
        {router.isFallback ? (
          <ProductSkeleton />
        ) : (
          data && (
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
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductIdPage;
const NUMBER_OF_STATIC_PRODUCTS = 275;

export const getStaticPaths = async () => {
  const paths = Array.from({ length: NUMBER_OF_STATIC_PRODUCTS }, (_, i) => ({
    params: { productId: (i + 1).toString() },
  }));

  return {
    paths,
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

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

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