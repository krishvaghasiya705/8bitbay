import React, { useState } from "react";
import { fetchGames, fetchGameDetails } from "../../services/api";

const Admin = () => {
  const [game, setGame] = useState({
    name: "",
    version: "",
    includes: [],
    id: "",
    tags: [],
    companies: [],
    language: "",
    original_size: "",
    repack_size: "",
    download_links: {
      direct_links: [],
      torrent: [],
    },
    banner_image: "",
    images: [],
    imagevid: "",
    repack_details: {
      title: "",
      features: [],
    },
    game_details: {
      description: "",
      no_return_mode: "",
      features: [],
    },
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e, field) => {
    const { value } = e.target;
    setGame((prev) => ({ ...prev, [field]: value.split(",") }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditMode ? PUT_URL : POST_URL; // Replace with actual URLs
    const method = isEditMode ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      },
      body: JSON.stringify([game]),
    });

    if (res.ok) {
      alert(`Game ${isEditMode ? "updated" : "added"} successfully!`);
    }
  };

  const handleSearch = async () => {
    const gameDetails = await fetchGameDetails(searchQuery);
    if (gameDetails) {
      setGame(gameDetails);
      setIsEditMode(true);
    } else {
      alert("Game not found!");
    }
  };

  const resetForm = () => {
    setGame({
      name: "",
      version: "",
      includes: [],
      id: "",
      tags: [],
      companies: [],
      language: "",
      original_size: "",
      repack_size: "",
      download_links: {
        direct_links: [],
        torrent: [],
      },
      banner_image: "",
      images: [],
      imagevid: "",
      repack_details: {
        title: "",
        features: [],
      },
      game_details: {
        description: "",
        no_return_mode: "",
        features: [],
      },
    });
    setIsEditMode(false);
    setSearchQuery("");
  };

  return (
    <div className="p-6 bg-darkBg text-white min-h-screen">
      <h1 className="text-3xl font-pixel text-neon mb-6 text-center">
        Admin Panel
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={resetForm}
          className="bg-pixelBlue text-white px-4 py-2 rounded shadow-pixel hover:bg-pixelYellow transition"
        >
          Add Game
        </button>
        <button
          onClick={() => setIsEditMode(true)}
          className="bg-pixelRed text-white px-4 py-2 rounded shadow-pixel hover:bg-pixelYellow transition"
        >
          Edit Game
        </button>
      </div>

      {isEditMode && (
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by ID or Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded bg-cardGrey text-white placeholder-gray-400"
          />
          <button
            onClick={handleSearch}
            className="mt-2 bg-neon text-darkBg px-4 py-2 rounded shadow-pixel hover:bg-pixelYellow transition"
          >
            Search
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-cardGrey p-6 rounded shadow-pixel"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Game Name</label>
            <input
              type="text"
              name="name"
              value={game.name}
              onChange={handleChange}
              placeholder="Game Name"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Version</label>
            <input
              type="text"
              name="version"
              value={game.version}
              onChange={handleChange}
              placeholder="Version"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Game ID</label>
            <input
              type="text"
              name="id"
              value={game.id}
              onChange={handleChange}
              placeholder="Game ID"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Includes</label>
            <input
              type="text"
              name="includes"
              value={game.includes.join(",")}
              onChange={(e) => handleArrayChange(e, "includes")}
              placeholder="Includes (comma-separated)"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Tags</label>
            <input
              type="text"
              name="tags"
              value={game.tags.join(",")}
              onChange={(e) => handleArrayChange(e, "tags")}
              placeholder="Tags (comma-separated)"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Companies</label>
            <input
              type="text"
              name="companies"
              value={game.companies.join(",")}
              onChange={(e) => handleArrayChange(e, "companies")}
              placeholder="Companies (comma-separated)"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Language</label>
            <input
              type="text"
              name="language"
              value={game.language}
              onChange={handleChange}
              placeholder="Language"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Original Size</label>
            <input
              type="text"
              name="original_size"
              value={game.original_size}
              onChange={handleChange}
              placeholder="Original Size"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Repack Size</label>
            <input
              type="text"
              name="repack_size"
              value={game.repack_size}
              onChange={handleChange}
              placeholder="Repack Size"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Banner Image URL</label>
            <input
              type="text"
              name="banner_image"
              value={game.banner_image}
              onChange={handleChange}
              placeholder="Banner Image URL"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Images</label>
            <input
              type="text"
              name="images"
              value={game.images.join(",")}
              onChange={(e) => handleArrayChange(e, "images")}
              placeholder="Images (comma-separated URLs)"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Image Video URL</label>
            <input
              type="text"
              name="imagevid"
              value={game.imagevid}
              onChange={handleChange}
              placeholder="Image Video URL"
              className="p-2 rounded bg-darkBg text-white placeholder-gray-400 w-full"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm mb-1">Repack Features</label>
          <textarea
            name="repack_details.features"
            value={game.repack_details.features.join("\n")}
            onChange={(e) =>
              setGame((prev) => ({
                ...prev,
                repack_details: {
                  ...prev.repack_details,
                  features: e.target.value.split("\n"),
                },
              }))
            }
            placeholder="Repack Features (newline-separated)"
            className="w-full p-2 rounded bg-darkBg text-white placeholder-gray-400"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm mb-1">Game Description</label>
          <textarea
            name="game_details.description"
            value={game.game_details.description}
            onChange={(e) =>
              setGame((prev) => ({
                ...prev,
                game_details: {
                  ...prev.game_details,
                  description: e.target.value,
                },
              }))
            }
            placeholder="Game Description"
            className="w-full p-2 rounded bg-darkBg text-white placeholder-gray-400"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm mb-1">Game Features</label>
          <textarea
            name="game_details.features"
            value={game.game_details.features.join("\n")}
            onChange={(e) =>
              setGame((prev) => ({
                ...prev,
                game_details: {
                  ...prev.game_details,
                  features: e.target.value.split("\n"),
                },
              }))
            }
            placeholder="Game Features (newline-separated)"
            className="w-full p-2 rounded bg-darkBg text-white placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-pixelBlue text-white px-6 py-2 rounded shadow-pixel hover:bg-pixelYellow transition"
        >
          {isEditMode ? "Update Game" : "Add Game"}
        </button>
      </form>
    </div>
  );
};

export default Admin;