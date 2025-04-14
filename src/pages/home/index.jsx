import React, { useEffect, useState } from "react";
import GameCard from "../../components/GameCard";
import { fetchGames } from "../../services/api";

const Home = ({ searchQuery }) => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
        setFilteredGames(data); // Initially show all games
      } catch (err) {
        setError("Failed to load games. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadGames();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = games.filter((game) =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games); // Reset to all games if no query
    }
  }, [searchQuery, games]);

  if (loading) {
    return <div className="text-center text-white">Loading games...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gradient-to-br from-darkBg via-gray-900 to-black text-white min-h-screen p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.isArray(filteredGames) && filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
