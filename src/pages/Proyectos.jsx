import { memo } from 'react';

const Proyectos = () => {
  return (
    // Sección principal: Fondo gris claro (gray-100) para diferenciarla del Home.
    <section className="py-16 bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mb-12">
          {/* Título de acento en azul oscuro */}
          <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">
            Nuestro Trabajo
          </h2>
          {/* Título principal en gris oscuro/negro */}
          <p className="mt-2 text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Proyectos Destacados
          </p>
        </div>

        {/* Cuadrícula de Proyectos (Minimalista) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta de Proyecto 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
            {/* Espacio para la imagen del proyecto */}
            <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
              [IMAGEN PROYECTO 1]
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Edificio Corporativo A</h3>
              <p className="text-gray-600 text-sm mb-4">
                Construcción integral de oficinas. **Superficie: 15.000m²**
              </p>
              {/* Enlace de acento ámbar */}
              <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold transition duration-300">
                Ver Detalles →
              </a>
            </div>
          </div>

          {/* Tarjeta de Proyecto 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
            {/* Espacio para la imagen del proyecto */}
            <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
              [IMAGEN PROYECTO 2]
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nave Industrial B</h3>
              <p className="text-gray-600 text-sm mb-4">
                Diseño y montaje de estructura metálica. **Entrega: 6 meses**
              </p>
              <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold transition duration-300">
                Ver Detalles →
              </a>
            </div>
          </div>

          {/* Tarjeta de Proyecto 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
            {/* Espacio para la imagen del proyecto */}
            <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
              [IMAGEN PROYECTO 3]
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mantenimiento Vial C</h3>
              <p className="text-gray-600 text-sm mb-4">
                Renovación de pavimento y señalización. **Ubicación: Centro**
              </p>
              <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold transition duration-300">
                Ver Detalles →
              </a>
            </div>
          </div>
        </div>
        
        {/* Llamada a la Acción General */}
        <div className="text-center mt-12">
            <a 
                href="/proyectos-completo" 
                className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-800 transition duration-300 shadow-lg"
            >
                Ver Galería Completa
            </a>
        </div>

      </div>
    </section>
  );
};

export default memo(Proyectos);