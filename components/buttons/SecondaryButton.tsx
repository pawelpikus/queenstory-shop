import { ReactNode } from "react";
import { useCartState } from "../cart/cartContext";
import { CartItem } from "../cart/cartContext";

interface PrimaryButtonProps {
  children: ReactNode;
  item?: CartItem;
}

const SecondaryButton = ({ children, item }: PrimaryButtonProps) => {
  const cartState = useCartState();
  return (
    <button
      onClick={() => item && cartState.addCartItem(item)}
      className="px-2 py-1 transition-all bg-transparent border font-narrow hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
