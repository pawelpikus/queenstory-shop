import { NextApiHandler } from "next";
import { StripeWebhookEvents } from "../../stripeEvents";

const stripeWebhook: NextApiHandler = (req, res) => {
  //@todo verify webhook sigining secret

  const event = req.body as StripeWebhookEvents;
  
  if (event.type === "checkout.session.completed") {
    //@todo zaktualizuj zamówienie w GraphCMS
    console.log(event.data.object.id);
    return;
  }

  res.status(204).end();
};

export default stripeWebhook;
