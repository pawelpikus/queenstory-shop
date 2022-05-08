import { ReactNode } from "react";
import { useCartState } from "../cart/cartContext";
import { CartItem } from "../cart/cartContext";

interface SecondaryButtonProps {
  children: ReactNode;
  disabled?: boolean;
  item?: CartItem;
}

const SecondaryButton = ({
  children,
  item,
  disabled,
}: SecondaryButtonProps) => {
  const { addCartItem } = useCartState();
  return (
    <button
      disabled={disabled}
      onClick={() => item && addCartItem(item)}
      className={`disabled:opacity-75 px-2 py-1 transition-all bg-transparent border font-narrow hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
