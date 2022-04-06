import { useCartState } from "./cartContext";
import EmptyCartContent from "./EmptyCartContent";
import CartMainTableDesktop from "./CartMainTableDesktop";
import CartSubtotal from "./CartSubtotal";
import CartMainTableMobile from "./CartMainTableMobile";

const CartContent = () => {
  const { items } = useCartState();

  return (
    <div className="w-11/12 max-w-6xl p-4 mt-4 mb-12 bg-white lg:p-12 ">
      <h1 className="mb-8 text-2xl text-center">Koszyk</h1>
      <div className="flex flex-col w-full h-full p-2 border lg:p-8 border-neutral-200 ">
        {items.length < 1 ? (
          <EmptyCartContent text="Nie masz obecnie produktów w koszyku." />
        ) : (
          <>
            <CartMainTableDesktop />
            <CartMainTableMobile />
          </>
        )}
      </div>

      {items.length > 0 ? <CartSubtotal /> : null}
    </div>
  );
};

export default CartContent;
