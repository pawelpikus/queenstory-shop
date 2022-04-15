import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCartItemsFromStorage, setCartItemsInStorage } from "./cartModel";

export interface CartItem {
  readonly id: number | string;
  title: string;
  price: number;
  thumbnail: string;
  count: number;
}

interface CartState {
  items: CartItem[];
  addCartItem: (item: CartItem) => void;
  removeCartItem: (id: CartItem["id"]) => void;
  calculateSubtotal: () => number;
}

export const CartContext = createContext<CartState | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItemsFromStorage);
  }, []);

  useEffect(() => {
    setCartItemsInStorage(cartItems);
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addCartItem: (item) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find(
              (existingItem) => existingItem.id === item.id
            );
            if (!existingItem) {
              return [...prevState, item];
            }
            return prevState.map((existingItem) =>
              existingItem.id === item.id
                ? {
                    ...existingItem,
                    count: existingItem.count + 1,
                  }
                : existingItem
            );
          });
        },
        removeCartItem: (id) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find(
              (existingIem) => existingIem.id === id
            );
            if (existingItem && existingItem.count <= 1) {
              return prevState.filter((existingIem) => existingIem.id !== id);
            }
            return prevState.map((existingItem) => {
              if (existingItem.id === id) {
                return {
                  ...existingItem,
                  count: existingItem.count - 1,
                };
              }
              return existingItem;
            });
          });
        },
        calculateSubtotal: () => {
          let subtotal = 0;
          const itemsInCart = cartItems;
          itemsInCart.map((item) => {
            subtotal += item.price * item.count;
          });
          return subtotal;
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartContext);
  if (!cartState) {
    throw new Error("There's no context provider.");
  }

  return cartState;
};
