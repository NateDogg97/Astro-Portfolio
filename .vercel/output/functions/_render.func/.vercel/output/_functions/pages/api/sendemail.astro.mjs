import nodemailer from 'nodemailer';
import 'dotenv/config';
export { renderers } from '../../renderers.mjs';

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
const POST = async ({ request }) => {
  const formData = await request.formData();
  const headers = new Headers();
  const lastEmailTimeCookie = request.headers.get("Cookie")?.match(/lastEmailTime=(\d+)/);
  const lastEmailTime = lastEmailTimeCookie ? parseInt(lastEmailTimeCookie[1], 10) : null;
  if (lastEmailTime && Date.now() - lastEmailTime < 15 * 60 * 1e3) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Rate limit exceeded. Please wait 15 minutes before sending another message."
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 429
      }
    );
  }
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields"
        }),
        { status: 400 }
      );
    }
    const mailOptions = {
      from: {
        name,
        address: email
      },
      to: "natmays97@gmail.com",
      subject: `New message from ${name}`,
      text: message
    };
    await transporter.sendMail(mailOptions);
    headers.set(
      "Set-Cookie",
      `lastEmailTime=${Date.now()}; Max-Age=900; HttpOnly`
    );
    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully." }),
      {
        headers,
        status: 200
      }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
