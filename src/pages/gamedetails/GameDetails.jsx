import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameDetails } from "../../services/api";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const loadGameDetails = async () => {
      const data = await fetchGameDetails(id);
      setGame(data);
    };
    loadGameDetails();
  }, [id]);

  if (!game) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="p-6 bg-darkBg text-white font-pixel">
      <div className="mb-6 grid grid-cols-[30%1fr] gap-4">
        <img
          src={game.banner_image}
          alt={game.name}
          className="w-full max-w-4xl object-cover rounded-lg shadow-pixel h-[500px]"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">{game.name}</h1>
          <p className="text-lg text-gray-400">Version: {game.version}</p>
          <h2 className="text-2xl font-bold mb-2">Description</h2>
          <p className="leading-relaxed">{game.game_details.description}</p>
          <h2 className="text-2xl font-bold mb-2">Companies</h2>
          <ul className="list-disc list-inside pl-4">
            {game.companies.map((company, index) => (
              <li key={index}>{company}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Includes</h2>
        <ul className="list-disc list-inside pl-4">
          {game.includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {game.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-pixelBlue text-darkBg px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Description</h2>
        <p className="leading-relaxed">{game.game_details.description}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">No Return Mode</h2>
        <p className="leading-relaxed">{game.game_details.no_return_mode}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{game.repack_details.title}</h2>
        <ul className="list-disc list-inside pl-4">
          {game.repack_details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Companies</h2>
        <ul className="list-disc list-inside pl-4">
          {game.companies.map((company, index) => (
            <li key={index}>{company}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Screenshots</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {game.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="rounded-lg shadow-pixel"
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Animated Preview</h2>
        <img
          src={game.imagevid}
          alt="Animated Preview"
          className="w-full mx-auto rounded-lg shadow-pixel"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Download Links</h2>
        <div>
          <h3 className="text-xl font-bold mb-2">Direct Links</h3>
          <ul className="list-disc list-inside pl-4">
            {game.download_links.direct_links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pixelYellow underline"
                >
                  {link.link_name}
                </a>{" "}
                - {link.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Torrent</h3>
          <ul className="list-disc list-inside pl-4">
            {game.download_links.torrent.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pixelYellow underline"
                >
                  {link.link_name}
                </a>{" "}
                - {link.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Additional Features</h2>
        <ul className="list-disc list-inside pl-4">
          {game.game_details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Details</h2>
        <p>
          <strong>Language:</strong> {game.language}
        </p>
        <p>
          <strong>Original Size:</strong> {game.original_size}
        </p>
        <p>
          <strong>Repack Size:</strong> {game.repack_size}
        </p>
      </div>
    </div>
  );
};

export default GameDetails;
