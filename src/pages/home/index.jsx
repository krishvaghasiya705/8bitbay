import React, { useEffect, useState, useRef } from "react";
import GameCard from "../../components/GameCard";
import { getAllGames } from "../../api/api";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "../../components/loader/loader";
import Loadertwo from "../../components/loadertwo/loadertwo";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ searchQuery }) => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const gameCardsRef = useRef(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await getAllGames();
        setGames(data);
        setFilteredGames(data);
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
      setFilteredGames(games);
    }
  }, [searchQuery, games]);

  useEffect(() => {
    if (gameCardsRef.current) {
      gsap.fromTo(
        gameCardsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gameCardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [filteredGames]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Loadertwo />;
  }

  return (
    <>
      <div className="bg-gradient-to-br from-darkBg via-gray-900 to-black text-white min-h-screen p-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          ref={gameCardsRef}
        >
          {Array.isArray(filteredGames) &&
            filteredGames.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
