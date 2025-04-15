import React, { useState } from "react";
import { addGame, updateGame, getAllGames } from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const defaultGame = {
    banner_image: "",
    companies: [],
    download_links: {
      direct_links: [],
      torrent: [],
    },
    game_details: {
      description: "",
      features: [],
      no_return_mode: "",
    },
    id: "",
    imagevid: "",
    images: [],
    includes: [],
    language: "",
    name: "",
    original_size: "",
    repack_details: {
      features: [],
      title: "",
    },
    repack_size: "",
    tags: [],
    version: "",
  };

  const [game, setGame] = useState(defaultGame);
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

  const handleNestedArrayChange = (e, section, field) => {
    try {
      const value = JSON.parse(e.target.value);
      setGame((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    } catch {
      toast.error("Please enter valid JSON array.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await updateGame(game.id, game); // Use API function
      } else {
        await addGame(game); // Use API function
      }
      toast.success("Game saved successfully!");
      resetForm();
    } catch (err) {
      console.error("Failed to save game:", err);
      toast.error("Failed to save game. Please try again.");
    }
  };

  const handleSearch = async () => {
    try {
      const games = await getAllGames(); // Use API function
      const foundGame = games.find((g) => g.id === searchQuery);
      if (foundGame) {
        setGame(foundGame);
        setIsEditMode(true);
        toast.info("Game loaded for editing.");
      } else {
        toast.error("Game not found!");
      }
    } catch (err) {
      console.error("Failed to search game:", err);
      toast.error("Failed to search game. Please try again.");
    }
  };

  const resetForm = () => {
    setGame(defaultGame);
    setIsEditMode(false);
    setSearchQuery("");
  };

  return (
    <div className="p-6 bg-darkBg text-white min-h-screen">
      <ToastContainer />
      <h1 className="text-3xl font-pixel text-neon mb-6 text-center">
        Admin Panel
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={resetForm} className="bg-pixelBlue px-4 py-2 rounded">
          Add Game
        </button>
        <button
          onClick={() => setIsEditMode(true)}
          className="bg-pixelRed px-4 py-2 rounded"
        >
          Edit Game
        </button>
      </div>

      {isEditMode && (
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded bg-cardGrey text-white"
          />
          <button
            onClick={handleSearch}
            className="mt-2 bg-neon px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-cardGrey p-6 rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "banner_image",
            "id",
            "imagevid",
            "language",
            "name",
            "original_size",
            "repack_size",
            "version",
          ].map((field) => (
            <div key={field}>
              <label>{field.replace("_", " ").toUpperCase()}</label>
              <input
                type="text"
                name={field}
                value={game[field]}
                onChange={handleChange}
                className="p-2 w-full rounded bg-darkBg text-white"
              />
            </div>
          ))}

          {["companies", "images", "includes", "tags"].map((field) => (
            <div key={field}>
              <label>{field.toUpperCase()} (comma separated)</label>
              <textarea
                value={game[field].join(",")}
                onChange={(e) => handleArrayChange(e, field)}
                className="p-2 w-full rounded bg-darkBg text-white"
              />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <label>Repack Details Title</label>
          <input
            type="text"
            value={game.repack_details.title}
            onChange={(e) =>
              setGame((prev) => ({
                ...prev,
                repack_details: {
                  ...prev.repack_details,
                  title: e.target.value,
                },
              }))
            }
            className="w-full p-2 rounded bg-darkBg text-white"
          />
        </div>

        <div className="mt-4">
          <label>Repack Features (newline-separated)</label>
          <textarea
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
            className="w-full p-2 rounded bg-darkBg text-white"
          />
        </div>

        <div className="mt-4">
          <label>Game Description</label>
          <textarea
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
            className="w-full p-2 rounded bg-darkBg text-white"
          />
        </div>

        <div className="mt-4">
          <label>No Return Mode</label>
          <textarea
            value={game.game_details.no_return_mode}
            onChange={(e) =>
              setGame((prev) => ({
                ...prev,
                game_details: {
                  ...prev.game_details,
                  no_return_mode: e.target.value,
                },
              }))
            }
            className="w-full p-2 rounded bg-darkBg text-white"
          />
        </div>

        <div className="mt-4">
          <label>Game Features (newline-separated)</label>
          <textarea
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
            className="w-full p-2 rounded bg-darkBg text-white"
          />
        </div>

        <div className="mt-4">
          <label>Direct Links (JSON Array)</label>
          <textarea
            value={JSON.stringify(game.download_links.direct_links, null, 2)}
            onChange={(e) =>
              handleNestedArrayChange(e, "download_links", "direct_links")
            }
            className="w-full p-2 rounded bg-darkBg text-white"
          />
        </div>

        <div className="mt-4">
          <label>Download Torrent (JSON Array)</label>
          <textarea
            value={JSON.stringify(game.download_links.torrent, null, 2)}
            onChange={(e) =>
              handleNestedArrayChange(e, "download_links", "torrent")
            }
            className="w-full p-2 rounded bg-darkBg text-white"
          />
        </div>

        <div className="mt-6">
          <button type="submit" className="bg-neon px-6 py-3 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;