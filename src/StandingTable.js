import React from 'react';

const StandingTable = ({ standings }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-red-600">
      <div className="bg-red-600 p-4">
        <h2 className="text-white font-bold text-xl uppercase flex items-center">
          <span className="mr-2">⚽</span> Tabla de Posiciones
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-xs">
              <th className="p-3 text-center">Pos</th>
              <th className="p-3">Equipo</th>
              <th className="p-3 text-center">PJ</th>
              <th className="p-3 text-center">GD</th>
              <th className="p-3 text-center font-bold text-red-600">Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team) => (
              <tr 
                key={team.team.id} 
                className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${team.team.name.includes('America') ? 'bg-red-100 font-bold' : ''}`}
              >
                <td className="p-3 text-center text-sm">{team.rank}</td>
                <td className="p-3 flex items-center">
                  <img src={team.team.logo} alt={team.team.name} className="w-6 h-6 mr-3" />
                  <span className="truncate">{team.team.name}</span>
                </td>
                <td className="p-3 text-center text-sm">{team.all.played}</td>
                <td className="p-3 text-center text-sm">{team.goalsDiff}</td>
                <td className="p-3 text-center font-bold text-red-600">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StandingTable;
