import Header from '../components/Header';
import Hero from '../components/Hero';
import StandingTable from '../StandingTable';
import NewsCard from '../components/NewsCard';

export default function Home({ standingsData }) {
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
    <div className="min-h-screen bg-[#1A1A1A] font-sans selection:bg-red-600 selection:text-white text-white">
      <Header />
      
      <main className="pb-20">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="flex flex-col lg:flex-row gap-8 text-white">
            
            <div className="flex-1 space-y-10">
              <div className="flex items-center justify-between border-b border-red-600/20 pb-4">
                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                  Últimas <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">Noticias</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sampleNews.map((news, index) => (
                  <NewsCard key={index} news={news} />
                ))}
              </div>
            </div>

            <aside className="lg:w-[380px] space-y-10">
              <div className="sticky top-28">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="w-2 h-8 bg-red-600 rounded-full"></span>
                  <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                    La <span className="text-red-600">Tabla</span>
                  </h2>
                </div>
                
                <div className="shadow-2xl shadow-red-900/10">
                  <StandingTable standings={standingsData} />
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <footer className="bg-black py-16 border-t border-red-600/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 BLOG ESCARLATA - Desarrollado por BOTija 🧉
          </p>
        </div>
      </footer>
    </div>
  );
}

// Cargar los datos en el servidor para evitar problemas de importación directa
export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(process.cwd(), 'data', 'posiciones.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const standingsData = JSON.parse(jsonData);

  return {
    props: {
      standingsData,
    },
  };
}
