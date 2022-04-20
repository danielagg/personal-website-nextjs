import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const { email, name, message } = request.body;
    await sendgrid.send({
      to: "daniel.agg@outlook.com",
      from: "daniel.agg@outlook.com",
      subject: "Email from Personal Site",
      html: `<div>${email} (${name}) sent the following: ${message}</div>`,
    });
  } catch (error) {
    return response.status(500).json({ error: "Could not send email" });
  }

  return response.status(200).json({ error: "" });
};

export default handler;
