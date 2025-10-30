import { Briefcase, Building2, LayoutGrid, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import img from "../assets/oficina.avif";
import img2 from "../assets/montaje.png";
import img3 from "../assets/trabajando.png";

const proyectos = [
  {
    id: 1,
    title: "Edificio Corporativo A",
    description:
      "Construcción integral de oficinas con certificación LEED. Diseño moderno y sostenible.",
    details: "Superficie: 15.000m² | Finalización: 2024",
    icon: Building2,
    image: img,
  },
  {
    id: 2,
    title: "Nave Industrial B",
    description:
      "Diseño y montaje de estructura metálica de alta resistencia para logística y almacenamiento.",
    details: "Entrega: 6 meses | Área: 8.000m²",
    icon: Briefcase,
    image: img2,
  },
  {
    id: 3,
    title: "Mantenimiento Vial C",
    description:
      "Renovación completa de pavimento, drenaje y señalización. Mejora de infraestructura urbana.",
    details: "Ubicación: Centro Histórico | Longitud: 5km",
    icon: LayoutGrid,
    image: img3,
  },
];

// -----------------------------------------------------------------------------
// COMPONENTE DE TARJETA INDIVIDUAL
// -----------------------------------------------------------------------------
const ProjectCard = ({ project }) => {
  const IconComponent = project.icon;

  return (
    <div className="mt-20 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden 
                    transform transition duration-300 hover:shadow-2xl hover:translate-y-[-4px]">
      {/* Imagen del proyecto */}
      <div className="relative h-52 w-full">
        <img
          src={project.image}
          alt={`Imagen del proyecto: ${project.title}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <IconComponent className="w-5 h-5 text-gray-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h3>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-normal line-clamp-3">
          {project.description}
        </p>

        <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">
          {project.details}
        </p>

        {/* Link solo visible en móvil */}
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
  );
};

// -----------------------------------------------------------------------------
// COMPONENTE PRINCIPAL
// -----------------------------------------------------------------------------
const ProyectosConstruccion = () => {
  return (
    <section className="py-20 bg-gray-50 font-sans mt-20 relative">
      {/* Flecha para volver al home (solo móvil) */}
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

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold tracking-wide uppercase text-sky-600">
            NUESTRO TRABAJO
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Proyectos Destacados
          </p>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Soluciones de infraestructura y construcción con enfoque en calidad, innovación y
            sostenibilidad.
          </p>
        </div>

        {/* Tarjetas de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <Link
            to="/galeria"
            className="inline-flex items-center space-x-2 
                       bg-sky-700 text-white font-bold py-3 px-10 rounded-lg 
                       hover:bg-blue-800 transition duration-300 shadow-xl 
                       transform hover:scale-[1.02]"
          >
            <span>Ver Galería Completa</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProyectosConstruccion;
