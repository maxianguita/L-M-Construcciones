
import { Link } from "react-router-dom";
import HeroImg from "../assets/HeroImg.jpg"; 
import Equipo1 from "../assets/equipo.jpg";
import Equipo2 from "../assets/equipo2.jpg";
import Equipo3 from "../assets/equipo3.jpg";
import CertIcon from "../assets/certicon.jpg"; 

 function Nosotros() {
  const valores = [
    {
      title: "Compromiso",
      desc: "Cumplimos plazos y presupuestos con transparencia.",
    },
    {
      title: "Calidad",
      desc: "Materiales certificados y control de obra riguroso.",
    },
    {
      title: "Seguridad",
      desc: "Protocolos HSE para cuidar a las personas y al entorno.",
    },
    {
      title: "Innovación",
      desc: "Métodos constructivos y digitalización para mayor eficiencia.",
    },
  ];

  const stats = [
    { label: "Años de trayectoria", value: "+3" },
    { label: "Obras entregadas", value: "+20" },
    { label: "Clientes satisfechos", value: "+100" },
    { label: "Índice de cumplimiento", value: "100%" },
  ];

  const equipo = [
    {
      img: Equipo1,
      nombre: "Luis Martínez",
      rol: "Director de Obra",
      bio: "20+ años liderando proyectos residenciales e industriales.",
    },
    {
      img: Equipo2,
      nombre: "María López",
      rol: "Arquitecta Jefa",
      bio: "Especialista en dirección técnica y sustentabilidad.",
    },
    {
      img: Equipo3,
      nombre: "Mauro Giménez",
      rol: "Ing. Civil",
      bio: "Planificación, cómputo y presupuesto BIM.",
    },
  ];

  const faqs = [
    {
      q: "¿Qué tipos de obras realizan?",
      a: "Ejecución y dirección de obras residenciales, comerciales e industriales; ampliaciones, refacciones y mantenimiento integral.",
    },
    {
      q: "¿Trabajan con planos o proyectos propios?",
      a: "Podemos ejecutar sobre tu proyecto o desarrollar el proyecto ejecutivo completo junto a nuestro estudio asociado.",
    },
    {
      q: "¿Cómo presupuestan?",
      a: "Realizamos una visita técnica sin costo, relevamos y enviamos un presupuesto detallado por ítems con alcance, plazo y condiciones.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 mt-24">
      {/* Hero */}
      <section className="relative h-[80vh] isolate overflow-hidden">
        <img
          src={HeroImg}
          alt="Equipo de L & M Construcciones en obra"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Sobre nosotros
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            En L & M Construcciones desarrollamos proyectos con foco en calidad,
            seguridad y cumplimiento. Acompañamos a cada cliente desde la
            planificación hasta la entrega final, con comunicación clara y
            compromiso real.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/contacto"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-100"
            >
              Pedir presupuesto
            </Link>
            <a
              href="#valores"
              className="rounded-xl border border-white/60 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Conocé nuestros valores
            </a>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Quiénes somos</h2>
            <p className="mt-4 text-neutral-700">
              Somos una empresa constructora con base en Buenos Aires, dedicada a
              la ejecución y dirección de obras civiles. Integramos equipos
              técnicos con amplia experiencia en arquitectura, ingeniería y
              gestión de proyectos para entregar soluciones llave en mano.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li>• Dirección y ejecución de obras</li>
              <li>• Gestión de compras y logística</li>
              <li>• Control de calidad y seguridad (HSE)</li>
              <li>• Mantenimiento edilicio y de planta</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium">Misión, Visión y Diferenciales</h3>
            <div className="mt-4 space-y-4 text-neutral-700">
              <p>
                <span className="font-semibold">Misión:</span> construir de forma
                segura y eficiente, agregando valor real a cada proyecto.
              </p>
              <p>
                <span className="font-semibold">Visión:</span> ser referentes en
                calidad y cumplimiento en la región.
              </p>
              <p>
                <span className="font-semibold">Diferenciales:</span> acompañamiento
                integral, documentación clara, trazabilidad de avances y trato
                cercano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Nuestros valores</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 h-10 w-10 rounded-full bg-neutral-100" />
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-1 text-neutral-700">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-semibold">{s.value}</div>
                <div className="mt-1 text-sm text-neutral-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones / Sellos de confianza (opcional) */}
      <section className="bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Calidad y seguridad</h2>
          <div className="mt-6 grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
              <img src={CertIcon} alt="Certificación" className="mx-auto h-12 w-auto" />
              <p className="mt-3 text-sm text-neutral-700">
                Protocolos HSE y control documental de obra.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto h-12 w-12 rounded-full bg-neutral-100" />
              <p className="mt-3 text-sm text-neutral-700">Proveedores auditados</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto h-12 w-12 rounded-full bg-neutral-100" />
              <p className="mt-3 text-sm text-neutral-700">Garantías por escrito</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto h-12 w-12 rounded-full bg-neutral-100" />
              <p className="mt-3 text-sm text-neutral-700">Seguimiento post‑obra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold">Nuestro equipo</h2>
            <p className="mt-2 max-w-prose text-neutral-700">
              Personas cercanas y resolutivas, con gran experiencia de campo.
            </p>
          </div>
          <Link
            to="/contacto"
            className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Trabajá con nosotros
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equipo.map((p) => (
            <article
              key={p.nombre}
              className="rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              <img
                src={p.img}
                alt={p.nombre}
                className="h-56 w-full rounded-t-2xl object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.nombre}</h3>
                <p className="text-sm text-neutral-600">{p.rol}</p>
                <p className="mt-2 text-neutral-700">{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Línea de tiempo / Historia */}
      <section className="bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Nuestra historia</h2>
          <ol className="mt-8 space-y-6 border-l border-neutral-300 pl-6">
            <li>
              <div className="-ml-[13px] h-6 w-6 rounded-full border-2 border-white bg-neutral-800" />
              <p className="mt-2 text-sm text-neutral-600">2013</p>
              <p className="font-medium">Fundación y primeras obras residenciales</p>
            </li>
            <li>
              <div className="-ml-[13px] h-6 w-6 rounded-full border-2 border-white bg-neutral-800" />
              <p className="mt-2 text-sm text-neutral-600">2017</p>
              <p className="font-medium">Expansión a proyectos comerciales e industriales</p>
            </li>
            <li>
              <div className="-ml-[13px] h-6 w-6 rounded-full border-2 border-white bg-neutral-800" />
              <p className="mt-2 text-sm text-neutral-600">2022</p>
              <p className="font-medium">Implementación de metodologías BIM y digitalización</p>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl bg-neutral-900 px-6 py-10 text-white">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">¿Arrancamos tu proyecto?</h2>
              <p className="mt-2 text-white/80">
                Coordinemos una visita técnica sin costo. Te enviamos un
                presupuesto claro y por etapas.
              </p>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <Link
                to="/contact"
                className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
              >
                Contacto
              </Link>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/30 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación (mapa embebido) */}
      <section className="bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Dónde estamos</h2>
          <p className="mt-2 max-w-prose text-neutral-700">
            Operamos en Ciudad Autónoma de Buenos Aires y Gran Buenos Aires. Nos
            movemos a obra en todo el país según el alcance del proyecto.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
            {/* Sustituí src por tu mapa real (Google Maps Embed) */}
            <iframe
              title="Mapa"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-58.531%2C-34.705%2C-58.335%2C-34.531&layer=mapnik"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white shadow-sm">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 open:bg-neutral-50">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium">
                {f.q}
                <span className="ml-4 rounded-full border border-neutral-300 px-2 py-0.5 text-xs text-neutral-600 group-open:hidden">
                  ver
                </span>
                <span className="ml-4 hidden rounded-full border border-neutral-300 px-2 py-0.5 text-xs text-neutral-600 group-open:inline">
                  ocultar
                </span>
              </summary>
              <p className="mt-3 text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer mini (en esta vista) */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} L & M Construcciones. Todos los derechos reservados.
          </p>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/obras" className="text-neutral-700 hover:text-neutral-900">
              Obras
            </Link>
            <Link to="/servicios" className="text-neutral-700 hover:text-neutral-900">
              Servicios
            </Link>
            <Link to="/contacto" className="text-neutral-700 hover:text-neutral-900">
              Contacto
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
export default Nosotros;