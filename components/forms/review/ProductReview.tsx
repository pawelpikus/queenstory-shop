import React from "react";
import { ReviewContentFragment } from "../../../generated/graphql";

type ProductReviewProps = {
  review: ReviewContentFragment;
};

const ProductReview = ({ review }: ProductReviewProps) => {
  return (
    <li className="p-4 mb-4 border ">
      <h3 className="text-lg font-bold">{review.headline}</h3>
      <p className="text-sm font-narrow">Reviewed by {review.name}</p>
      <p className="mt-2">{review.content}</p>

      <div>{review.rating}</div>
    </li>
  );
};

export default ProductReview;
