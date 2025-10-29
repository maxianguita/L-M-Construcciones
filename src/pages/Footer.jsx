import { memo } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        {/* COLUMNA 1 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">L & M Construcciones</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Construimos con compromiso y calidad.  
            Obra civil, pintura y mantenimiento industrial.
          </p>
        </div>

        {/* COLUMNA 2 */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Enlaces rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-yellow-400 transition-colors">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/proyectos" className="hover:text-yellow-400 transition-colors">
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3 */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Buenos Aires, Argentina</li>
            <li>📞 +54 9 11 3035-2067</li>
            <li>✉️ lymconstrucciones.7@gmail.com</li>
          </ul>
        <div className="flex gap-5 mt-4 ">
    
    {/* ÍCONO DE INSTAGRAM */}
    <a
        href="https://www.instagram.com/lymc.onstru7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="inline-flex items-center justify-center p-2 rounded-full 
                   bg-amber-500 text-gray-900 
                   hover:bg-amber-600 hover:text-gray-900 
                   transition-colors duration-300 shadow-md"
    >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5a5 5 0 0 1 0-10zm6.5-.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
    </a>

    {/* ÍCONO DE FACEBOOK */}
    <a
        href="https://www.facebook.com/profile.php?id=61582992600246"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="inline-flex items-center justify-center p-2 rounded-full 
                   bg-amber-500 text-gray-900 
                   hover:bg-amber-600 hover:text-gray-900 
                   transition-colors duration-300 shadow-md"
    >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.9h-2.4V12h2.4v-1.7c0-2.4 1.43-3.8 3.62-3.8 1.05 0 2.14.19 2.14.19v2.36h-1.2c-1.18 0-1.54.73-1.54 1.47V12h2.63l-.42 2.9h-2.21v6.9c4.56-.93 8-4.96 8-9.8z" />
        </svg>
    </a>
</div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-xs text-gray-200">
        © {new Date().getFullYear()} L & M Construcciones — Todos los derechos reservados
      </div>
    </footer>
  );
};

export default memo(Footer);
