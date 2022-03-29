import { CartItem } from "./cartContext";

export const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem("QUEEN_STORY_CART");
  if (!itemsFromLocalStorage) {
    return [];
  }
  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const setCartItemsInStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("QUEEN_STORY_CART", JSON.stringify(cartItems));
};
