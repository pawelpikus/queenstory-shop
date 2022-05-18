import React from "react";
import { routes } from "../../routes/routes";
import SecondaryLink from "../links/SecondaryLink";

type Props = {
  text: string;
};

const EmptyCartContent = ({ text }: Props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <p>{text}</p>
        <SecondaryLink href={routes.PRODUCTS_GQL}>Wróć do sklepu</SecondaryLink>
      </div>
    </>
  );
};

export default EmptyCartContent;
