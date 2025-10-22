import { memo } from "react";
import { Link } from "react-router-dom";

const ValueBanner = () => {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-[100vw] bg-gray-400 py-44">
  <div className="mx-auto max-w-6xl px-6">
        {/* Título y subtítulo */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-100">
            Calidad profesional, entrega a tiempo
          </h2>
          <p className="mt-3 text-gray-100">
            Construcción, pintura y mantenimiento con garantía por escrito.
          </p>
        </div>

        {/* Bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200">
            <span className="text-yellow-600 text-xl">✅</span>
            <div>
              <p className="font-semibold text-gray-100">Presupuesto en 24 h</p>
              <p className="text-sm text-gray-100">Sin costo ni compromiso</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-100">
            <span className="text-yellow-600 text-xl">🧰</span>
            <div>
              <p className="font-semibold text-gray-100">Materiales certificados</p>
              <p className="text-sm text-gray-100">Trabajos seguros y durables</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200">
            <span className="text-yellow-600 text-xl">🏅</span>
            <div>
              <p className="font-semibold text-gray-100">Garantía 12 meses</p>
              <p className="text-sm text-gray-100">Compromiso por escrito</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200">
            <span className="text-yellow-600 text-xl">⭐</span>
            <div>
              <p className="font-semibold text-gray-100">Clientes satisfechos</p>
              <p className="text-sm text-gray-100">8.9★ en reseñas</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-yellow-500 px-6 py-3 font-medium text-white hover:bg-yellow-600"
          >
            Solicitar cotización
          </Link>
          <a
            href="https://wa.me/54911XXXXXXXX" // tu número con código país
            target="_blank"
            className="rounded-full bg-yellow-500 border border-gray-300 px-6 py-3 font-medium text-gray-100 hover:bg-yellow-600"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(ValueBanner);
