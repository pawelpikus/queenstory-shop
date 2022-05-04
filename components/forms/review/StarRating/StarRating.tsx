import { storeValueIsStoreObject } from "@apollo/client/cache/inmemory/helpers";
import React, { useState } from "react";
import StarIconEmpty from "./StarIconEmpty";
import StarIconFilled from "./StarIconFilled";

type StarRatingProps = {
  onChange: (...event: any[]) => void;
};

const StarRating = React.forwardRef(function StarRatingInput(
  { onChange }: StarRatingProps,
  ref: any,
  ...field
) {
  const [starRating, setStarRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-2">
      <input
        type="number"
        {...field}
        ref={ref}
        value={starRating}
        onChange={(e) => onChange(e.target.value)}
      />
      {[...Array(5)].map((_, i) => {
        i += 1;
        return (
          <button
            key={i}
            type="button"
            onClick={() => {
              setStarRating(i);
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
