import Link from "next/link";
import { PAGES_COUNT } from "../utils/consts";

type PaginationProps = {
  currentPage: string | undefined;
};

const PaginationSSG = ({ currentPage }: PaginationProps) => {
  const currentPageNum = Number(currentPage);

  return (
    <div className="flex flex-col items-center px-4 mt-12 mb-8 border-t border-gray-200 sm:px-0">
      <div className="flex items-center w-full gap-4">
        <Link
          href={
            currentPageNum > 2 ? `/products/${currentPageNum - 1}` : `/products`
          }
        >
          <a className="mx-4 font-semibold transition-colors hover:text-amber-600 ">
            Previous Page
          </a>
        </Link>
        <div className="hidden md:-mt-px md:flex">
          <Link href={`/products`}>
            <a
              className={`${
                currentPage === "1"
                  ? `text-amber-700 border-t-2 border-amber-600`
                  : `text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300`
              } inline-flex items-center p-4 text-sm font-extrabold  border-t-2  `}
            >
              {1}
            </a>
          </Link>
          {Array.from({ length: PAGES_COUNT - 1 }, (_, i) => {
            return (
              <Link key={i} href={`/products/${i + 2}`}>
                <a
                  className={`${
                    currentPage === String(i + 2)
                      ? `text-amber-700 border-t-2 border-amber-600`
                      : `text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300`
                  } inline-flex items-center p-4 text-sm font-extrabold  border-t-2  `}
                >
                  {i + 2}
                </a>
              </Link>
            );
          })}
        </div>
        <Link
          href={
            currentPageNum < PAGES_COUNT - 1
              ? `/products/${currentPageNum + 1}`
              : `/products/${PAGES_COUNT}`
          }
        >
          <a className="mx-4 font-semibold transition-colors hover:text-amber-600 ">
            Next Page
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PaginationSSG;
