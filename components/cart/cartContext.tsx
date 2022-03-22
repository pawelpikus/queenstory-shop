import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  title: string;
  price: number;
}

interface CartState {
  items: CartItem[];
}

export const CartContext = createContext<CartState | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      title: "item1",
      price: 25.2,
    },
  ]);

  return (
    <CartContext.Provider value={{ items: cartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartContext);
  if (!cartState) {
    throw new Error("Please provide CartContextProvider.");
  }

  return cartState;
};
