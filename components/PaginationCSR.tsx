import React, { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  isPreviousData?: boolean;
  isFetching?: boolean;
};

const PAGES_COUNT = 10;

const PaginationCSR = ({
  page,
  setPage,
  isPreviousData,
  isFetching,
}: PaginationProps) => {
  return (
    <div className="flex flex-col items-center px-4 mt-12 mb-8 border-neutral-200 sm:px-0">
      <div className="flex min-w-full ">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
          className="mx-4 font-semibold transition-colors hover:text-emerald-600 "
        >
          Previous Page
        </button>
        <div className="hidden md:-mt-px md:flex">
          {Array.from({ length: PAGES_COUNT }, (_, i) => {
            return (
              <button
                key={i}
                disabled={page === i}
                onClick={() => setPage(i)}
                className={`${
                  page === i
                    ? `text-emerald-700 border-t-2 border-emerald-600`
                    : `text-neutral-500 border-transparent hover:text-neutral-700 hover:border-neutral-300`
                } inline-flex items-center p-4 text-sm font-extrabold  hover:border-t-2`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <button
          className="ml-4 font-semibold transition-colors hover:text-emerald-600 "
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
      <div className="w-full h-6 text-center">
        {isFetching ? <p>Loading...</p> : null}
      </div>
    </div>
  );
};

export default PaginationCSR;
