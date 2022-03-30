import { gql, useQuery } from "@apollo/client";
import React from "react";

const PRODUCTS_LIST = gql`
  query GetProductsList {
    products {
      id
      price
      name
      slug
      images {
        height
        width
        url
      }
      reviews {
        rating
      }
    }
  }
`;

const GraphQLTestPage = () => {
  const { loading, error, data } = useQuery(PRODUCTS_LIST);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default GraphQLTestPage;
