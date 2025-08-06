function Footer({ className }) {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo o nombre */}
          <div>
            <h2 className="text-xl font-bold mb-2">MiSitioWeb</h2>
            <p className="text-sm text-gray-400">
              Inspirando y conectando ideas todos los días.
            </p>
          </div>

          {/* Enlaces útiles */}
          <div>
            <h3 className="font-semibold mb-2">Enlaces rápidos</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <a href="#inicio" className="hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-white">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="font-semibold mb-2">Contacto</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Email: contacto@misitioweb.com</li>
              <li>Tel: +57 300 123 4567</li>
              <li>Ubicación: Bogotá, Colombia</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="font-semibold mb-2">Síguenos</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-300 hover:text-white">
                🌐
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                📘
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                📸
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                🐦
              </a>
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
          &copy; 2025 MiSitioWeb. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}

export default Footer;
