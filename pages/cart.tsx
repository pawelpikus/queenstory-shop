import { useCartState } from "../components/cart/cartContext";
import { formatter } from "../utils/priceFormatter";

const CartPage = () => {
  const cartState = useCartState();

  const cartItems = cartState.items;
  return (
    <div className="flex flex-col items-center gap-2 my-4">
      <ul>
        {cartItems.map((item, i) => (
          <li key={`${item.title}_${i}`}>
            {item.title} - {formatter.format(item.price)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
