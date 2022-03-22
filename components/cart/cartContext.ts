import { createContext } from "react";

interface CartItem {
  title: string;
  price: number;
}

interface CartState {
  item: CartItem;
}

export const cartContext = createContext<CartState | null>(null);
