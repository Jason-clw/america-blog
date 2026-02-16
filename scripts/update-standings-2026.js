const fs = require('fs');
const path = require('path');

const standings = [
  { rank: 1, team: { name: "Internacional de Bogotá", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/7445.png", id: 7445 }, all: { played: 7 }, goalsDiff: "+1", points: 14 },
  { rank: 2, team: { name: "Deportivo Pasto", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/5485.png", id: 5485 }, all: { played: 7 }, goalsDiff: "+1", points: 14 },
  { rank: 3, team: { name: "Deportes Tolima", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/5489.png", id: 5489 }, all: { played: 7 }, goalsDiff: "+4", points: 12 },
  { rank: 4, team: { name: "Bucaramanga", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/6137.png", id: 6137 }, all: { played: 6 }, goalsDiff: "+6", points: 10 },
  { rank: 5, team: { name: "América de Cali", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8109.png", id: 8109 }, all: { played: 5 }, goalsDiff: "+4", points: 10 },
  { rank: 6, team: { name: "Deportivo Cali", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2672.png", id: 2672 }, all: { played: 7 }, goalsDiff: "+3", points: 10 },
  { rank: 7, team: { name: "Once Caldas", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2919.png", id: 2919 }, all: { played: 7 }, goalsDiff: "+1", points: 10 },
  { rank: 8, team: { name: "Fortaleza CEIF", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/4928.png", id: 4928 }, all: { played: 7 }, goalsDiff: "-1", points: 10 },
  { rank: 9, team: { name: "Atlético Nacional", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/5264.png", id: 5264 }, all: { played: 4 }, goalsDiff: "+7", points: 9 },
  { rank: 10, team: { name: "Atlético Junior", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/4815.png", id: 4815 }, all: { played: 5 }, goalsDiff: "+2", points: 9 },
  { rank: 11, team: { name: "Llaneros", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/7915.png", id: 7915 }, all: { played: 7 }, goalsDiff: "+1", points: 9 },
  { rank: 12, team: { name: "Águilas Doradas", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/9762.png", id: 9762 }, all: { played: 6 }, goalsDiff: "0", points: 8 },
  { rank: 13, team: { name: "Millonarios", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/5484.png", id: 5484 }, all: { played: 7 }, goalsDiff: "-1", points: 8 },
  { rank: 14, team: { name: "Independiente Santa Fe", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/5488.png", id: 5488 }, all: { played: 6 }, goalsDiff: "0", points: 7 },
  { rank: 15, team: { name: "Jaguares de Córdoba", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/10309.png", id: 10309 }, all: { played: 5 }, goalsDiff: "-4", points: 7 },
  { rank: 16, team: { name: "Independiente Medellín", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2690.png", id: 2690 }, all: { played: 7 }, goalsDiff: "-2", points: 6 },
  { rank: 17, team: { name: "Boyacá Chicó", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/5480.png", id: 5480 }, all: { played: 7 }, goalsDiff: "-5", points: 4 },
  { rank: 18, team: { name: "Deportivo Pereira", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/5486.png", id: 5486 }, all: { played: 6 }, goalsDiff: "-4", points: 3 },
  { rank: 19, team: { name: "Cúcuta Deportivo", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/6101.png", id: 6101 }, all: { played: 6 }, goalsDiff: "-5", points: 2 },
  { rank: 20, team: { name: "Alianza FC", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/9761.png", id: 9761 }, all: { played: 5 }, goalsDiff: "-8", points: 2 }
];

const dataPath = path.join(__dirname, '../data/posiciones.json');
fs.writeFileSync(dataPath, JSON.stringify(standings, null, 2));
console.log("✅ Tabla de posiciones 2026 actualizada manualmente desde ESPN.");
