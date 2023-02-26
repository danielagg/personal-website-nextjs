// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

export async function POST(request: NextRequest) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

  try {
    const email = request.nextUrl.searchParams.get("email");
    const name = request.nextUrl.searchParams.get("name");
    const message = request.nextUrl.searchParams.get("message");

    await sendgrid.send({
      to: "hu.danielagg@gmail.com",
      from: "daniel.agg@outlook.com",
      subject: "Email from Personal Site",
      html: `<div>${email} (${name}) sent the following: ${message}</div>`,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not send email." },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({ message: "Email successfully sent." });
}
