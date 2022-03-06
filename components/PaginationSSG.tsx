import Link from "next/link";

type PaginationProps = {
  page: string | undefined;
};

const PAGES_COUNT = 10;

const PaginationSSG = ({ page }: PaginationProps) => {
  return (
    <div className="flex flex-col items-center px-4 mt-12 mb-8 border-t border-gray-200 sm:px-0">
      <div className="flex min-w-full ">
        <div className="hidden md:-mt-px md:flex">
          {Array.from({ length: PAGES_COUNT }, (_, i) => {
            return (
              <Link key={i} href={`/${i}`}>
                <a
                  className={`${
                    page === i.toString()
                      ? `text-amber-700 border-t-2 border-amber-600`
                      : `text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300`
                  } inline-flex items-center p-4 text-sm font-extrabold  border-t-2  `}
                >
                  {i + 1}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full h-6 text-center"></div>
    </div>
  );
};

export default PaginationSSG;
