import React from "react";
import { GetReviewsForProductSlugQuery } from "../../../generated/graphql";
import ProductReview from "./ProductReview";

interface ProductReviewListProps {
  data: GetReviewsForProductSlugQuery;
}

const ProductReviewList = ({ data }: ProductReviewListProps) => {
  if (!data?.product) {
    return null;
  }

  return (
    <ul className="flex flex-col gap-4 py-4">
      {data.product.reviews.length > 0 ? (
        data.product.reviews.map((review) => (
          <ProductReview key={review.id} review={review} />
        ))
      ) : (
        <p>Brak ocen. Pozostaw pierwszą!</p>
      )}
    </ul>
  );
};

export default ProductReviewList;
