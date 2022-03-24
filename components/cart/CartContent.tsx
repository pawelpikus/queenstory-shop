import React from "react";

const CartContent = () => {
  return (
    <div className="w-full p-4 my-4 bg-white rounded-lg shadow-xl md:p-5 lg:p-6">
      <h1 className="my-12 text-2xl text-center ">Koszyk</h1>
      <div className="flex flex-col w-full h-full p-8 border border-neutral-200 ">
        <p>Nie masz obecnie produktów w koszyku.</p>
      </div>
    </div>
  );
};

export default CartContent;
