import { ReactNode } from "react";
import { useCartState } from "../cart/cartContext";
import { CartItem } from "../cart/cartContext";

interface PrimaryButtonProps {
  children: ReactNode;
  item?: CartItem;
}

const PrimaryButton = ({ children, item }: PrimaryButtonProps) => {
  const cartState = useCartState();
  return (
    <button
      onClick={() => item && cartState.addCartItem(item)}
      className="px-2 py-1 font-semibold transition-all bg-transparent border rounded hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
