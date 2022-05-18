import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { CartContextProvider } from "../components/cart/cartContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../graphql/apolloClient";

const reactQueryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CartContextProvider>
        <Layout>
          <DefaultSeo {...SEO} />
          <QueryClientProvider client={reactQueryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Layout>
      </CartContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
