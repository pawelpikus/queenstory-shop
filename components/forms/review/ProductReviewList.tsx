import React from "react";
import { useGetReviewsForProductSlugQuery } from "../../../generated/graphql";
import ProductReview from "./ProductReview";

type ProductReviewListProps = {
  productSlug: string;
};

const ProductReviewList = ({ productSlug }: ProductReviewListProps) => {
  const { data, loading, error } = useGetReviewsForProductSlugQuery({
    variables: {
      slug: productSlug,
    },
  });

  if (!data?.product) {
    return null;
  }
  return (
    <ul className="flex flex-col gap-4 py-4">
      {data.product.reviews.map((review) => (
        <ProductReview key={review.id} review={review} />
      ))}
    </ul>
  );
};

export default ProductReviewList;
