import emailjs from "emailjs-com";

export async function sendEmail({ name, email, message }) {
  const result = await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: name,
      email: email,
      message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  return result;
}
