import Header from '../components/Header';
import Hero from '../components/Hero';
import StandingTable from '../StandingTable';
import NewsCard from '../components/NewsCard';
import standingsData from '../../data/posiciones.json';

export default function Home() {
  const sampleNews = {
    title: "América de Cali se mantiene firme en el Top 5",
    summary: "El equipo escarlata demuestra solidez defensiva y efectividad en el ataque en este inicio de temporada 2026.",
    date: "16 Feb 2026",
    category: "LIGA BETPLAY",
    tag: "LaMecha",
    image: "https://a.espncdn.com/photo/2024/0429/r1326008_1296x729_16-9.jpg"
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Header />
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Columna de Noticias (Izquierda/Centro) */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-black text-white uppercase italic">
                Últimas <span className="text-red-600">Noticias</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <NewsCard news={sampleNews} />
                <NewsCard news={{...sampleNews, title: "Análisis del próximo rival: Duelo de rojos", category: "PREVIA"}} />
              </div>
            </div>

            {/* Columna de Tabla (Derecha) */}
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-3xl font-black text-white uppercase italic">
                La <span className="text-red-600">Tabla</span>
              </h2>
              <StandingTable standings={standingsData} />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black py-12 border-t border-red-600/10 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 BLOG ESCARLATA - Pasión de un Pueblo
        </p>
      </footer>
    </div>
  );
}
