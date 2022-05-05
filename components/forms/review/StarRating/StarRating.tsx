import React, { useState } from "react";
import StarIconEmpty from "./StarIconEmpty";
import StarIconFilled from "./StarIconFilled";
type StarRatingProps = {
  setValue: any;
};

const StarRating = React.forwardRef(function StarRatingInput(
  { setValue }: StarRatingProps,
  ref: any
) {
  const [starRating, setStarRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-2">
      <input type="hidden" ref={ref} />
      {[...Array(5)].map((_, i) => {
        i += 1;
        return (
          <button
            key={i}
            type="button"
            onClick={() => {
              setStarRating(i);
              setValue("rating", i);
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(starRating)}
          >
            {i <= (starRating || hover) ? (
              <StarIconFilled />
            ) : (
              <StarIconEmpty />
            )}
          </button>
        );
      })}
    </div>
  );
});

export default StarRating;
