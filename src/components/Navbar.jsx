import { memo, useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLinkClick = () => setIsMenuOpen(false);

  // Estilos Desktop - Paleta Industrial Premium (Azul Acero + Amber estructural)
  const baseLinkClasses =
    "relative px-2 py-1 transition-all duration-300 rounded-sm uppercase text-xs tracking-wider font-semibold";
  const activeClasses =
    "text-amber-500 border-b-2 border-amber-500";
  const inactiveClasses =
    "text-slate-400 hover:text-slate-100 hover:border-b-2 hover:border-amber-500/50";

  // Estilos Mobile - Contraste Limpio y Corporativo
  const mobileLinkClasses =
    "text-xl font-bold px-2 py-4 w-full text-left transition-all duration-200 uppercase tracking-wide";
  const mobileActiveClasses =
    "text-slate-900 border-l-4 border-amber-500 bg-slate-50";
  const mobileInactiveClasses =
    "text-slate-600 hover:text-slate-900 hover:bg-slate-50/50";

  const navItems = [
    { name: "Inicio", to: "/" },
    { name: "Servicios", to: "/servicios" },
    { name: "Proyectos", to: "/proyectos" },
    { name: "Nosotros", to: "/nosotros" },
    { name: "Contacto", to: "/contact" },
  ];

  return (
    /* NUEVO COLOR DE FONDO: bg-[#0f1922] (Azul Acero/Marino Mineral) y borde técnico */
    <header className="fixed top-0 left-0 w-full bg-[#0f1922]/95 backdrop-blur-md shadow-2xl z-[80] border-b border-slate-700/50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 lg:py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3" onClick={handleLinkClick}>
          <img
            src={Logo}
            alt="L & M Construcciones"
            className="h-10 w-auto object-contain rounded-full border-2 border-amber-500 p-1 bg-[#0f1922]"
          />
          <span className="text-slate-100 font-black text-xl tracking-wider hidden sm:block">
            L&amp;M <span className="text-amber-500 font-bold">CONSTRUCCIONES</span>
          </span>
        </Link>

        {/* LINKS DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* BOTÓN MENÚ MÓVIL */}
        <div className="md:hidden z-[80]">
          <button
            className="p-2 text-slate-400 hover:text-amber-500 transition-colors"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-drawer"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 stroke-2 text-slate-100 hover:text-amber-500" />
            ) : (
              <Menu className="h-7 w-7 stroke-2 text-slate-100 hover:text-amber-500" />
            )}
          </button>
        </div>
      </nav>

      {/* PANEL MÓVIL (slide-in) */}
      <div
        id="mobile-drawer"
        className={`fixed top-0 left-0 h-screen w-[75vw] max-w-xs sm:max-w-sm
          bg-white shadow-2xl transform transition-transform duration-500 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden z-[70] overflow-y-auto`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header del panel */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <span className="text-slate-900 font-black text-xl tracking-wider">
            L&amp;M <span className="text-amber-500 font-bold">CONSTRUCCIONES</span>
          </span>
          <button
            className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú lateral"
          >
            <X className="h-7 w-7 stroke-2" />
          </button>
        </div>

        {/* Lista de enlaces */}
        <ul className="flex flex-col items-start space-y-1 py-4">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center pl-6 ${mobileLinkClasses} ${
                    isActive ? mobileActiveClasses : mobileInactiveClasses
                  }`
                }
                onClick={handleLinkClick}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY OSCURO (full-screen) */}
      <div
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-500 ease-in-out
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          md:hidden z-[60]`}
        onClick={handleLinkClick}
        aria-hidden={!isMenuOpen}
      />
    </header>
  );
};

export default memo(Navbar);