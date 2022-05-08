import { useRouter } from "next/router";
import React from "react";

type Props = {};

const CheckoutSuccessPage = (props: Props) => {
  const router = useRouter();
  console.log(router.query.session_id);
  return <div>Payment Successful!</div>;
};

export default CheckoutSuccessPage;
