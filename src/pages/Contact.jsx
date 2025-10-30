// import React, { memo, useRef, useState } from "react";
// import { Send, PhoneCall, CheckCircle, XCircle, X } from "lucide-react";
// // Se ha eliminado la importación de 'emailjs' para resolver el error de compilación.

// // Las constantes de entorno han sido eliminadas ya que la librería emailjs ya no se utiliza
// // y se simulará el envío del formulario.

// // =========================================================================
// // 1. COMPONENTE MODAL DE ESTADO
// // Muestra mensajes de éxito o error con un estilo minimalista.
// // =========================================================================

// const StatusModal = ({ isOpen, onClose, type, message }) => {
//   if (!isOpen) return null;

//   // Estilos y contenido basados en el tipo de mensaje (success o error)
//   const isSuccess = type === "success";
//   const icon = isSuccess ? <CheckCircle className="w-8 h-8" /> : <XCircle className="w-8 h-8" />;
//   const baseColor = isSuccess ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100";
//   const buttonColor = isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700";

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4" onClick={onClose}>
//       <div 
//         className={`w-full max-w-md p-6 rounded-xl shadow-2xl transition-all duration-300 transform scale-100 ${baseColor} border-t-4 border-b-4 ${isSuccess ? 'border-green-800' : 'border-red-800'}`}
//         onClick={(e) => e.stopPropagation()} // Evita que el clic dentro cierre el modal
//       >
//         <button 
//             onClick={onClose} 
//             className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
//             aria-label="Cerrar"
//         >
//             <X className="w-6 h-6" />
//         </button>

//         <div className="flex flex-col items-center text-center">
//           {icon}
          
//           <h3 className="mt-4 text-2xl font-bold">
//             {isSuccess ? "¡Enviado!" : "Error de Envío"}
//           </h3>
          
//           <p className="mt-2 text-gray-700">
//             {message}
//           </p>

//           <button
//             onClick={onClose}
//             className={`mt-6 w-full py-2 rounded-lg font-bold text-white transition duration-200 ${buttonColor} shadow-md`}
//           >
//             Aceptar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// // =========================================================================
// // 2. COMPONENTE PRINCIPAL DE CONTACTO (Contact)
// // =========================================================================

// const Contact = () => {
//   const formRef = useRef(null);
//   const [status, setStatus] = useState("idle");

//   // Estado y funciones para el modal
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState({ type: '', message: '' });

//   const openModal = (type, message) => {
//     setModalContent({ type, message });
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setStatus("idle"); // Reset status después de cerrar el modal
//   };


//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!formRef.current) return;
//     setStatus("sending");

//     try {
//       // -------------------------------------------------------------------
//       // SIMULACIÓN DE ENVÍO DE FORMULARIO
//       // Se utiliza un setTimeout para simular la llamada a la API y la latencia.
//       // Esto corrige el error de "Could not resolve @emailjs/browser".
//       // -------------------------------------------------------------------
//       await new Promise(resolve => setTimeout(resolve, 1500)); 
      
//       // Simulación de éxito (90% de probabilidad de éxito para fines de prueba)
//       const success = Math.random() > 0.1; 
      
//       if (success) {
//           setStatus("ok");
//           openModal('success', '¡Mensaje enviado con éxito! Te contactaremos muy pronto para iniciar tu proyecto.');
//           formRef.current.reset();
//       } else {
//           // Simulación de error
//           throw new Error("Error de conexión simulado.");
//       }
//       // -------------------------------------------------------------------

//     } catch (err) {
//       // Manejo del error
//       console.error("Error al enviar el formulario (simulado):", err);
//       setStatus("error");
//       openModal('error', 'Hubo un problema al enviar tu solicitud. Por favor, revisa tu conexión o inténtalo de nuevo.');
//     }
//   };

//   const isSending = status === "sending";

//   return (
//     <section id="contacto" className="py-20 bg-gray-50 font-sans mt-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Encabezado */}
//         <div className="text-center mb-12">
//           <PhoneCall className="w-8 h-8 mx-auto text-blue-700 mb-2" />
//           <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
//             Contáctanos
//           </h2>
//           <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
//             Inicia tu proyecto hoy. Rellena el formulario y nuestro equipo te responderá en menos de 24 horas.
//           </p>
//         </div>

//         {/* Formulario */}
//         <form
//           ref={formRef}
//           onSubmit={onSubmit}
//           className="w-full bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-100 space-y-6"
//         >
//           {/* Campo oculto con la hora */}
//           <input type="hidden" name="tiempo" value={new Date().toLocaleString()} />

//           {/* Nombre */}
//           <div>
//             <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1">
//               Nombre Completo
//             </label>
//             <input
//               id="nombre"
//               name="nombre"
//               type="text"
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 
//                           focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
//                           transition duration-150 shadow-sm"
//             />
//           </div>

//           {/* Correo */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
//               Correo Electrónico
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 
//                           focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
//                           transition duration-150 shadow-sm"
//             />
//           </div>

//           {/* Mensaje */}
//           <div>
//             <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-1">
//               ¿En qué podemos ayudarte?
//             </label>
//             <textarea
//               id="mensaje"
//               name="mensaje"
//               rows={5}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 
//                           focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
//                           transition duration-150 shadow-sm"
//             />
//           </div>

//           {/* Botón */}
//           <button
//             type="submit"
//             disabled={isSending}
//             className={`w-full py-3 rounded-lg font-bold text-lg transition duration-300 
//                          flex items-center justify-center space-x-2 
//                          ${
//                            isSending
//                              ? "bg-blue-300 text-white cursor-not-allowed"
//                              : "bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:shadow-xl"
//                          }`}
//           >
//             {isSending ? (
//               <>
//                 <Send className="w-5 h-5 animate-spin" />
//                 <span>Enviando...</span>
//               </>
//             ) : (
//               <>
//                 <Send className="w-5 h-5" />
//                 <span>Enviar Solicitud</span>
//               </>
//             )}
//           </button>
//         </form>
//       </div>

//       {/* Renderizado del Modal */}
//       <StatusModal
//         isOpen={modalOpen}
//         onClose={closeModal}
//         type={modalContent.type}
//         message={modalContent.message}
//       />
//     </section>
//   );
// };

// export default memo(Contact);

import React, { memo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Send, PhoneCall, CheckCircle, XCircle, X, ArrowLeft } from "lucide-react";

// =========================================================================
// 1. COMPONENTE MODAL DE ESTADO
// =========================================================================
const StatusModal = ({ isOpen, onClose, type, message }) => {
  if (!isOpen) return null;

  const isSuccess = type === "success";
  const icon = isSuccess ? <CheckCircle className="w-8 h-8" /> : <XCircle className="w-8 h-8" />;
  const baseColor = isSuccess ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100";
  const buttonColor = isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-full max-w-md p-6 rounded-xl shadow-2xl transition-all duration-300 transform scale-100 ${baseColor} border-t-4 border-b-4 ${isSuccess ? 'border-green-800' : 'border-red-800'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          {icon}
          <h3 className="mt-4 text-2xl font-bold">
            {isSuccess ? "¡Enviado!" : "Error de Envío"}
          </h3>
          <p className="mt-2 text-gray-700">{message}</p>
          <button
            onClick={onClose}
            className={`mt-6 w-full py-2 rounded-lg font-bold text-white transition duration-200 ${buttonColor} shadow-md`}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 2. COMPONENTE PRINCIPAL DE CONTACTO (Contact)
// =========================================================================
const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ type: "", message: "" });

  const openModal = (type, message) => {
    setModalContent({ type, message });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setStatus("idle");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      // Simulación de envío
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const success = Math.random() > 0.1;

      if (success) {
        setStatus("ok");
        openModal("success", "¡Mensaje enviado con éxito! Te contactaremos muy pronto para iniciar tu proyecto.");
        formRef.current.reset();
      } else {
        throw new Error("Error de conexión simulado.");
      }
    } catch (err) {
      console.error("Error al enviar el formulario (simulado):", err);
      setStatus("error");
      openModal("error", "Hubo un problema al enviar tu solicitud. Por favor, revisa tu conexión o inténtalo de nuevo.");
    }
  };

  const isSending = status === "sending";

  return (
    <section id="contacto" className="py-20 bg-gray-50 font-sans mt-20 relative">
      {/* Flecha fija arriba a la izquierda solo visible en móvil */}
      <Link
        to="/"
        aria-label="Volver al inicio"
        title="Volver al inicio"
        className="fixed top-24 left-6 z-50 inline-flex items-center justify-center
                   h-9 w-9 rounded-full bg-white/90 backdrop-blur border border-black/5
                   text-gray-700 shadow-md transition
                   hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500
                   block sm:hidden"  // 👈 visible solo en mobile
      >
        <ArrowLeft className="h-4 w-4" />
      </Link>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <PhoneCall className="w-8 h-8 mx-auto text-blue-700 mb-2" />
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">Contáctanos</h2>
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
                            : "bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:shadow-xl"
                        }`}
          >
            {isSending ? (
              <>
                <Send className="w-5 h-5 animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Enviar Solicitud</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Modal de estado */}
      <StatusModal
        isOpen={modalOpen}
        onClose={closeModal}
        type={modalContent.type}
        message={modalContent.message}
      />
    </section>
  );
};

export default memo(Contact);
