import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <Link to={`/gamedetails/${game.id}`}>
      <div className="bg-cardGrey hover:border-pixelYellow border-2 border-transparent transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-pixel">
        <img
          src={game.banner_image}
          alt={game.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-pixelRed font-pixel text-lg">{game.name}</h2>
          <p className="text-sm text-gray-300 mt-1">⭐ {game.rating} / 5</p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
