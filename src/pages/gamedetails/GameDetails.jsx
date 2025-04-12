import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameDetails } from "../../services/api";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchGameDetails(id).then(setGame);
  }, [id]);

  if (!game) {
    return <div className="text-neon font-pixel p-4">Loading game data...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-darkBg via-gray-900 to-black min-h-screen text-white p-6 font-pixel">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1 className="text-5xl text-pixelBlue font-bold mb-4">{game.name}</h1>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {game.description_raw || "No description available."}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-pixelRed text-white px-3 py-1 rounded-full">
              Released: {game.released}
            </span>
            <span className="bg-pixelYellow text-black px-3 py-1 rounded-full">
              Rating: {game.rating}
            </span>
            <span className="bg-pixelGreen text-white px-3 py-1 rounded-full">
              Metacritic:{" "}
              <a
                href={game.metacritic_url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {game.metacritic}
              </a>
            </span>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full rounded-lg shadow-lg border-4 border-pixelYellow"
          />
        </div>
      </div>

      {/* Platforms */}
      <div className="mt-12">
        <h2 className="text-3xl text-pixelBlue font-bold mb-4">Platforms</h2>
        <div className="flex flex-wrap gap-3">
          {game.platforms.map((platform) => (
            <span
              key={platform.platform.id}
              className="bg-pixelBlue text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              {platform.platform.name}
            </span>
          ))}
        </div>
      </div>

      {/* Genres */}
      <div className="mt-12">
        <h2 className="text-3xl text-pixelBlue font-bold mb-4">Genres</h2>
        <div className="flex flex-wrap gap-3">
          {game.genres.map((genre) => (
            <span
              key={genre.id}
              className="bg-pixelGreen text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>

      {/* Developers */}
      <div className="mt-12">
        <h2 className="text-3xl text-pixelBlue font-bold mb-4">Developers</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg">
          {game.developers.map((developer) => (
            <li key={developer.id}>{developer.name}</li>
          ))}
        </ul>
      </div>

      {/* Ratings */}
      <div className="mt-12">
        <h2 className="text-3xl text-pixelBlue font-bold mb-4">Ratings</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {game.ratings.map((rating) => (
            <div
              key={rating.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl text-pixelYellow font-bold">
                {rating.title}
              </h3>
              <p className="text-gray-300 mt-2">
                {rating.percent}% ({rating.count} votes)
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-12">
        <h2 className="text-3xl text-pixelBlue font-bold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-3">
          {game.tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Stores */}
      <div className="mt-12">
        <h2 className="text-3xl text-pixelBlue font-bold mb-4">Available Stores</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg">
          {game.stores.map((store) => (
            <li key={store.id}>
              <a
                href={`https://${store.store.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-pixelBlue hover:text-pixelYellow transition-colors"
              >
                {store.store.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Community Stats */}
      <div className="mt-12">
        <h2 className="text-3xl text-pixelBlue font-bold mb-4">Community Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl text-pixelYellow font-bold">Playtime</h3>
            <p className="text-gray-300 mt-2">{game.playtime} hours</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl text-pixelYellow font-bold">Reddit</h3>
            <p className="text-gray-300 mt-2">
              <a
                href={game.reddit_url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-pixelBlue hover:text-pixelYellow transition-colors"
              >
                {game.reddit_count} members
              </a>
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl text-pixelYellow font-bold">YouTube</h3>
            <p className="text-gray-300 mt-2">{game.youtube_count} videos</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl text-pixelYellow font-bold">Twitch</h3>
            <p className="text-gray-300 mt-2">{game.twitch_count} streams</p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mt-12">
        <h2 className="text-3xl text-pixelBlue font-bold mb-4">Links</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg">
          <li>
            <a
              href={game.website}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-pixelBlue hover:text-pixelYellow transition-colors"
            >
              Official Website
            </a>
          </li>
          <li>
            <a
              href={game.metacritic_url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-pixelBlue hover:text-pixelYellow transition-colors"
            >
              Metacritic Page
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GameDetails;
