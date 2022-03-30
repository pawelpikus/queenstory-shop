import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl1dn8e4i14g901z69ebk3pvj/master",
  cache: new InMemoryCache(),
});
