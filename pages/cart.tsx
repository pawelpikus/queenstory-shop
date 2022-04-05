import SecondaryButton from "../components/buttons/SecondaryButton";
import CartContent from "../components/cart/CartContent";
import { useCartState } from "../components/cart/cartContext";

const CartPage = () => {
  const { items } = useCartState();

  return (
    <div className="flex flex-col items-center">
      <CartContent />
    </div>
  );
};

export default CartPage;
