import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-[#1A1A1A]">
      {/* Imagen de fondo con overlay oscuro y gradiente rojo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://a.espncdn.com/photo/2024/0429/r1326008_1296x729_16-9.jpg" 
          alt="Estadio Pascual Guerrero" 
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <span className="h-[2px] w-12 bg-red-600"></span>
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-sm">
              La Pasión de un Pueblo
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase italic italic">
            EL ÚNICO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
              PENTACAMPEÓN
            </span>
          </h1>
          
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-lg font-light leading-relaxed">
            Bienvenido al portal definitivo para el hincha Escarlata. Noticias, estadísticas y la actualidad del equipo más grande de Colombia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 rounded-full uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-xl shadow-red-900/40">
              Últimas Noticias
            </button>
            <button className="border-2 border-white/20 hover:border-red-600 text-white font-black py-4 px-8 rounded-full uppercase tracking-widest text-xs transition-all backdrop-blur-sm">
              Ver Posiciones
            </button>
          </div>
        </div>
      </div>

      {/* Stats Flotantes Rápidas */}
      <div className="absolute bottom-10 right-10 hidden lg:flex space-x-12">
        <div className="flex flex-col">
          <span className="text-red-600 font-black text-4xl leading-none">15</span>
          <span className="text-gray-400 uppercase text-[10px] font-bold tracking-widest mt-1">Títulos</span>
        </div>
        <div className="flex flex-col border-l border-white/10 pl-12">
          <span className="text-red-600 font-black text-4xl leading-none">1927</span>
          <span className="text-gray-400 uppercase text-[10px] font-bold tracking-widest mt-1">Fundación</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
