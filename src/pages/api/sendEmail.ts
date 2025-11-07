import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import type { Transporter, SendMailOptions } from "nodemailer";
import "dotenv/config";

let transporter: Transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const headers = new Headers();

  const lastEmailTimeCookie = request.headers
    .get("Cookie")
    ?.match(/lastEmailTime=(\d+)/);
  const lastEmailTime = lastEmailTimeCookie
    ? parseInt(lastEmailTimeCookie[1], 10)
    : null;

  if (lastEmailTime && Date.now() - lastEmailTime < 15 * 60 * 1000) {
    return new Response(
      JSON.stringify({
        success: false,
        message:
          "Rate limit exceeded. Please wait 15 minutes before sending another message.",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 429,
      }
    );
  }
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const recaptchaToken = formData.get("recaptchaToken") as string;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }

    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "reCAPTCHA verification failed",
        }),
        { status: 400 }
      );
    }

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "reCAPTCHA verification failed. Please try again.",
        }),
        { status: 400 }
      );
    }
    const mailOptions: SendMailOptions = {
      from: {
        name: name,
        address: email,
      },
      replyTo: email,
      to: "natmays97@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    await transporter.sendMail(mailOptions);
    // return new Response(JSON.stringify({ success: true }), {
    //   headers: { "Content-Type": "application/json" },
    // });
    headers.set(
      "Set-Cookie",
      `lastEmailTime=${Date.now()}; Max-Age=900; HttpOnly`
    );
    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully." }),
      {
        headers,
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error sending email: ", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};
