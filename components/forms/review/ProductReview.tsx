import React from "react";
import { ReviewContentFragment } from "../../../generated/graphql";
import RatingRender from "./StarRating/RatingRender";
import StarIconEmpty from "./StarRating/StarIconEmpty";
import StarIconFilled from "./StarRating/StarIconFilled";

type ProductReviewProps = {
  review: ReviewContentFragment;
};

const ProductReview = ({ review }: ProductReviewProps) => {
  return (
    <li className="p-4 mb-4 border ">
      <h3 className="text-lg font-bold">{review.headline}</h3>
      <p className="text-sm font-narrow">Reviewed by {review.name}</p>

      {!review.rating ? (
        <div className="mt-4 text-sm font-narrow">Brak oceny.</div>
      ) : (
        <RatingRender review={review} />
      )}
      <p className="mt-2">{review.content}</p>
    </li>
  );
};

export default ProductReview;
