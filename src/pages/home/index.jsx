import React, { useEffect, useState } from "react";
import GameCard from "../../components/GameCard";
import { fetchGames } from "../../services/api";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchGames();
      setGames(data);
    };
    loadGames();
  }, []);

  return (
    <div className="bg-gradient-to-br from-darkBg via-gray-900 to-black text-white min-h-screen p-6">
      <header className="text-center mb-8">
        <h1 className="text-pixelYellow font-pixel text-4xl md:text-6xl">
          8bitBay
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-lg">
          Discover and explore your favorite retro games!
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
