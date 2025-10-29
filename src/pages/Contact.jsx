import { memo, useRef, useState } from "react";
import { Send, PhoneCall } from "lucide-react";
import emailjs from "@emailjs/browser";

// 🔹 Variables de entorno en Vite
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
      console.error("Error al enviar el formulario:", err);
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <section id="contacto" className="py-20 bg-gray-50 font-sans mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <PhoneCall className="w-8 h-8 mx-auto text-blue-700 mb-2" />
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Inicia tu proyecto hoy. Rellena el formulario y nuestro equipo te responderá en menos de 24 horas.
          </p>
        </div>

        {/* Formulario */}
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="w-full bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-100 space-y-6"
        >
          {/* Campo oculto con la hora */}
          <input type="hidden" name="tiempo" value={new Date().toLocaleString()} />

          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1">
              Nombre Completo
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                         transition duration-150 shadow-sm"
            />
          </div>

          {/* Correo */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                         transition duration-150 shadow-sm"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-1">
              ¿En qué podemos ayudarte?
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                         transition duration-150 shadow-sm"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 rounded-lg font-bold text-lg transition duration-300 
                        flex items-center justify-center space-x-2 
                        ${
                          isSending
                            ? "bg-blue-300 text-white cursor-not-allowed"
                            : "bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:shadow-lg"
                        }`}
          >
            {isSending ? (
              <>
                <Send className="w-5 h-5 animate-pulse" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Enviar Solicitud</span>
              </>
            )}
          </button>

          {/* Estado */}
          {status === "ok" && (
            <p className="text-green-600 text-base font-semibold text-center mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-base font-semibold text-center mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
              Hubo un problema al enviar. Por favor, verifica tus datos e inténtalo de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default memo(Contact);
