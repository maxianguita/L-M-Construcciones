import { memo } from "react";

const FloatingWhatsApp = ({ phone, message = "Hola, quiero una cotización" }) => {
  // Asegúrate de que el número incluya el código de país (ej: 54911xxxxxxx)
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="
        fixed right-4 bottom-4 z-50  /* 🔥 CAMBIO CLAVE: bottom-4 para móvil */
        
        /* TAMAÑO NORMALIZADO: h-14 w-14 (md:h-16 md:w-16) */
        h-14 w-14 md:h-16 md:w-16
        
        grid place-items-center
        rounded-full shadow-lg
        bg-green-500 hover:bg-green-600
        text-white transition
        animate-[pulse_2.5s_ease-in-out_infinite]
      "
      style={{
        // Estilo de sombra mejorado y más limpio
        boxShadow: "0 4px 12px rgba(0,0,0,.35)", 
      }}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 md:h-9 md:w-9"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.54c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.83-2.02-.22-.53-.45-.45-.61-.45-.16 0-.34-.02-.52-.02s-.48.07-.73.34c-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.94 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.31zM16.03 28C9.94 28 5 23.05 5 16.97 5 10.88 9.94 5.94 16.03 5.94c6.08 0 11.03 4.94 11.03 11.03C27.06 23.05 22.11 28 16.03 28zm0-24C8.83 4 3 9.83 3 16.97 3 24.11 8.83 29.94 16.03 29.94c7.13 0 12.97-5.83 12.97-12.97C29 9.83 23.16 4 16.03 4z" />
      </svg>
    </a>
  );
};

export default memo(FloatingWhatsApp);