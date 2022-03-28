import { createContext, ReactNode, useContext, useState } from "react";

export interface CartItem {
  readonly id: number;
  title: string;
  price: number;
  count: number;
}

interface CartState {
  items: CartItem[];
  addCartItem: (item: CartItem) => void;
  removeCartItem: (id: CartItem["id"]) => void;
}

export const CartContext = createContext<CartState | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
