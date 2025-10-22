// api/contact.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { nombre, email, mensaje } = req.body || {};
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ ok: false, error: "Datos incompletos" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,          // ej: "smtp.gmail.com"
    port: Number(process.env.SMTP_PORT),  // ej: 465
    secure: true,                         // true para 465
    auth: {
      user: process.env.SMTP_USER,        // tu cuenta
      pass: process.env.SMTP_PASS,        // app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Web L&M" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,           // destino final
      replyTo: email,
      subject: "Nuevo contacto desde la web",
      html: `
        <h3>Nuevo mensaje</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${mensaje}</p>
      `,
    });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "No se pudo enviar" });
  }
}
