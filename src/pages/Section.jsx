import { memo } from 'react';
import { Link } from "react-router-dom";

const Section = () => {
   return (
 <div>
 <section className="py-20 bg-gray-100"> 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

 
<div className="text-center px-4 sm:px-0">
  <h2 className="text-sm sm:text-base text-gray-700 font-semibold tracking-wide uppercase">
    NUESTRA EXPERTICIA
  </h2>

  <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-600">
    ¿POR QUÉ ELEGIR A{" "}
    <span className="text-amber-500">L&M</span> CONSTRUCCIONES?
  </h2>
</div>


 <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3"> 
 
 {/* TARJETA 1: Cimientos Sólidos */}
 <div 
                className="p-6 bg-white rounded-lg shadow-xl text-center 
                           transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2" 
            > 
 <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-700 mx-auto"> 
 <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.07-8.745-3.745M21 4.607a23.931 23.931 0 00-9 2.723M21 18.096A23.931 23.931 0 0012 21c-3.183 0-6.22-1.07-8.745-3.745M3 13.255C5.525 10.57 8.562 9.5 12 9.5s6.475 1.07 8.745 3.745M3 4.607a23.931 23.931 0 009-2.723M3 18.096a23.931 23.931 0 009 2.723"/> {/* Corregido */}
 </svg>
                       
 </div>
 <h3 className="mt-5 text-lg font-semibold text-gray-800">Cimientos Sólidos</h3> 
 <p className="mt-2 text-base text-gray-700"> 
 Garantizamos la máxima integridad estructural y durabilidad utilizando solo materiales certificados.
 </p>
 </div>

 {/* TARJETA 2: Tecnología y Eficiencia */}
 <div 
                className="p-6 bg-white rounded-lg shadow-xl text-center 
                           transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2" 
            > {/* Corregido */}
 <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-700 mx-auto">
<svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.941 3.31.823 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.941 1.543-.823 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.941-3.31-.823-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.941-1.543.823-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"/> {/* Corregido */}
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/> 
 </svg>
                        {/* Si usaras Lucide, sería así: <Settings className="h-6 w-6 text-amber-500" /> */}
 </div>
 <h3 className="mt-5 text-lg font-semibold text-gray-800">Tecnología y Eficiencia</h3>
 <p className="mt-2 text-base text-gray-700"> 
 Implementamos procesos de vanguardia y maquinaria optimizada para cumplir plazos con precisión.
 </p>
 </div>

 {/* TARJETA 3: Transparencia Total */}
 <div 
                className="p-6 bg-white rounded-lg shadow-xl text-center 
                           transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2" 
            > {/* Corregido */}
 <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-700 mx-auto"> 
 <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/> {/* Corregido */}
 </svg>{/* Si usaras Lucide, sería así: <FileText className="h-6 w-6 text-amber-500" /> */}
 </div>
 <h3 className="mt-5 text-lg font-semibold text-gray-800">Transparencia Total</h3> 
 <p className="mt-2 text-base text-gray-700"> 
 Reportes detallados y comunicación constante para que siempre sepas el estado de tu inversión.
 </p>
 </div>
 </div>

 <div className="mt-16 text-center"> 
  <Link
              to="/nosotros"
              className="text-gray-500 hover:text-amber-500 font-semibold border-b-2 border-gray-500 hover:border-amber-400 pb-1 transition duration-300"
            >
              DESCUBRE NUESTRO PROCESO COMPLETO →
            </Link>
 </div>
 </div>
</section>
 </div>
 );
};

export default memo(Section);