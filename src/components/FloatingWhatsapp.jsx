import { memo } from "react";

const FloatingWhatsApp = () => {
  // Número en formato internacional (Argentina)
  const phone = "5491130352067"; // 54 (código país) + 9 + número sin 15
  const message = "Hola, quiero más información sobre sus servicios";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Función que abre WhatsApp cuando el usuario hace clic
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chatear por WhatsApp"
      className="
        fixed bottom-20 left-6 z-50 
    h-14 w-14 md:h-16 md:w-16
    grid place-items-center
    rounded-full shadow-lg
    bg-green-500 hover:bg-green-600
    text-white transition
    animate-[pulse_2.5s_ease-in-out_infinite]
  "
      style={{
        boxShadow: "0 4px 12px rgba(0,0,0,.35)",
      }}
    >
      <span className="border-4 border-white rounded-full p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          fill="currentColor"
          aria-hidden="true"
          width={20}
          height={20}
        >
          <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
        </svg>
      </span>
    </button>
  );
};

export default memo(FloatingWhatsApp);
