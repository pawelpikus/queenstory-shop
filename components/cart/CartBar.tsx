import Link from "next/link";
import { useCartState } from "./cartContext";

const CartBar = () => {
  const { items } = useCartState();
  return (
    <div className="flex items-center ml-4 transition-colors text-neutral-200 hover:text-white">
      <Link href="/cart">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 lg:w-6 lg:h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </a>
      </Link>
      <div
        className={
          items.length > 0
            ? "text-emerald-50 px-1.5 tracking-tight text-xs rounded-full bg-emerald-500"
            : "hidden"
        }
      >
        {items.length > 0 && items.length}
      </div>
    </div>
  );
};

export default CartBar;
