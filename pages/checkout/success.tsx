import { useRouter } from "next/router";
import React from "react";
import OrderConfirmation from "../../components/checkout/OrderConfirmation";

const CheckoutSuccessPage = () => {
  const router = useRouter();
  return <OrderConfirmation session={router.query} />;
};

export default CheckoutSuccessPage;
