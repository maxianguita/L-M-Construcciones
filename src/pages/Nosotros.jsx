import React, { useState } from 'react';
import Logo from "../assets/HeroImg.png"
import Certicon from "../assets/certicon.png"
import equipo from "../assets/equipo1.png"
import equipo1 from "../assets/equipo3.png"


// Placeholder URLs para las imágenes:
const HeroImg = Logo;
const Equipo1 = Certicon;
const Equipo2 = equipo;
const Equipo3 = equipo1;

// Iconos de Lucide
import { CheckCircle, Hammer, ShieldCheck, Lightbulb, Award, Users, Handshake, Wrench, ChevronDown, Phone, MapPin } from 'lucide-react';

const Nosotros = () => {
  // Datos del componente (sin cambios)
  const valores = [
    {
      title: "Compromiso",
      desc: "Cumplimos plazos y presupuestos con transparencia y dedicación total.",
      icon: CheckCircle,
      color: "text-sky-600",
    },
    {
      title: "Calidad",
      desc: "Materiales certificados y control de obra riguroso para resultados duraderos.",
      icon: Hammer,
      color: "text-amber-500",
    },
    {
      title: "Seguridad",
      desc: "Protocolos HSE (Salud, Seguridad y Ambiente) para cuidar a las personas y al entorno.",
      icon: ShieldCheck,
      color: "text-red-500",
    },
    {
      title: "Innovación",
      desc: "Métodos constructivos avanzados y digitalización (BIM) para mayor eficiencia.",
      icon: Lightbulb,
      color: "text-green-600",
    },
  ];

  const stats = [
    { label: "Años de trayectoria", value: "+3", detail: "Desde nuestra fundación en 2013" },
    { label: "Obras entregadas", value: "+20", detail: "Proyectos residenciales e industriales finalizados" },
    { label: "Clientes satisfechos", value: "98%", detail: "Índice de recomendación positiva" },
    { label: "Índice de cumplimiento", value: "100%", detail: "Entrega en tiempo y forma acordados" },
  ];

  const equipo = [
    {
      img: Equipo1, // Usando placeholder
      nombre: "Proyecto Integral de Viviendas",
rol: "Desarrollo Arquitectónico y Constructivo",
bio: "Proyecto orientado a la creación de espacios habitacionales modernos y sostenibles. Combina diseño contemporáneo con materiales de alta calidad, priorizando la eficiencia energética y la comodidad de los residentes.",

    },
    {
      img: Equipo2, // Usando placeholder
    nombre: "Proyecto Urbano Sustentable",
rol: "Diseño Arquitectónico y Eficiencia Energética",
bio: "Desarrollo enfocado en la creación de espacios urbanos modernos con criterios de sustentabilidad. Incluye planificación integral, diseño estético y soluciones innovadoras para el ahorro energético y la armonía con el entorno.",

    },
    {
      img: Equipo3, // Usando placeholder
     nombre: "Implementación BIM Integral",
rol: "Modelado y Coordinación de Proyectos",
bio: "Proyecto orientado a la optimización del proceso constructivo mediante la metodología BIM. Incluye modelado 3D, planificación precisa y control de costos en todas las etapas de desarrollo.",

    },
  ];

  const faqs = [
    {
      q: "¿Qué tipos de obras realizan?",
      a: "Ejecución y dirección de obras residenciales (viviendas unifamiliares, PH), comerciales (oficinas, locales) e industriales (naves); ampliaciones, refacciones y mantenimiento integral.",
    },
    {
      q: "¿Trabajan con planos o proyectos propios?",
      a: "Podemos ejecutar sobre tu proyecto ya desarrollado o, si lo necesitas, podemos desarrollar el proyecto ejecutivo completo junto a nuestro estudio de arquitectura asociado.",
    },
    {
      q: "¿Cómo presupuestan mi obra?",
      a: "Realizamos una visita técnica sin costo, relevamos en detalle tus necesidades y enviamos un presupuesto claro, detallado por ítems y con alcance, plazo y condiciones por escrito.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  return (
    <main className="min-h-screen bg-gray-50 text-neutral-900 font-sans ">
      
      {/* HEADER (Simulación de espacio para el Navbar) */}
      <div className="h-16 border-b border-gray-200 sticky top-0 z-20 flex items-center justify-between px-6 bg-white">
          <span className="text-xl font-bold text-sky-700">L & M Construcciones</span>
          <nav className="hidden sm:flex space-x-4">
            {['Inicio', 'Servicios', 'Obras', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-neutral-600 hover:text-sky-700 transition duration-150">
                {item}
              </a>
            ))}
          </nav>
      </div>

      {/* Hero: Sobre Nosotros */}
      <section className="relative h-[90vh] sm:h-[80vh] isolate overflow-hidden">
      <img
  src={HeroImg}
  alt="Equipo de L & M Construcciones en obra"
  className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/1920x1080/0e7490/f8fafc/png?text=IMAGEN+NO+ENCONTRADA";
  }}
/>

        {/* Fondo oscuro semi-transparente sin blur */}
        <div className="absolute inset-0 -z-10 bg-sky-900/40" /> 
        
        <div className="mx-auto max-w-6xl px-4 pt-32 sm:pt-48 pb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white shadow-text">
            Sobre Nosotros
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-white/90 font-light">
            En L & M Construcciones desarrollamos proyectos con foco en excelencia, 
            seguridad y cumplimiento estricto. Acompañamos a cada cliente 
            desde la planificación hasta la entrega final, garantizando una
            comunicación clara y un compromiso real.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* Aquí deberías usar <Link to="/contacto"> si tienes React Router */}
            <a
              href="#contacto-seccion" // Apunta a la sección de contacto dentro de la página
              className="w-full sm:w-auto rounded-xl bg-amber-500 px-8 py-3 text-lg font-semibold text-neutral-900 shadow-xl shadow-amber-500/30 hover:bg-amber-400 transition transform hover:scale-[1.02]"
            >
              Pedir Presupuesto
            </a>
            <a
              href="#valores"
              className="w-full sm:w-auto rounded-xl border border-white/60 px-8 py-3 text-lg font-medium text-white hover:bg-white/10 transition duration-300"
            >
              Conocé Nuestros Valores
            </a>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Nuestra Empresa</span>
            <h2 className="mt-2 text-4xl font-extrabold text-neutral-900">
              Líderes en ejecución de obras civiles
            </h2>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Somos una empresa constructora con base en Buenos Aires, dedicada a
              la ejecución y dirección de obras civiles. Integramos equipos
              técnicos con amplia experiencia en arquitectura, ingeniería y
              gestión de proyectos para entregar soluciones llave en mano de principio a fin.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-700 border-l-4 border-sky-500 pl-4">
              <li className='font-medium'>Dirección y ejecución de obras</li>
              <li className='font-medium'>Gestión de compras y logística integral</li>
              <li className='font-medium'>Control de calidad y seguridad (HSE)</li>
              <li className='font-medium'>Mantenimiento edilicio y de planta</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl">
            <h3 className="text-xl font-bold text-sky-700">Misión, Visión y Diferenciales</h3>
            <div className="mt-6 space-y-6 text-neutral-700">
              <p>
                <span className="font-extrabold text-neutral-900">Misión:</span> construir de forma
                segura y eficiente, entregando proyectos de alto valor y durabilidad a nuestros clientes.
              </p>
              <p>
                <span className="font-extrabold text-neutral-900">Visión:</span> ser la constructora referente en
                calidad, innovación y cumplimiento en la región de CABA y GBA.
              </p>
              <p>
                <span className="font-extrabold text-neutral-900">Diferenciales:</span> acompañamiento
                integral y personalizado, documentación 100% clara, trazabilidad de avances en tiempo real y un trato
                cercano y honesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
            {stats.map((s) => (
              <div key={s.label} className="text-center pt-8 lg:pt-0">
                <div className="text-6xl font-extrabold text-sky-700">{s.value}</div>
                <div className="mt-2 text-lg font-medium text-neutral-900">{s.label}</div>
                <div className="mt-1 text-sm text-neutral-500">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="bg-gray-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Pilares Fundamentales</span>
          <h2 className="mt-2 text-4xl font-extrabold text-neutral-900">Nuestros valores</h2>
          <p className="mt-4 text-neutral-700 max-w-3xl">
            Estos principios guían cada decisión y acción, asegurando que cada proyecto no solo cumpla, sino que supere las expectativas.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v) => {
              const IconComponent = v.icon; // Componente de icono de Lucide
              return (
                <div
                  key={v.title}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg transition duration-300 hover:shadow-sky-500/20 hover:border-sky-300"
                >
                  <IconComponent className={`h-10 w-10 ${v.color} p-2 bg-neutral-100 rounded-lg mb-4`} />
                  <h3 className="text-xl font-bold text-neutral-900">{v.title}</h3>
                  <p className="mt-2 text-neutral-600">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificaciones / Sellos de confianza */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Garantía Total</span>
          <h2 className="mt-2 text-4xl font-extrabold text-neutral-900">Calidad y seguridad garantizadas</h2>
          <div className="mt-12 grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* ESTE ES EL ÍTEM QUE PREGUNTASTE - SE USA <Award /> EN LUGAR DE <img> */}
            <div className="rounded-xl border border-neutral-200 bg-gray-50 p-6 text-center shadow-md">
              <Award className="mx-auto h-12 w-12 text-sky-700 mb-3" /> {/* Icono Award de Lucide */}
              <p className="mt-3 text-lg font-semibold text-neutral-900">Control Documental</p>
              <p className="mt-1 text-sm text-neutral-600">Protocolos HSE y trazabilidad de materiales.</p>
            </div>
            {/* Los demás ítems también usan iconos (Users, Handshake, Wrench) */}
            <div className="rounded-xl border border-neutral-200 bg-gray-50 p-6 text-center shadow-md">
              <Users className="mx-auto h-12 w-12 text-sky-700 mb-3" />
              <p className="mt-3 text-lg font-semibold text-neutral-900">Proveedores Auditados</p>
              <p className="mt-1 text-sm text-neutral-600">Trabajamos solo con socios que cumplen con la normativa.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-gray-50 p-6 text-center shadow-md">
              <Handshake className="mx-auto h-12 w-12 text-sky-700 mb-3" />
              <p className="mt-3 text-lg font-semibold text-neutral-900">Garantías por Escrito</p>
              <p className="mt-1 text-sm text-neutral-600">Respaldo formal sobre la estructura y terminaciones.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-gray-50 p-6 text-center shadow-md">
              <Wrench className="mx-auto h-12 w-12 text-sky-700 mb-3" />
              <p className="mt-3 text-lg font-semibold text-neutral-900">Seguimiento Post-Obra</p>
              <p className="mt-1 text-sm text-neutral-600">Soporte y asistencia tras la entrega final del proyecto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Conocé a quienes construyen</span>
            <h2 className="mt-2 text-4xl font-extrabold text-neutral-900">Nuestro equipo</h2>
            <p className="mt-2 max-w-prose text-lg text-neutral-700">
              Personas cercanas y resolutivas, con gran experiencia de campo y dedicación a la excelencia.
            </p>
          </div>
          {/* Aquí deberías usar <Link to="/contacto"> si tienes React Router */}
          <a
            href="/contact"
            className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-sky-800 transition duration-300"
          >
            Trabajá con nosotros
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipo.map((p) => (
            <article
              key={p.nombre}
              className="rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={p.img} // Usando URL de placeholder
                alt={p.nombre}
                className="h-64 w-full object-cover object-top"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/94a3b8/0f172a/png?text=IMAGEN+NO+ENCONTRADA"; }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-sky-700">{p.nombre}</h3>
                <p className="text-sm font-medium text-neutral-600 mt-1">{p.rol}</p>
                <p className="mt-4 text-neutral-700 leading-relaxed">{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Historia */}
      <section className="bg-gray-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Nuestros Hitos</span>
          <h2 className="mt-2 text-4xl font-extrabold text-neutral-900">Nuestra historia</h2>
          <ol className="mt-12 space-y-10 border-l-4 border-sky-700 pl-6">
            <li>
              <div className="relative">
                <div className="-left-9 absolute h-6 w-6 rounded-full border-4 border-gray-50 bg-sky-700 ring-4 ring-sky-700/30" />
                <p className="text-sm font-semibold text-sky-700">2022</p>
                <p className="mt-1 text-xl font-bold">Fundación y primeras obras residenciales</p>
                <p className="text-neutral-600">Inicio de operaciones en CABA con foco en viviendas de alta gama.</p>
              </div>
            </li>
            <li>
              <div className="relative">
                <div className="-left-9 absolute h-6 w-6 rounded-full border-4 border-gray-50 bg-sky-700 ring-4 ring-sky-700/30" />
                <p className="text-sm font-semibold text-sky-700">2023</p>
              <p className="mt-1 text-xl font-bold">Expansión al sector comercial e industrial</p>
                <p className="text-neutral-600">Primeros grandes proyectos en parques industriales y locales a la calle.</p>
              </div>
            </li>
            <li>
              <div className="relative">
                <div className="-left-9 absolute h-6 w-6 rounded-full border-4 border-gray-50 bg-sky-700 ring-4 ring-sky-700/30" />
                <p className="text-sm font-semibold text-sky-700">2024</p>
              <p className="mt-1 text-xl font-bold">Implementación BIM y Digitalización Total</p>
                <p className="text-neutral-600">Adopción de tecnologías BIM para planificación 3D, cómputo y presupuesto.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Ubicación (mapa embebido) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Cobertura</span>
          <h2 className="mt-2 text-4xl font-extrabold text-neutral-900">Dónde estamos</h2>
          <p className="mt-4 max-w-prose text-lg text-neutral-700">
            Nuestra base de operaciones se encuentra en Buenos Aires, cubriendo Ciudad Autónoma de Buenos Aires y Gran Buenos Aires. Evaluamos proyectos en todo el país según el alcance.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sky-700 font-medium">
            <MapPin className="h-5 w-5"/>
            <span>Área principal de operación: CABA y GBA, Argentina.</span>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 shadow-xl aspect-video">
            {/* Mapa de Buenos Aires (Placeholder/OpenStreetMap) */}
            <iframe
              title="Mapa de Operaciones"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-58.531%2C-34.705%2C-58.335%2C-34.531&layer=mapnik&marker=-34.6037%2C-58.3816"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Dudas Comunes</span>
        <h2 className="mt-2 text-4xl font-extrabold text-neutral-900">Preguntas frecuentes</h2>
        <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white shadow-xl">
          {faqs.map((f, i) => (
            <div key={i} className="group cursor-pointer" onClick={() => toggleFaq(i)}>
              <div className="flex items-center justify-between p-6">
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">{f.q}</h3>
                <ChevronDown className={`h-6 w-6 text-sky-600 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : 'rotate-0'}`} />
              </div>
              {openFaq === i && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-neutral-700 border-t border-neutral-100 pt-4">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA (Llamada a la Acción) */}

      <section id="contacto-seccion" className="bg-sky-700 "> {/* ID para el ancla */}
        <div className="mx-auto max-w-6xl px-2 py-20 m-10">
          <div className="grid gap-8 md:grid-cols-2 items-center p-10">
            <div>
              <h2 className="text-4xl font-extrabold text-white">¿Arrancamos tu proyecto?</h2>
              <p className="mt-3 text-lg text-sky-100">
                Coordinemos una visita técnica sin costo ni compromiso. Te enviamos un
                presupuesto claro, transparente y por etapas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:justify-end">
              {/* Aquí deberías usar <Link to="/contacto"> si tienes React Router */}
              <a
                href="/contact" 
                className="w-full sm:w-auto rounded-xl bg-white px-8 py-3 text-lg font-semibold text-sky-800 hover:bg-neutral-100 text-center transition shadow-lg"
              >
                <Phone className="inline-block h-5 w-5 mr-2 -mt-1" />
                Contactar por Email
              </a>
              <a
                href="https://wa.me/5491130352067"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-xl border-2 border-white/50 px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 text-center transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;
