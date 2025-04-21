import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GameCard from "../../components/GameCard";
import { getAllGames } from "../../api/api";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "../../components/loader/loader";
import Pagination from "../../components/pagination/pagination";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const gamesPerPage = 12;
  const gameCardsRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query") || "";
  const currentPage = parseInt(searchParams.get("page"), 10) || 1;

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await getAllGames();
        setGames(data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    loadGames();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = games.filter((game) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
          game.name.toLowerCase().includes(lowerCaseQuery) ||
          (game.tags && game.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery))) ||
          (game.companies && game.companies.some((company) => company.toLowerCase().includes(lowerCaseQuery)))
        );
      });
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

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const currentGames = filteredGames.slice(startIndex, startIndex + gamesPerPage);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gradient-to-br from-darkBg via-gray-900 to-black text-white min-h-screen p-6">
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        ref={gameCardsRef}
      >
        {currentGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => navigate(`/?query=${encodeURIComponent(searchQuery)}&page=${page}`)}
      />
    </div>
  );
};

export default Home;