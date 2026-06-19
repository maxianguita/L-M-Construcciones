import { memo } from "react";
import Carrousel from "./Carrousel";
import Banner from "./Banner";
import Bannerpasante from "./baneerpasante"
import FloatingWhatsApp from "../components/FloatingWhatsapp";
import Section from "./Section";
import Image from "../assets/hero1988.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="relative min-h-screen pt-10">

      {/* HERO */}
      <section className="relative h-[65vh] md:h-[150vh] flex items-center bg-gray-900 overflow-hidden">

        {/* Fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${Image}')` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-50" />

        {/* Contenido */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-left">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4">
            L & M <span className="text-amber-500">Construcciones</span>
          </h1>

          <p className="max-w-xl text-xl md:text-2xl text-gray-300 mb-10 font-semibold">
            Transformamos tus ideas en proyectos reales. Construcción,
            pintura y mantenimiento con compromiso y calidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-start">
            <Link
              to="/proyectos"
              aria-label="Ver todos los proyectos"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-black rounded-md text-gray-700 bg-gray-100 hover:bg-amber-600 transition duration-300 ease-in-out shadow-xl"
            >
              Ver Proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* BANNER PASANTE */}
      <Bannerpasante />

      {/* CONTENIDO */}
      <div className="bg-gray-100">

        <Section />

        <div className="max-w-7xl mx-auto py-16 px-4">
          <Carrousel />
          <Banner />
        </div>

      </div>

      {/* WhatsApp */}
      <FloatingWhatsApp
        phone="5491130352067"
        message="Hola, quiero una cotización para mi obra"
      />

    </main>
  );
};

export default memo(Home);