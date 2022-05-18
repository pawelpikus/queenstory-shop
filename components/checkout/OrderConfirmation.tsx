import { ParsedUrlQuery } from "querystring";
import React from "react";
import { routes } from "../../routes/routes";
import SecondaryLink from "../links/SecondaryLink";

interface OrderConfirmationProps {
  session?: ParsedUrlQuery;
}

const OrderConfirmation = ({ session }: OrderConfirmationProps) => {
  return (
    <>
      <div className="flex flex-col items-start w-11/12 max-w-6xl gap-4 p-4 mx-auto mt-4 mb-12 bg-white lg:p-12 ">
        <p>
          Twoje zamówienie <span>{session?.session_id}</span> zostało złożone
          poprawnie. Dziękujemy!
        </p>
        <SecondaryLink href={routes.PRODUCTS_GQL}>Wróć do sklepu</SecondaryLink>
      </div>
    </>
  );
};

export default OrderConfirmation;
