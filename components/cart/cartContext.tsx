import { createContext, ReactNode, useContext, useState } from "react";

export interface CartItem {
  title: string;
  price: number;
  count: number;
}

interface CartState {
  items: CartItem[];
  addCartItem: (item: CartItem) => void;
}

export const CartContext = createContext<CartState | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addCartItem: (item) => {
          setCartItems((cartItems) => {
            const existingItem = cartItems.find(
              (existingItem) => existingItem.title === item.title
            );
            if (!existingItem) {
              return [...cartItems, item];
            }
            return cartItems.map((existingItem) =>
              existingItem.title === item.title
                ? {
                    ...existingItem,
                    count: existingItem.count + 1,
                  }
                : existingItem
            );
          });
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
