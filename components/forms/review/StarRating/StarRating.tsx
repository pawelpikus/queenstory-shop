import React from "react";
import StarIconEmpty from "./StarIconEmpty";

type StarRatingProps = {
  rating: number;
};

const StarRating = (rating: StarRatingProps) => {
  return (
    <div className="flex gap-2">
      {[...Array(5)].map((star, i) => {
        return (
          <div key={i}>
            <StarIconEmpty />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
