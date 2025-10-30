import { memo } from "react";
import Carrousel from "./Carrousel";
import Banner from "./Banner";
import FloatingWhatsApp from "../components/FloatingWhatsapp";
import Section from "./Section";
import Image from "../assets/heroimagen.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // Utilizamos 'min-h-screen' y 'relative' para la sección principal.
    // El 'pt-24' se mantiene para dejar espacio al Navbar, si lo pones arriba.
    <main className="relative min-h-screen pt-10 ">
      
      {/* 1. SECCIÓN HEROE (Principal) */}
     <section className="relative h-[65vh] md:h-[150vh] flex items-center bg-gray-900 overflow-hidden">
        
    {/* IMAGEN DE FONDO: Usa la variable 'Image' importada */}
    <div 
  className="absolute inset-0 bg-cover bg-center " 
      style={{ backgroundImage: `url('${Image}')` }}
    />

    {/* 1. CAPA OSCURA: Reducimos la opacidad a 50% (opacity-50). 
        Esto deja ver más la imagen sin comprometer demasiado el contraste. */}
    <div className="absolute inset-0 bg-blue-900 opacity-50" /> 

    {/* Contenido Principal (Texto y CTA) */}
    {/* 2. ALINEACIÓN: Quitamos 'text-center' y lo reemplazamos con 'text-left' */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-left">
      
      {/* TÍTULO: Usamos 'font-black' para un extra bold y 'leading-tight' */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4">
        L & M <span className="text-amber-500">Construcciones</span>
      </h1>

      {/* PÁRRAFO: Lo alineamos a la izquierda y reducimos el ancho máximo para que quede en el lado */}
      <p className="max-w-xl text-xl md:text-2xl text-gray-300 mb-10 font-semibold">
        Transformamos tus ideas en proyectos reales. Construcción, pintura y mantenimiento con compromiso y calidad.
      </p>

      {/* BOTONES: Justificamos al inicio (izquierda) */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-start">
        {/* CTA Primario */}
        <Link
          href="/proyectos" 
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-black rounded-md text-gray-700 bg-amber-500 hover:bg-amber-600 transition duration-300 shadow-xl"
        > 
          Ver Proyectos
        </Link>
        {/* CTA Secundario */}
        {/* <a 
          href="#contacto" 
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-md font-black hover:bg-white hover:text-gray-900 transition duration-300"
        >
          Contactanos
        </a> */}
      </div>
    </div>
</section>
      {/* 2. SECCIONES DE CONTENIDO ADICIONAL */}
      {/* Secciones del Home que vienen DESPUÉS del Héroe */}
      
      {/* Contenedor principal con fondo ligero (gray-100 para separación) */}
      <div className="bg-gray-100">
          
          {/* Componente que usa los colores de la Paleta 1 */}
          <Section /> 

          {/* Otros componentes que puedas tener en el home */}
          <div className="max-w-7xl mx-auto py-16 px-4">
            <Carrousel /> 
            <Banner />
          </div>

      </div>

      {/* WhatsApp flotante: mantenido como estaba */}
      <FloatingWhatsApp phone="5491130352067" message="Hola, quiero una cotización para mi obra" />
      
    </main>
  );
};

export default memo(Home);