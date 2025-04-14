import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <Link to={`/gamedetails/${game.id}/${encodeURIComponent(game.name)}`}>
      <div className="h-full bg-cardGrey hover:border-pixelYellow border-2 border-transparent transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-pixel">
        <div className="h-[400px] overflow-hidden bg-black rounded-t-xl p-2">
          <img
            src={game.banner_image || "Game Image"}
            alt={game.name || "Game Image"}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h2 className="text-pixelRed font-pixel text-lg line-clamp-1 overflow-hidden text-ellipsis">
            {game.name || "Game Name"}
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            Version: {game.version || "N/A"}
          </p>
          <p className="text-sm text-gray-300 mt-1">
            Original Size: {game.original_size || "N/A"}
          </p>
          <p className="text-sm text-gray-300 mt-1">
            Repack Size: {game.repack_size || "N/A"}
          </p>
          <div className="mt-2">
            <p className="text-sm text-gray-300">Tags:</p>
            <div className="flex flex-wrap gap-1">
              {game.tags && game.tags.length > 0 ? (
                game.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-pixelYellow text-black text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-xs">No tags available</span>
              )}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-300">Companies:</p>
            <ul className="list-disc list-inside text-gray-400 text-xs">
              {game.companies && game.companies.length > 0 ? (
                game.companies.map((company, index) => (
                  <li key={index}>{company}</li>
                ))
              ) : (
                <li>No companies listed</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
