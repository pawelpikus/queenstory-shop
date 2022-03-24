import { ReactNode } from "react";
import { CartItem } from "../cart/cartContext";

type Props = { children: ReactNode; addCartItem: (item: CartItem) => void };

const PrimaryButton = ({ children, addCartItem }: Props) => {
  return (
    <button
      onClick={() => addCartItem({ title, price })}
      className="px-2 py-1 font-semibold transition-all bg-transparent border rounded hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
