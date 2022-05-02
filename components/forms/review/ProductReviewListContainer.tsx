import React from "react";
import { useGetReviewsForProductSlugQuery } from "../../../generated/graphql";
import { ErrorMsg } from "../../ErrorMsg";
import ProductReviewList from "./ProductReviewList";

type ProductReviewListProps = {
  productSlug: string;
};

const ReviewListContainer = ({ productSlug }: ProductReviewListProps) => {
  const { data, loading, error } = useGetReviewsForProductSlugQuery({
    variables: {
      slug: productSlug,
    },
  });

  if (!data?.product) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <ErrorMsg />;
  }

  return (
    <div className="w-full">
      <ProductReviewList data={data} />
    </div>
  );
};

export default ReviewListContainer;
