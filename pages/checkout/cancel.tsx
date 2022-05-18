import { useRouter } from "next/router";
import React from "react";

type Props = {};

const CheckoutCancelPage = (props: Props) => {
  const router = useRouter();
  console.log(router);
  return <div>Payment Cancelled!</div>;
};

export default CheckoutCancelPage;
