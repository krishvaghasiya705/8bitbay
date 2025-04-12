import React, { useEffect, useState, useRef, useCallback } from "react";
import GameCard from "../../components/GameCard";
import FilterBar from "../../components/FilterBar";
import { fetchGames } from "../../services/api";

const Home = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const loadGames = async (query = "", pageNumber = 1) => {
    setLoading(true);
    const newGames = await fetchGames(query, pageNumber);
    if (newGames.length === 0) setHasMore(false);
    setGames((prevGames) => [...prevGames, ...newGames]);
    setLoading(false);
  };

  const handleSearch = (query) => {
    setGames([]);
    setPage(1);
    setHasMore(true);
    loadGames(query, 1);
  };

  useEffect(() => {
    loadGames("", page);
  }, [page]);

  const lastGameElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="bg-gradient-to-br from-darkBg via-gray-900 to-black text-white min-h-screen p-6 relative">
      <div className="absolute inset-0 bg-stars bg-cover bg-fixed opacity-20"></div>
      <header className="text-center mb-8 relative z-10">
        <h1 className="text-pixelYellow font-pixel text-4xl md:text-6xl animate-bounce">
          8bitBay
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-lg">
          Discover and explore your favorite retro games!
        </p>
      </header>
      <FilterBar onSearch={handleSearch} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 relative z-10">
        {games.map((game, index) => {
          if (games.length === index + 1) {
            return (
              <div ref={lastGameElementRef} key={game.id}>
                <GameCard game={game} />
              </div>
            );
          } else {
            return <GameCard key={game.id} game={game} />;
          }
        })}
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}
    </div>
  );
};

export default Home;
