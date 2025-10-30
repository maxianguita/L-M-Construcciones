import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

// =====================================================================
// 1. IMPORTACIÓN DE IMÁGENES
// **Asegúrate de que las rutas sean correctas para tu proyecto**
// =====================================================================
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.jpg';
import img10 from '../img/img10.jpg';
import img11 from '../img/img11.jpg';
import img12 from '../img/img12.jpg';
import img13 from '../img/img13.jpg';
import img14 from '../img/img14.jpg';
import img15 from '../img/img15.jpg';
import img16 from '../img/img16.jpg';
import img17 from '../img/img17.jpg';
import img18 from '../img/img18.jpg';
import img19 from '../img/img19.jpg';
import img20 from '../img/img20.jpg';
import img21 from '../img/img21.jpg';
import img22 from '../img/img22.jpg';
import img23 from '../img/img23.jpg';
import img24 from '../img/img24.jpg';
import img25 from '../img/img25.jpg';
import img26 from '../img/img26.jpg';
import img27 from '../img/img27.jpg';
import img28 from '../img/img28.jpg';
import img29 from '../img/img29.jpg';
import img30 from '../img/img30.jpg';
import img31 from '../img/img31.jpg';
import img32 from '../img/img32.jpg';
import img33 from '../img/img33.jpg';
import img34 from '../img/img34.jpg';


// =====================================================================
// 2. DATOS DE LA GALERÍA
// =====================================================================
const projectPhotos = [
  { id: 1, src: img1, alt: 'Cimientos y estructura de hormigón' },
  { id: 2, src: img2, alt: 'Fachada con revestimiento moderno' },
  { id: 3, src: img3, alt: 'Detalle de instalación eléctrica' },
  { id: 4, src: img4, alt: 'Vista aérea de la construcción' },
  { id: 5, src: img5, alt: 'Interior terminado, diseño minimalista' },
  { id: 6, src: img6, alt: 'Equipo de trabajo en sitio' },
  { id: 7, src: img7, alt: 'Maquinaria pesada en acción' },
  { id: 8, src: img8, alt: 'Planos y diseño arquitectónico' },
  { id: 9, src: img9, alt: 'Proceso de cimentación' },                  
  { id: 10, src: img10, alt: 'Estructura metálica en construcción' }, 
  { id: 11, src: img11, alt: 'Acabados interiores de alta calidad' }, 
  { id: 12, src: img12, alt: 'Instalación de sistemas de climatización' },
  { id: 13, src: img13, alt: 'Trabajos de albañilería' },
  { id: 14, src: img14, alt: 'Revestimiento exterior en proceso' },  
  { id: 15, src: img15, alt: 'Montaje de estructuras prefabricadas' },
  { id: 16, src: img16, alt: 'Inspección de calidad en obra' },
  { id: 17, src: img17, alt: 'Trabajos de pintura y acabados' },
  { id: 18, src: img18, alt: 'Instalación de ventanas y puertas' },  
  { id: 19, src: img19, alt: 'Paisajismo y áreas verdes' },
  { id: 20, src: img20, alt: 'Vista nocturna de la construcción' },  
  { id: 21, src: img21, alt: 'Equipo de seguridad en obra' },
  { id: 22, src: img22, alt: 'Montaje de techos y cubiertas' },  
  { id: 23, src: img23, alt: 'Trabajos de fontanería' },  
  { id: 24, src: img24, alt: 'Instalación de sistemas eléctricos' },  
  { id: 25, src: img25, alt: 'Construcción de caminos y accesos' },  
  { id: 26, src: img26, alt: 'Obra en fase de demolición' },
  { id: 27, src: img27, alt: 'Montaje de andamios y estructuras temporales' },
  { id: 28, src: img28, alt: 'Trabajos de impermeabilización' },
  { id: 29, src: img29, alt: 'Instalación de sistemas de seguridad' },
  { id: 30, src: img30, alt: 'Finalización y entrega del proyecto' },
  { id: 31, src: img31, alt: 'Estructura con vigas de soporte' },
  { id: 32, src: img32, alt: 'Detalle de ladrillo y mortero' },
  { id: 33, src: img33, alt: 'Instalación de paneles solares' },
  { id: 34, src: img34, alt: 'Paisaje urbano con construcción terminada' },
];


// =====================================================================
// 3. COMPONENTE PRINCIPAL (Galeria)
// =====================================================================
const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectPhotos.length);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectPhotos.length) % projectPhotos.length);
  };

  const currentPhoto = projectPhotos[currentIndex];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 font-sans relative">
      {/* 🔙 Flecha para volver al Home (solo móvil) */}
      <Link
        to="/"
        aria-label="Volver al inicio"
        title="Volver al inicio"
        className="fixed top-24 left-6 z-50 inline-flex items-center justify-center
                   h-9 w-9 rounded-full bg-white/90 backdrop-blur border border-black/5
                   text-gray-700 shadow-md transition
                   hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500
                   block sm:hidden"
      >
        <ArrowLeft className="h-4 w-4" />
      </Link>

      {/* 🏗️ Título de la Sección */}
      <h2 className="mt-40 text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-8 sm:mb-10 uppercase tracking-wide">
        Proyectos Destacados
      </h2>

      {/* 📸 Contenedor Principal del Carrusel */}
      <div className="relative max-w-3xl sm:max-w-5xl mx-auto rounded-lg shadow-2xl overflow-hidden">
        {/* Imagen Actual */}
        <div className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[650px]">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Overlay con Texto */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6 bg-gradient-to-t from-gray-900 to-transparent">
          <p className="text-white text-base sm:text-xl font-bold">{currentPhoto.alt}</p>
          <p className="text-gray-300 text-xs sm:text-sm mt-1">
            Proyecto {currentIndex + 1} de {projectPhotos.length}
          </p>
        </div>

        {/* Botones de Navegación */}
        <button
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 
                     p-2 sm:p-3 bg-black bg-opacity-40 text-white rounded-full 
                     transition-colors duration-300 hover:bg-opacity-70 z-10"
          onClick={showPrev}
          aria-label="Anterior"
        >
          &lt;
        </button>

        <button
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 
                     p-2 sm:p-3 bg-black bg-opacity-40 text-white rounded-full 
                     transition-colors duration-300 hover:bg-opacity-70 z-10"
          onClick={showNext}
          aria-label="Siguiente"
        >
          &gt;
        </button>

        {/* Indicadores + Link de Detalles solo móvil */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-10">
          <div className="flex space-x-1 sm:space-x-2">
            {projectPhotos.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-500 w-3 sm:w-4 h-3 sm:h-4"
                    : "bg-white bg-opacity-50"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a la diapositiva ${index + 1}`}
              />
            ))}
          </div>

          {/* 🔗 Link solo visible en móvil */}
          <Link
            to="/galeria"
            className="inline-flex items-center space-x-1 font-semibold text-sm 
                       text-blue-600 hover:text-blue-800 transition duration-300
                       block sm:hidden"
          >
            <span>Ver Detalles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;