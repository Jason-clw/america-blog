const fs = require('fs');
const path = require('path');

const API_KEY = fs.readFileSync(path.join(__dirname, '../API_KET.txt'), 'utf8').trim();
const LEAGUE_ID = 71; // Categoría Primera A (Colombia)
const SEASON = 2024;  // Cambiado a 2024 para el plan gratuito
const TEAM_NAME = "America de Cali";

async function fetchStandings() {
    console.log(`🚀 Consultando tabla para la temporada ${SEASON}...`);
    
    try {
        const response = await fetch(`https://v3.football.api-sports.io/standings?league=${LEAGUE_ID}&season=${SEASON}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": API_KEY
            }
        });

        const data = await response.json();

        if (data.errors && Object.keys(data.errors).length > 0) {
            console.error("❌ Error de la API:", data.errors);
            return;
        }

        const standings = data.response[0].league.standings[0];
        
        // Guardar datos localmente
        const dataPath = path.join(__dirname, '../data/posiciones.json');
        fs.writeFileSync(dataPath, JSON.stringify(standings, null, 2));
        
        console.log("✅ Tabla de posiciones actualizada en data/posiciones.json");
        
        // Buscar al América específicamente para dar un reporte rápido
        const america = standings.find(s => s.team.name.includes("America") || s.team.id === 1133);
        if (america) {
            console.log(`📊 Posición de La Mecha: #${america.rank} con ${america.points} puntos.`);
        }

    } catch (error) {
        console.error("❌ Error fatal:", error);
    }
}

fetchStandings();
