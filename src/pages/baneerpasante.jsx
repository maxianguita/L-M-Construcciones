export default function BannerPasante({
  description = "🏗️ CONSTRUYENDO EL FUTURO CON SOLIDEZ Y PRECISIÓN • CONTACTATE CON NOSTROS: 54 911 3035-2067",
}) {
  return (
    <div className="w-full overflow-hidden bg-[#1a2530] border-y border-orange-500/30 py-4">
      {/* Contenedor con animación fluida de ida y vuelta */}
      <div className="w-fit animate-[slide_8s_ease-in-out_infinite_alternate]">
        <div className="px-8 py-2 text-sm md:text-base font-semibold uppercase tracking-widest text-slate-100 flex items-center gap-3 whitespace-nowrap">
          {description}
        </div>
      </div>

      {/* Inyección de Keyframes optimizados */}
      <style>
        {`
          @keyframes slide {
            from {
              transform: translateX(2vw);
            }
            to {
              /* Evita que se desfase por completo en pantallas muy grandes */
              transform: translateX(calc(98vw - 100%));
            }
          }
        `}
      </style>
    </div>
  );
}