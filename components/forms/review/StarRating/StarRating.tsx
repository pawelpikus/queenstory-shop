import React, { useState } from "react";
import StarIconEmpty from "./StarIconEmpty";
import StarIconFilled from "./StarIconFilled";

type StarRatingProps = {
  onChange: (...event: any[]) => void;
  rating: number;
};

const StarRating = ({ rating, onChange }: StarRatingProps) => {
  const [starRating, setStarRating] = useState(0);

  return (
    <div className="flex gap-2">
      <input type="hidden" value={starRating} />
      {[...Array(5)].map((_, i) => {
        i += 1;
        return (
          <button key={i} type="button" onClick={() => setStarRating(i)}>
            {i <= starRating ? <StarIconFilled /> : <StarIconEmpty />}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
