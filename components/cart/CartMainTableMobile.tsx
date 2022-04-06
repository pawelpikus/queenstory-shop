import { useCartState } from "./cartContext";
import { formatter } from "../../utils/priceFormatter";
import SecondaryButton from "../buttons/SecondaryButton";

const CartMainTableMobile = () => {
  const { items, removeCartItem } = useCartState();
  return (
    <div className="block md:hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-6 py-8 border-b-4 border-neutral-50"
        >
          <div
            className="mb-2 transition-colors rounded-full w-fit text-neutral-800 hover:bg-neutral-800 hover:text-white"
            onClick={() => removeCartItem(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="flex justify-between w-full ">
            <p className="font-bold">Produkt:</p>
            <p>{item.title}</p>
          </div>
          <div className="flex justify-between w-full ">
            <p className="font-bold">Cena:</p>
            <p>{formatter.format(item.price / 100)}</p>
          </div>
          <div className="flex justify-between w-full ">
            <p className="font-bold">Ilość:</p>
            <p>{item.count}</p>
          </div>
          <div className="flex justify-between w-full ">
            <p className="font-bold">Podsuma:</p>
            <p>{formatter.format((item.price * item.count) / 100)}</p>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-end w-full gap-4 mt-12 ">
        <SecondaryButton>Zaktualizuj koszyk</SecondaryButton>
      </div>
    </div>
  );
};

export default CartMainTableMobile;
