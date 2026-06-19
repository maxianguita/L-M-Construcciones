import { memo } from "react";
import { Link } from "react-router-dom";

const ValueBanner = () => {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-[100vw] bg-[#0f1922] py-20 mt-10 border-y border-slate-800">
      {/* Fondo decorativo geométrico sutil (líneas de plano técnico) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 z-10">
        {/* Título y subtítulo */}
        <div className="text-center mb-12">
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase bg-amber-500/10 px-3 py-1 border border-amber-500/20 rounded-sm">
            Garantía y Confianza
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-wider text-slate-100 uppercase mt-4">
            Calidad profesional, entrega a tiempo
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto font-medium">
            Construcción, pintura y mantenimiento industrial y residencial con respaldo garantizado por escrito.
          </p>
        </div>

        {/* Bloques de Valor Estructurales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tarjeta 1 */}
          <div className="flex flex-col gap-3 p-6 bg-slate-900/60 border border-slate-800 rounded-lg hover:border-amber-500/40 transition-colors duration-300">
            <div className="h-8 w-8 rounded-md bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500 font-bold">
              01
            </div>
            <div>
              <p className="font-bold text-slate-200 uppercase text-sm tracking-wide">Presupuesto en 24 h</p>
              <p className="text-sm text-slate-400 mt-1">Planificación integral sin costo ni compromiso inicial.</p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="flex flex-col gap-3 p-6 bg-slate-900/60 border border-slate-800 rounded-lg hover:border-amber-500/40 transition-colors duration-300">
            <div className="h-8 w-8 rounded-md bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500 font-bold">
              02
            </div>
            <div>
              <p className="font-bold text-slate-200 uppercase text-sm tracking-wide">Materiales certificados</p>
              <p className="text-sm text-slate-400 mt-1">Estructuras seguras, durables y bajo normas técnicas.</p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="flex flex-col gap-3 p-6 bg-slate-900/60 border border-slate-800 rounded-lg hover:border-amber-500/40 transition-colors duration-300">
            <div className="h-8 w-8 rounded-md bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500 font-bold">
              03
            </div>
            <div>
              <p className="font-bold text-slate-200 uppercase text-sm tracking-wide">Garantía 12 meses</p>
              <p className="text-sm text-slate-400 mt-1">Compromiso real respaldado mediante contrato formal.</p>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="flex flex-col gap-3 p-6 bg-slate-900/60 border border-slate-800 rounded-lg hover:border-amber-500/40 transition-colors duration-300">
            <div className="h-8 w-8 rounded-md bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500 font-bold">
              04
            </div>
            <div>
              <p className="font-bold text-slate-200 uppercase text-sm tracking-wide">Proyectos Satisfechos</p>
              <p className="text-sm text-slate-400 mt-1">Reseñas sólidas que avalan nuestra precisión operativa.</p>
            </div>
          </div>
        </div>

        {/* CTAs Profesionales */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto text-center bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-3.5 font-bold uppercase text-xs tracking-wider transition-colors duration-300 rounded-sm shadow-lg shadow-amber-500/10"
          >
            Solicitar cotización
          </Link>
          <a
            href="https://wa.me/5491130352067"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center border border-slate-700 hover:border-amber-500 text-slate-200 hover:text-slate-100 px-8 py-3.5 font-bold uppercase text-xs tracking-wider transition-all duration-300 rounded-sm bg-slate-900/40"
          >
            Contacto Directo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(ValueBanner);