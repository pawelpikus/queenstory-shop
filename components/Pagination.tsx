import React, { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  isPreviousData: boolean;
  isFetching?: boolean;
};

const PAGES_COUNT = 10;

const Pagination = ({ page, setPage, isPreviousData }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center px-4 mt-12 mb-8 border-t border-gray-200 sm:px-0">
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
        className="mx-4 font-semibold transition-colors hover:text-amber-600 "
      >
        Previous Page
      </button>
      <div className="hidden md:-mt-px md:flex">
        {[...new Array(PAGES_COUNT)].map((_, i) => {
          return (
            <button
              key={i}
              disabled={page === i}
              onClick={() => setPage(i)}
              className={`${
                page === i
                  ? `text-amber-700 border-t-2 border-amber-600`
                  : `text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300`
              } inline-flex items-center p-4 text-sm font-extrabold  border-t-2  `}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <button
        className="ml-4 font-semibold transition-colors hover:text-amber-600 "
        onClick={() => {
          if (!isPreviousData) {
            setPage((old) => old + 1);
          }
        }}
        disabled={isPreviousData || page > PAGES_COUNT - 2}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
