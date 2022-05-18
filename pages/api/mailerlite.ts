// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return res.setHeader("Allow", "POST").status(405).json({});
  }

  const MAILER_LITE_API_KEY = process.env.MAILERLITE_API_KEY;
  const MAILER_LITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

  if (!MAILER_LITE_API_KEY || !MAILER_LITE_GROUP_ID) {
    return res
      .status(500)
      .json({ error: "Nie podano zmiennych środowiskowych" });
  }

  const email = req.body.email;

  if (typeof email !== "string") {
    return res.status(400).json({});
  }

  const mailerLiteResponse = await fetch(
    `https://api.mailerlite.com/api/v2/groups/${MAILER_LITE_GROUP_ID}/subscribers`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": MAILER_LITE_API_KEY,
      },
      body: JSON.stringify({ email }),
    }
  );
  if (!mailerLiteResponse.ok) {
    return res
      .status(500)
      .json({ error: "Pojawił się problem przy zapisie do Newslettera." });
  }
  return res.status(201).json({});
};

export default handler;
