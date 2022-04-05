import { useCartState } from "./cartContext";
import EmptyCartContent from "./EmptyCartContent";
import CartMainTable from "./CartMainTable";
import CartSubtotal from "./CartSubtotal";

const CartContent = () => {
  const { items } = useCartState();

  return (
    <div className="w-11/12 max-w-6xl p-4 mt-4 mb-12 bg-white lg:p-12 ">
      <h1 className="mb-8 text-2xl text-center">Koszyk</h1>
      <div className="flex flex-col w-full h-full p-8 border border-neutral-200 ">
        {items.length < 1 ? (
          <EmptyCartContent text="Nie masz obecnie produktów w koszyku." />
        ) : (
          <CartMainTable />
        )}
      </div>
      {items.length > 0 ? <CartSubtotal /> : null}
    </div>
  );
};

export default CartContent;
