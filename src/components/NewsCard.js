import React from 'react';

const NewsCard = ({ news }) => {
  // Colores Escarlatas: Rojo Intenso (#C62828), Negro Carbono (#1A1A1A), Blanco Puro
  return (
    <div className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-red-900/20 border border-white/5">
      {/* Badge de Categoría */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
          {news.category || 'Actualidad'}
        </span>
      </div>

      {/* Imagen con Overlay Gradiente */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={news.image || 'https://a.espncdn.com/photo/2024/0429/r1326008_1296x729_16-9.jpg'} 
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-6 relative">
        <div className="flex items-center text-gray-400 text-xs mb-3 space-x-4">
          <span className="flex items-center">
            <span className="mr-1 text-red-500">📅</span> {news.date}
          </span>
          <span className="flex items-center text-red-400 font-semibold italic">
             #{news.tag || 'LaMecha'}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-red-500 transition-colors">
          {news.title}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-2 mb-6 font-light leading-relaxed">
          {news.summary}
        </p>

        {/* Botón Estilo Glassmorphism */}
        <div className="flex items-center justify-between">
          <button className="flex items-center text-white text-xs font-bold uppercase tracking-wider group/btn">
            Leer más 
            <span className="ml-2 bg-red-600 p-1 rounded-lg transition-all group-hover/btn:translate-x-2 group-hover/btn:bg-white group-hover/btn:text-red-600">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </button>
          
          <div className="flex space-x-2">
            <button title="Compartir" className="text-gray-500 hover:text-white transition-colors">
               <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Glow Effect al Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600/30 rounded-2xl pointer-events-none transition-all duration-300"></div>
    </div>
  );
};

export default NewsCard;
