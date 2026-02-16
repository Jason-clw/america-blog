import Header from '../components/Header';
import Hero from '../components/Hero';
import StandingTable from '../StandingTable';
import NewsCard from '../components/NewsCard';

export default function Home({ standingsData }) {
  const latestNews = [
    {
      "title": "¡Regalo de 99 años! América vence a Santa Fe en el Pascual",
      "summary": "En una noche mágica celebrando casi un siglo de historia, 'La Mecha' derrotó 1-0 al León. El gol del juvenil Daniel Valencia desató la locura en la caldera, reafirmando el gran momento bajo el mando de David González.",
      "date": "16 Feb 2026",
      "category": "LIGA BETPLAY",
      "tag": "99Años",
      "image": "https://a.espncdn.com/photo/2024/0429/r1326008_1296x729_16-9.jpg"
    },
    {
      "title": "Jean Fernandes: 'Vine para ser campeón con La Mecha'",
      "summary": "El portero paraguayo tuvo un debut impecable manteniendo el arco en cero ante Santa Fe. Tras el pitazo final, Jean envió un mensaje de compromiso total con la hinchada, ganándose los primeros aplausos de la tribuna.",
      "date": "16 Feb 2026",
      "category": "ACTUALIDAD",
      "tag": "Debut",
      "image": "https://a.espncdn.com/photo/2024/0429/r1326008_1296x729_16-9.jpg"
    },
    {
      "title": "¿Se viene un 'bombazo' argentino para el ataque?",
      "summary": "David González confirmó en rueda de prensa que el mercado no está cerrado. América compite codo a codo con Atlético Nacional por el fichaje de un delantero de peso proveniente de la liga argentina para blindar la ofensiva.",
      "date": "16 Feb 2026",
      "category": "MERCADO",
      "tag": "Fichajes",
      "image": "https://a.espncdn.com/photo/2024/0429/r1326008_1296x729_16-9.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] font-sans selection:bg-red-600 selection:text-white text-white">
      <Header />
      
      <main className="pb-20">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="flex-1 space-y-10">
              <div className="flex items-center justify-between border-b border-red-600/20 pb-4">
                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                  Últimas <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">Noticias</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {latestNews.map((news, index) => (
                  <NewsCard key={index} news={news} />
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-900/40 to-black p-8 rounded-2xl border border-red-600/20">
                <h3 className="text-xl font-bold text-white mb-2 uppercase">¿Quieres recibir las alertas de La Mecha?</h3>
                <p className="text-gray-400 text-sm mb-4">Suscríbete para recibir el resumen de cada partido en tu correo.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="tu@email.com" className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 outline-none focus:border-red-600 text-white" />
                  <button className="bg-red-600 px-6 py-2 rounded-lg font-bold text-xs uppercase">Unirse</button>
                </div>
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
                
                <div className="shadow-2xl shadow-red-900/10 text-black">
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
