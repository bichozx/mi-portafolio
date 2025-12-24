import { sendMessage } from '../../app/contact/sendMessage';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await sendMessage(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      console.error(err);
    }
  };

  return (
    <section id="contact" className="w-full py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="text-gray-400 mb-10 max-w-xl">
          ¿Tienes un proyecto o una oferta? Escríbeme con tus datos y lo hablamos.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
        >
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Nombre"
            className="
    p-3 rounded
    bg-(--card)
    text-(--text)
    placeholder:text-(--muted)
    border border-transparent
   focus:ring-2 focus:ring-indigo-500/40
    outline-none
  "
          />

          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="
    p-3 rounded
    bg-(--card)
    text-(--text)
    placeholder:text-(--muted)
    border border-transparent
    focus:ring-2 focus:ring-indigo-500/40
    outline-none
  "
          />

          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Mensaje"
            className="
    p-3 rounded
    bg-(--card)
    text-(--text)
    placeholder:text-(--muted)
    border border-transparent
    focus:border-indigo-500
    outline-none
    md:col-span-2 h-36
  "
          />

          <div className="md:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition rounded text-white"
            >
              Enviar
            </button>

            {status === 'loading' && (
              <span className="text-gray-400">Enviando…</span>
            )}
            {status === 'success' && (
              <span className="text-green-400">Mensaje enviado ✅</span>
            )}
            {status === 'error' && (
              <span className="text-red-400">Error al enviar</span>
            )}
          </div>
        </form>

        <div className="mt-12 text-gray-400">
          <p>
            También puedes contactarme por{' '}
            <a
              className="text-indigo-400 hover:underline"
              href="mailto:kmilo2021@outlook.com"
            >
              Email
            </a>{' '}
            •{' '}
            <a
              className="text-indigo-400 hover:underline"
              href="https://wa.me/573104436590"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
