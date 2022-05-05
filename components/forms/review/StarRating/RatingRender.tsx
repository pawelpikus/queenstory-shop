import React from "react";
import { ReviewContentFragment } from "../../../../generated/graphql";
import StarIconEmpty from "./StarIconEmpty";
import StarIconFilled from "./StarIconFilled";

type Props = {
  review: ReviewContentFragment;
};

const RatingRender = ({ review }: Props) => {
  return (
    <div className="mt-4">
      {[...Array(5)].map((_, i) => {
        return review.rating && review.rating <= i ? (
          <StarIconEmpty key={i} />
        ) : (
          <StarIconFilled key={i} />
        );
      })}
    </div>
  );
};

export default RatingRender;
