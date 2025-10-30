import { memo } from 'react';
import { Link } from 'react-router-dom';

const Servicios = () => {
  return (
    <main className="min-h-screen bg-gray-100 pt-24 pb-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-16">
          <h1 className="text-base text-blue-700 font-black tracking-widest uppercase mb-2">
            Nuestros Servicios
          </h1>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Soluciones Robustas para tus Proyectos
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Desde la cimentación hasta el acabado final, nuestro equipo ofrece experiencia, seguridad y la tecnología más avanzada.
          </p>
        </div>

        {/* Categoría 1 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-amber-500 pb-2 mb-8 inline-block">
            Obra Civil e Infraestructura
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:border-b-4 border-blue-700">
              <span className="text-blue-700 text-3xl mb-3 block">🏗️</span>
              <h3 className="text-xl font-black text-gray-800 mb-2">Construcción Residencial</h3>
              <p className="text-gray-600">
                Diseño y construcción de viviendas unifamiliares y complejos habitacionales con eficiencia y calidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:border-b-4 border-blue-700">
              <span className="text-blue-700 text-3xl mb-3 block">🏭</span>
              <h3 className="text-xl font-black text-gray-800 mb-2">Estructuras Industriales</h3>
              <p className="text-gray-600">
                Naves, almacenes y plantas de producción. Especialistas en grandes luces y sistemas modulares.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:border-b-4 border-blue-700">
              <span className="text-blue-700 text-3xl mb-3 block">🧱</span>
              <h3 className="text-xl font-black text-gray-800 mb-2">Cimentaciones y Muros</h3>
              <p className="text-gray-600">
                Trabajos de cimentación profunda, muros de contención y preparación de terrenos.
              </p>
            </div>
          </div>
        </div>

        {/* Categoría 2 */}
        <div className="mb-12 mt-16">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-amber-500 pb-2 mb-8 inline-block">
            Pintura y Mantenimiento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:border-b-4 border-blue-700">
              <span className="text-blue-700 text-3xl mb-3 block">🎨</span>
              <h3 className="text-xl font-black text-gray-800 mb-2">Pintura Industrial y Fachadas</h3>
              <p className="text-gray-600">
                Aplicación de recubrimientos especializados de alto rendimiento y pintura exterior de gran altura.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:border-b-4 border-blue-700">
              <span className="text-blue-700 text-3xl mb-3 block">🛡️</span>
              <h3 className="text-xl font-black text-gray-800 mb-2">Mantenimiento Preventivo</h3>
              <p className="text-gray-600">
                Programas de revisión periódica y reparación para asegurar la vida útil de sus instalaciones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:border-b-4 border-blue-700">
              <span className="text-blue-700 text-3xl mb-3 block">⚙️</span>
              <h3 className="text-xl font-black text-gray-800 mb-2">Remodelaciones y Adaptación</h3>
              <p className="text-gray-600">
                Modernización de espacios y adaptación de plantas a nuevas necesidades operacionales.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-20 p-8 bg-sky-700 rounded-lg shadow-2xl">
          <h3 className="text-3xl font-black text-white mb-3">¿Tienes un Proyecto en Mente?</h3>
          <p className="text-gray-200 mb-6">
            Contáctanos hoy mismo para obtener una cotización sin compromiso y llevar tu obra al siguiente nivel.
          </p>
          <Link
            to="/contact"  // ← corregido
            aria-label="Ir a la página de contacto para solicitar cotización"
            className="bg-white text-gray-700 font-black py-3 px-10 rounded-md hover:bg-amber-600 hover:text-white transition duration-300 text-lg shadow-lg"
          >
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </main>
  );
};

export default memo(Servicios);
