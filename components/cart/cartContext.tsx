import { createContext, ReactNode, useContext, useState } from "react";

export interface CartItem {
  title: string;
  price: number;
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
          setCartItems((cartItems) => [...cartItems, item]);
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
