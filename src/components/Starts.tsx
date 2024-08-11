import { Star } from "lucide-react";
import React from "react";

interface StarRatingProps {
  totalValue: number;
  value: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalValue, value }) => {
  const percent = (totalValue / 100) * value;

  const conditional = 5 * (percent / 100);

  return (
    <div className="flex space-x-1  ">
      {Array.from({ length: 5 }, (_, index) => {
        const isLike = index <= conditional;
        return (
          <Star
            key={index}
            color=""
            size={30}
            className=""
            fill={isLike ? "#eab308" : "#334155"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;

{
  /* <svg
            key={index}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            xmlns="http://www.w3.org/2000/svg"
            fill={starValue <= (hover || rating) ? 'yellow' : 'gray'}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.54 4.713a1 1 0 00.95.69h4.953c.969 0 1.371 1.24.588 1.81l-4.005 2.91a1 1 0 00-.364 1.118l1.54 4.713c.3.921-.755 1.688-1.538 1.118l-4.005-2.91a1 1 0 00-1.176 0l-4.005 2.91c-.783.57-1.838-.197-1.538-1.118l1.54-4.713a1 1 0 00-.364-1.118l-4.005-2.91c-.783-.57-.38-1.81.588-1.81h4.953a1 1 0 00.95-.69l1.54-4.713z"
            />
          </svg> */
}
