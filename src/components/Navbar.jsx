import { memo, useState, useEffect } from "react"; 
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png"

import { X, Menu } from 'lucide-react'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // EFECTO PARA BLOQUEAR EL SCROLL DEL BODY
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Limpiamos el overflow al desmontar o cerrar el menú
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Función de limpieza para asegurar que el scroll se restablece si el componente se desmonta
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]); // Dependencia: Se ejecuta cada vez que isMenuOpen cambia.
  
  // Función para cerrar el menú y navegar
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  const isActive = (path) => {
    // Maneja la ruta raíz ('/') de forma explícita
    if (path === '/') {
      return location.pathname === '/';
    }
    // Para todas las demás rutas
    return location.pathname.startsWith(path);
  };

  // Clases para Links de Escritorio (Desktop)
  const baseLinkClasses = 'relative px-2 py-1 transition-colors duration-300 rounded-sm';
  const activeClasses = 'text-amber-500 border-b-2 border-amber-500 font-semibold';
  const inactiveClasses = 'text-gray-300 hover:text-white hover:border-b-2 hover:border-amber-300';
  
  // Clases para Links Móviles (Mobile) - Fondo Blanco
  const mobileLinkClasses = 'text-2xl font-extrabold px-2 py-3 w-full text-left transition-colors duration-200';
  const mobileActiveClasses = 'text-amber-600 border-l-4 border-amber-600 bg-amber-50/50';
  const mobileInactiveClasses = 'text-gray-900 hover:text-amber-600 hover:bg-gray-100/70';

  const navItems = [
    { name: 'Inicio', to: '/' },
    { name: 'Servicios', to: '/servicios' },
    { name: 'Proyectos', to: '/proyectos' },
    { name: 'Nosotros', to: '/nosotros' },
    { name: 'Contacto', to: '/contact' },
    
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-xl z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 lg:py-4">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3" onClick={handleLinkClick}>
          <img
            // Se usa directamente una URL de placeholder ya que '../assets/Logo.png' no se pudo resolver.
            src={Logo}
            alt="L & M Construcciones"
            className="h-10 w-auto object-contain rounded-full border-2 border-amber-500 p-1" 
          />
          <span className="text-white font-extrabold text-xl tracking-wide hidden sm:block">
            L&M <span className="text-amber-500">CONSTRUCCIONES</span>
          </span>
        </Link>

        {/* LINKS DE NAVEGACIÓN (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className={`${baseLinkClasses} ${
                  isActive(item.to) ? activeClasses : inactiveClasses
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* BOTÓN DE MENÚ MÓVIL (Hamburguesa/Cierre) */}
        <div className="md:hidden z-50">
          <button 
            className="p-2 text-gray-300 hover:text-amber-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
               // Botón de cierre (X) en la esquina superior derecha del menú oscuro fijo
               <l className="h-7 w-7 stroke-2 text-white hover:text-amber-500" />
            ) : (
               // Botón de hamburguesa
               <Menu className="h-7 w-7 stroke-2 text-white hover:text-amber-500" />
            )}
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL DESPLEGABLE (3/4 de ancho, Blanco, Slide desde la izquierda) */}
      <div 
        className={`fixed top-0 left-0 h-screen 
          // Ancho: 3/4 del viewport, pero limitado en pantallas más grandes
          w-[75vw] max-w-xs sm:max-w-sm 
          bg-white shadow-2xl transform 
          transition-transform duration-500 ease-in-out 
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:hidden z-40 overflow-y-auto`} // Se asegura que el propio menú sí pueda hacer scroll si el contenido es largo.
        // Nota: Se ha quitado el pt-20/24 y se manejará el espacio del logo internamente
      >
        
        {/* Contenedor para el logo y el botón de cierre dentro del panel blanco */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            {/* Logo/Título en el panel móvil */}
            <span className="text-gray-900 font-extrabold text-xl tracking-tight">
                L&M <span className="text-amber-600">CONSTRUCCIONES</span>
            </span>
            {/* El botón de cierre X ya está en el z-50 del header. 
                Usamos el botón visible del header para cerrar, y este botón interno lo mantenemos por consistencia visual, aunque no es funcional directamente.
            */}
            <button 
                className="p-2 text-gray-300 hover:text-amber-600 transition-colors opacity-0 md:opacity-100" 
                onClick={() => setIsMenuOpen(false)} 
                aria-label="Cerrar menú lateral"
            >
                <X className="h-7 w-7 stroke-2" />
            </button>
        </div>

        {/* LISTA DE ENLACES - Alineados a la izquierda */}
        <ul className="flex flex-col items-start space-y-2 py-8">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <Link
                to={item.to}
                className={`flex items-center pl-6 ${mobileLinkClasses} ${
                  isActive(item.to) ? mobileActiveClasses : mobileInactiveClasses
                }`}
                onClick={handleLinkClick} 
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>
      
      {/* Overlay Oscuro para el 1/4 restante de la pantalla */}
      <div 
        className={`fixed top-0 right-0 h-screen 
          w-1/4 max-w-xs sm:max-w-sm // Este es el espacio restante (100% - 75%)
          bg-black/70 
          transform transition-opacity duration-500 ease-in-out 
          ${isMenuOpen ? 'opacity-10' : 'opacity-0 pointer-events-none'} 
          md:hidden z-30`}
        onClick={handleLinkClick} // Cierra el menú al hacer clic en el overlay
      >
      </div>

    </header>
  );
};

export default memo(Navbar);
