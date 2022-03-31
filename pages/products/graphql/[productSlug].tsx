import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { ProductDetails } from "../../../components/ProductDetails";
import { serialize } from "next-mdx-remote/serialize";
import { apolloClient } from "../../../graphql/apolloClient";
import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "../../../generated/graphql";

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  if (!data || !data.product) {
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
    <div className="w-full max-w-6xl mx-auto sm:w-11/12">
      <button
        className="p-4 font-extrabold bg-transparent tSext-2xl w-fit hover:text-emerald-600 rounded-4xl"
        type="button"
        onClick={handleGoBack}
      >
        &#8592; Back
      </button>
      <ProductDetails
        data={{
          id: data.product.slug,
          title: data.product.name,
          imgSrc: data.product.images[0].url,
          category: data.product.categories[0].name,
          price: data.product.price,
          longDesc: data.description,
          rating: 5,
        }}
      />
    </div>
  );
};

export default ProductPage;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productSlug: product.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ productSlug: string }>) => {
  if (!params?.productSlug) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
  >({
    variables: { slug: params.productSlug },
    query: GetProductDetailsBySlugDocument,
  });

  if (!data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data,
        description: await serialize(data.product.description),
      },
    },
  };
};
