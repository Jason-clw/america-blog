import Header from '../components/Header';
import Hero from '../components/Hero';
import StandingTable from '../StandingTable';
import NewsCard from '../components/NewsCard';
import standingsData from '../../data/posiciones.json';

export default function Home() {
  const sampleNews = [
    {
      title: "América de Cali se mantiene firme en el Top 5",
      summary: "El equipo escarlata demuestra solidez defensiva y efectividad en el ataque en este inicio de temporada 2026.",
      date: "16 Feb 2026",
      category: "LIGA BETPLAY",
      tag: "LaMecha",
      image: "https://a.espncdn.com/photo/2024/0429/r1326008_1296x729_16-9.jpg"
    },
    {
      title: "Análisis del próximo rival: Duelo de rojos",
      summary: "Se viene un partido decisivo en el Pascual. Analizamos las claves tácticas para mantener la racha ganadora.",
      date: "17 Feb 2026",
      category: "PREVIA",
      tag: "PascualGuerrero",
      image: "https://a.espncdn.com/photo/2024/0429/r1326008_1296x729_16-9.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] font-sans selection:bg-red-600 selection:text-white">
      <Header />
      
      <main className="pb-20">
        {/* HERO SECTION - Ocupa el ancho total arriba */}
        <Hero />
        
        {/* CONTENIDO PRINCIPAL - Layout de Rejilla Responsivo */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* COLUMNA IZQUIERDA: NOTICIAS (70% aprox en desktop) */}
            <div className="flex-1 space-y-10">
              <div className="flex items-center justify-between border-b border-red-600/20 pb-4">
                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                  Últimas <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">Noticias</span>
                </h2>
                <button className="text-xs font-bold text-red-500 hover:text-white transition-colors uppercase tracking-widest">
                  Ver todas →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sampleNews.map((news, index) => (
                  <NewsCard key={index} news={news} />
                ))}
              </div>

              {/* Banner de Suscripción o Info Extra */}
              <div className="bg-gradient-to-r from-red-900/40 to-black p-8 rounded-2xl border border-red-600/20">
                <h3 className="text-xl font-bold text-white mb-2 uppercase">¿Quieres recibir las alertas de La Mecha?</h3>
                <p className="text-gray-400 text-sm mb-4">Suscríbete para recibir el resumen de cada partido en tu correo.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="tu@email.com" className="bg-carbon border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 outline-none focus:border-red-600" />
                  <button className="bg-red-600 px-6 py-2 rounded-lg font-bold text-xs uppercase">Unirse</button>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: TABLA Y STATS (30% aprox en desktop) */}
            <aside className="lg:w-[380px] space-y-10">
              <div className="sticky top-28">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="w-2 h-8 bg-red-600 rounded-full"></span>
                  <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                    La <span className="text-red-600">Tabla</span>
                  </h2>
                </div>
                
                {/* Contenedor de la Tabla con sombra extra para destacar */}
                <div className="shadow-2xl shadow-red-900/10">
                  <StandingTable standings={standingsData} />
                </div>

                {/* Widget de Próximo Partido */}
                <div className="mt-8 bg-carbon rounded-xl p-6 border border-white/5">
                  <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">Próximo Encuentro</p>
                  <div className="flex items-center justify-between text-white font-bold">
                    <div className="text-center">
                      <img src="https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" className="w-10 h-10 mx-auto mb-2" alt="América" />
                      <span className="text-xs uppercase">América</span>
                    </div>
                    <div className="text-xl text-gray-500 italic">VS</div>
                    <div className="text-center opacity-50">
                      <div className="w-10 h-10 bg-gray-800 rounded-full mx-auto mb-2 flex items-center justify-center text-[10px]">?</div>
                      <span className="text-xs uppercase">TBD</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <footer className="bg-black py-16 border-t border-red-600/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <img src="https://a.espncdn.com/i/teamlogos/soccer/500/8109.png" className="w-12 h-12 mx-auto mb-6 opacity-30" alt="América" />
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 BLOG ESCARLATA - Desarrollado por BOTija 🧉
          </p>
        </div>
      </footer>
    </div>
  );
}
