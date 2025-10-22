import { memo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "tu_service_id";
const TEMPLATE_ID = "tu_template_id";
const PUBLIC_KEY = "tu_public_key";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("ok");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-6">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm space-y-5"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            name="nombre"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            rows={4}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          disabled={status === "sending"}
          className="w-full bg-yellow-500 text-white py-3 rounded-lg font-medium hover:bg-yellow-600 transition"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>

        {status === "ok" && (
          <p className="text-green-600 text-sm mt-2">
            ¡Mensaje enviado! Te responderemos pronto.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm mt-2">
            Hubo un problema al enviar. Probá de nuevo.
          </p>
        )}
      </form>
    </section>
  );
};

export default memo(Contact);
