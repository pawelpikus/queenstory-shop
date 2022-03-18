import Link from "next/link";
import { routes } from "../routes/routes";
import { LEFT_RIGHT } from "../utils/consts";

type PaginationProps = {
  activePage: number;
  totalPages: number | undefined;
  minPageLimit: number;
  maxPageLimit: number;
  onPrevClick: () => void;
  onNextClick: () => void;
};

const PaginationSSG = ({
  onNextClick,
  onPrevClick,
  activePage,
  minPageLimit,
  maxPageLimit,
  totalPages,
}: PaginationProps) => {
  const currentPageNum = activePage || 0;
  const totalPagesNum = totalPages || 2;

  const pages = [...new Array(totalPagesNum - 2)].map((_, i) => i + 1);

  const handlePrevClick = () => {
    onPrevClick();
  };

  const handleNextClick = () => {
    onNextClick();
  };

  return (
    <div className="flex flex-col items-center px-4 mt-12 mb-8 border-neutral-200 sm:px-0">
      <div className="flex items-center w-full gap-4">
        {!activePage ? (
          <div className="font-bold text-neutral-500">Loading...</div>
        ) : (
          <>
            <Link
              href={
                currentPageNum > 1
                  ? `${routes.PRODUCTS}/${currentPageNum - 1}`
                  : `${routes.PRODUCTS}/1`
              }
            >
              <a
                onClick={handlePrevClick}
                className={` ${
                  currentPageNum <= 1
                    ? `pointer-events-none text-neutral-400`
                    : null
                }  mx-4 font-semibold transition-colors hover:text-emerald-600`}
              >
                Previous Page
              </a>
            </Link>
            <div className="items-baseline hidden md:-mt-px md:flex">
              <Link href={`${routes.PRODUCTS}/1`}>
                <a
                  onClick={handlePrevClick}
                  className={`${
                    currentPageNum === 1
                      ? `text-emerald-700 border-t-2 border-emerald-600`
                      : `text-neutral-500 border-transparent hover:text-neutral-700 hover:border-neutral-300`
                  } inline-flex items-center p-4 text-sm font-extrabold  border-t-2`}
                >
                  1
                </a>
              </Link>

              {minPageLimit > LEFT_RIGHT + 1 ? <div>&hellip;</div> : null}
              {pages.map((page) => {
                if (
                  page < maxPageLimit - LEFT_RIGHT &&
                  page >= minPageLimit - LEFT_RIGHT
                ) {
                  return (
                    <Link key={page} href={`${routes.PRODUCTS}/${page + 1}`}>
                      <a
                        className={`${
                          currentPageNum === page + 1
                            ? `text-emerald-700 border-t-2 border-emerald-600`
                            : `text-neutral-500 border-transparent hover:text-neutral-700 hover:border-neutral-300`
                        } inline-flex items-center p-4 text-sm font-extrabold  border-t-2`}
                      >
                        {page + 1}
                      </a>
                    </Link>
                  );
                } else {
                  return null;
                }
              })}
              {pages.length > maxPageLimit - (LEFT_RIGHT + 1) ? (
                <div>&hellip;</div>
              ) : null}

              <Link href={`${routes.PRODUCTS}/${totalPages}`}>
                <a
                  className={`${
                    activePage === totalPages
                      ? `text-emerald-700 border-t-2 border-emerald-600`
                      : `text-neutral-500 border-transparent hover:text-neutral-700 hover:border-neutral-300`
                  } inline-flex items-center p-4 text-sm font-extrabold  border-t-2`}
                >
                  {totalPages}
                </a>
              </Link>
            </div>

            <Link
              href={
                totalPages && currentPageNum < totalPages
                  ? `/products/${currentPageNum + 1}`
                  : `/products/${totalPages}`
              }
            >
              <a
                onClick={handleNextClick}
                className={` ${
                  currentPageNum === totalPages
                    ? `pointer-events-none text-neutral-400`
                    : null
                } mx-4 font-semibold transition-colors hover:text-emerald-600`}
              >
                Next Page
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default PaginationSSG;
