import { memo, useEffect, useState } from "react";
import pintura1 from "../assets/pintura1.jpeg";
import plomero from "../assets/plomero.jpg";
import obreros3 from "../assets/obreros3.png";
import pintura2 from "../assets/pintura2.jpg";
import obreros1 from "../assets/obreros1.jpg";      


const slides = [
  { id: 1, src: pintura1, alt: "Pintura de obra" },
  { id: 2, src: plomero, alt: "plomeria" },
  { id: 3, src: obreros3, alt: "Edificio terminado" },
  {id: 4, src: pintura2, alt: "Pintura de obra2" },
  { id: 5, src: obreros1, alt: "obreros2" },
  
];

const Carrousel = () => {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === slides.length - 1 ? 0 : i + 1));


  useEffect(() => {
    const interval = setInterval(() => {
        setIdx((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 6000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
}, []);     

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-[100vw] overflow-hidden  rounded-lg shadow-lg  mt-8">
      {/* Slides */}
      <div className="relative h-[600px] w-full overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.id}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white"
      >
        ›
      </button>

      {/* Paginación */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === idx ? "bg-yellow-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Carrousel);
