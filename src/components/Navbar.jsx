import { memo, useState } from "react"; 
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { X, Menu } from 'lucide-react'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const location = useLocation(); 

  // Función para cerrar el menú y navegar
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const baseLinkClasses = 'relative px-2 py-1 transition-colors duration-300';
  const activeClasses = 'text-white border-b-2 border-amber-500';
  const inactiveClasses = 'text-gray-300 hover:text-white hover:border-b-2 hover:border-amber-300';

  const navItems = [
    { name: 'Inicio', to: '/' },
    { name: 'Servicios', to: '/servicios' },
    { name: 'Proyectos', to: '/proyectos' },
    { name: 'Nosotros', to: '/nosotros' },
    { name: 'Contacto', to: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <img
            src={Logo}
            alt="L & M Construcciones"
            className="h-16 w-auto object-contain" 
          />
          <span className="text-white font-black text-xl tracking-wide">
            L&M <span className="text-amber-500">CONSTRUCCIONES</span>
          </span>
        </Link>

        {/* LINKS DE NAVEGACIÓN (Desktop) */}
        <ul className="hidden md:flex items-center gap-6 text-gray-300 font-medium">
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
            onClick={() => setIsMenuOpen(!isMenuOpen)} // 3. Alternar el estado
          >
            {/* Usamos el ícono X si está abierto, el ícono Hamburguesa si está cerrado */}
            {isMenuOpen ? (
               <X className="h-6 w-6 stroke-2" />
               // Si no tienes Lucide, usa el SVG original:
               /* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg> */
            ) : (
               <Menu className="h-6 w-6 stroke-2" />
               // Si no tienes Lucide, usa el SVG original:
               /* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
               </svg> */
            )}
          </button>
        </div>
      </nav>

      {/* 4. MENÚ MÓVIL DESPLEGABLE */}
      <div 
        className={`fixed top-0 left-0 h-screen w-full bg-black/95 backdrop-blur-sm transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full' 
        } md:hidden z-40 pt-20`} 
      >
        <ul className="flex flex-col items-center space-y-8 py-10 text-xl font-bold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className={`block ${
                  isActive(item.to) ? 'text-amber-500' : 'text-gray-100 hover:text-amber-400'
                }`}
                onClick={handleLinkClick} 
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default memo(Navbar);