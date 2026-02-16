import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md border-b border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo y Nombre */}
          <div className="flex items-center space-x-4">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" 
                alt="Logo América" 
                className="relative h-12 w-12 transform group-hover:rotate-12 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-2xl tracking-tighter leading-none italic uppercase">
                BLOG<span className="text-red-600">ESCARLATA</span>
              </span>
              <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">
                Pasión de un pueblo
              </span>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Inicio', 'Noticias', 'Posiciones', 'Calendario', 'Tienda'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-300 hover:text-red-500 text-xs font-black uppercase tracking-widest transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Acciones Rápidas / Botón "En Vivo" */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex items-center bg-red-600 hover:bg-red-700 text-white text-[10px] font-black px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-red-900/40">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              SIGUIENTE PARTIDO
            </button>
            
            {/* Menú Mobile Icon */}
            <div className="md:hidden text-white cursor-pointer hover:text-red-500">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
