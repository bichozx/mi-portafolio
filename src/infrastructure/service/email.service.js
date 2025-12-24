// email.service.js
// Servicio de ejemplo que puede adaptarse a EmailJS, SendGrid o tu backend.
// Aquí devolvemos una promesa simulada.

// export async function sendEmail({ name, email, message }) {
//   // Si integras EmailJS, coloca aquí la llamada fetch/EmailJS
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Sending email simulated:", { name, email, message });
//       resolve({ ok: true, message: "Email sent (simulado)" });
//     }, 800);
//   });
// }

// email.service.js
import emailjs from "emailjs-com";

export async function sendEmail({ name, email, message }) {
  const result = await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: name,
      from_email: email,
      message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  return result;
}
