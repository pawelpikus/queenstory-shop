import React from "react";
import { routes } from "../../routes/routes";
import SecondaryLink from "../links/SecondaryLink";

const CheckoutConfirmation = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <p>Twoje zamówienie zostało złożone poprawnie. Dziękujemy!</p>
        <SecondaryLink href={routes.PRODUCTS_GQL}>Wróć do sklepu</SecondaryLink>
      </div>
    </>
  );
};

export default CheckoutConfirmation;
