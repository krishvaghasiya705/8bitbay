import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    // <Link to={`/gamedetails/${game.id}/${game.name}`}>
    <Link to={`/gamedetails/${game.id}/`}>
      <div className="h-full bg-cardGrey hover:border-pixelYellow border-2 border-transparent transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-pixel">
        <div className="h-[400px] overflow-hidden bg-black rounded-t-xl p-2">
          <img
            src={game.banner_image}
            alt={game.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h2 className="text-pixelRed font-pixel text-lg line-clamp-1">{game.name}</h2>
          <p className="text-sm text-gray-300 mt-1">
            Version: {game.version || "N/A"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
