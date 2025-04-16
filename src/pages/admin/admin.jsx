import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Admin = () => {
  const [formData, setFormData] = useState({
    banner_image: "",
    companies: [""],
    download_links: {
      direct_links: [{ link: "", link_name: "", text: "" }],
      torrent: [{ link: "", link_name: "", text: "" }],
    },
    game_details: {
      description: "",
      features: [""],
      no_return_mode: "",
    },
    id: "",
    imagevid: "",
    images: [""],
    includes: [""],
    language: "",
    name: "",
    original_size: "",
    repack_details: {
      features: [""],
      title: "",
    },
    repack_size: "",
    tags: [""],
    version: "",
  });

  const [previewJSON, setPreviewJSON] = useState(null);

  const handleChange = (e, path) => {
    const keys = path.split(".");
    const updatedFormData = { ...formData };
    let current = updatedFormData;

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        current[key] = e.target.value;
      } else {
        current = current[key];
      }
    });

    setFormData(updatedFormData);
  };

  const handleArrayChange = (e, path, index) => {
    const keys = path.split(".");
    const updatedFormData = { ...formData };
    let current = updatedFormData;

    // Traverse the path to the correct array or object
    keys.forEach((key, idx) => {
      if (idx === keys.length - 1) {
        // Ensure the array exists at the index
        if (!current[index]) {
          current[index] = {}; // Initialize the object if it doesn't exist
        }
        current[index][key] = e.target.value; // Update the specific field
      } else {
        if (!current[key]) {
          current[key] = Array.isArray(current) ? [] : {}; // Create an object or array if it doesn't exist
        }
        current = current[key];
      }
    });

    setFormData(updatedFormData);
  };

  const handleAddField = (path) => {
    const keys = path.split(".");
    const updatedFormData = { ...formData };
    let current = updatedFormData;

    keys.forEach((key, idx) => {
      if (idx === keys.length - 1) {
        current[key].push("");
      } else {
        current = current[key];
      }
    });

    setFormData(updatedFormData);
  };

  const handleRemoveField = (path, index) => {
    const keys = path.split(".");
    const updatedFormData = { ...formData };
    let current = updatedFormData;

    keys.forEach((key, idx) => {
      if (idx === keys.length - 1) {
        current[key] = current[key].filter((_, i) => i !== index); // Remove the item
      } else {
        current = current[key];
      }
    });

    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    setPreviewJSON(JSON.stringify(formData, null, 2));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(previewJSON);
    alert("JSON copied to clipboard!");
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white font-mono">
      <h1 className="text-4xl font-bold text-center text-neon-blue mb-6">
        🎮 Admin Panel - Gaming Style 🎮
      </h1>
      <div className="space-y-8">
        {/* Banner Image */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-green">
            Banner Image
          </h2>
          <input
            type="text"
            value={formData.banner_image}
            onChange={(e) => handleChange(e, "banner_image")}
            className="w-full p-2 mt-2 bg-gray-700 text-white border border-neon-green rounded"
            placeholder="Enter banner image URL"
          />
        </div>

        {/* Companies */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-yellow">Companies</h2>
          {formData.companies.map((company, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                value={company}
                onChange={(e) => handleArrayChange(e, "companies", index)}
                className="w-full p-2 bg-gray-700 text-white border border-neon-yellow rounded"
                placeholder="Enter company details"
              />
              <button
                type="button"
                onClick={() => handleAddField("companies")}
                className="bg-neon-red text-white px-4 py-2 rounded-lg shadow-md hover:bg-neon-red-dark transition duration-200"
              >
                Add
              </button>
            </div>
          ))}
        </div>

        {/* Download Links */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-blue">Direct Links</h2>
          {formData.download_links.direct_links.map((link, index) => (
            <div key={index} className="space-y-2 mt-2">
              <input
                type="text"
                placeholder="Link"
                value={link.link}
                onChange={(e) =>
                  handleArrayChange(
                    e,
                    `download_links.direct_links.${index}.link`,
                    index
                  )
                }
                className="w-full p-2 bg-gray-700 text-white border border-neon-blue rounded"
              />
              <input
                type="text"
                placeholder="Link Name"
                value={link.link_name}
                onChange={(e) =>
                  handleArrayChange(
                    e,
                    "download_links.direct_links.link_name",
                    index
                  )
                }
                className="w-full p-2 bg-gray-700 text-white border border-neon-blue rounded"
              />
              <input
                type="text"
                placeholder="Text"
                value={link.text}
                onChange={(e) =>
                  handleArrayChange(
                    e,
                    "download_links.direct_links.text",
                    index
                  )
                }
                className="w-full p-2 bg-gray-700 text-white border border-neon-blue rounded"
              />
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => handleAddField("download_links.direct_links")}
                  className="bg-neon-red text-white px-4 py-2 rounded-lg shadow-md hover:bg-neon-red-dark transition duration-200"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveField("download_links.direct_links", index)
                  }
                  className="bg-neon-gray text-white px-4 py-2 rounded-lg shadow-md hover:bg-neon-gray-dark transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Torrent Links */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-blue">
            Torrent Links
          </h2>
          {formData.download_links.torrent.map((link, index) => (
            <div key={index} className="space-y-2 mt-2">
              <input
                type="text"
                placeholder="Link"
                value={link.link}
                onChange={(e) =>
                  handleArrayChange(
                    e,
                    `download_links.torrent.${index}.link`,
                    index
                  )
                }
                className="w-full p-2 bg-gray-700 text-white border border-neon-blue rounded"
              />
              <input
                type="text"
                placeholder="Link Name"
                value={link.link_name}
                onChange={(e) =>
                  handleArrayChange(
                    e,
                    "download_links.torrent.link_name",
                    index
                  )
                }
                className="w-full p-2 bg-gray-700 text-white border border-neon-blue rounded"
              />
              <input
                type="text"
                placeholder="Text"
                value={link.text}
                onChange={(e) =>
                  handleArrayChange(e, "download_links.torrent.text", index)
                }
                className="w-full p-2 bg-gray-700 text-white border border-neon-blue rounded"
              />
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => handleAddField("download_links.torrent")}
                  className="bg-neon-red text-white px-4 py-2 rounded-lg shadow-md hover:bg-neon-red-dark transition duration-200"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveField("download_links.torrent", index)
                  }
                  className="bg-neon-gray text-white px-4 py-2 rounded-lg shadow-md hover:bg-neon-gray-dark transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Game Details */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-red">Game Details</h2>
          <div>
            <label className="block text-neon-red">Description</label>
            <textarea
              value={formData.game_details.description}
              onChange={(e) => handleChange(e, "game_details.description")}
              className="w-full p-2 bg-gray-700 text-white border border-neon-red rounded mt-2"
              placeholder="Enter game description"
            />
          </div>
          {/* Game Details - Features */}
          <div className="mt-4">
            <label className="block text-neon-red">Features</label>
            <textarea
              value={formData.game_details.features.join("\n")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  game_details: {
                    ...formData.game_details,
                    features: e.target.value.split("\n"),
                  },
                })
              }
              className="w-full p-3 bg-gray-800 text-white border border-neon-red rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-red transition duration-200"
              placeholder="Enter features (one per line)"
              rows="5"
            />
          </div>
        </div>

        {/* Game Details - No Return Mode */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-red">
            No Return Mode
          </h2>
          <input
            type="text"
            value={formData.game_details.no_return_mode}
            onChange={(e) => handleChange(e, "game_details.no_return_mode")}
            className="w-full p-2 bg-gray-700 text-white border border-neon-red rounded mt-2"
            placeholder="Enter no return mode"
          />
        </div>

        {/* Repack Details */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-purple">
            Repack Details
          </h2>
          <div>
            <label className="block text-neon-purple">Title</label>
            <input
              type="text"
              value={formData.repack_details.title}
              onChange={(e) => handleChange(e, "repack_details.title")}
              className="w-full p-2 bg-gray-700 text-white border border-neon-purple rounded mt-2"
              placeholder="Enter repack title"
            />
          </div>
          <div className="mt-4">
            <label className="block text-neon-purple">Features</label>
            <textarea
              value={formData.repack_details.features.join("\n")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  repack_details: {
                    ...formData.repack_details,
                    features: e.target.value.split("\n"),
                  },
                })
              }
              className="w-full p-3 bg-gray-800 text-white border border-neon-purple rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple transition duration-200"
              placeholder="Enter features (one per line)"
              rows="5"
            />
          </div>
        </div>

        {/* ID */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-yellow">ID</h2>
          <input
            type="text"
            value={formData.id}
            onChange={(e) => handleChange(e, "id")}
            className="w-full p-2 bg-gray-700 text-white border border-neon-yellow rounded mt-2"
            placeholder="Enter ID"
          />
        </div>

        {/* Image/Video */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-green">Image/Video</h2>
          <input
            type="text"
            value={formData.imagevid}
            onChange={(e) => handleChange(e, "imagevid")}
            className="w-full p-2 bg-gray-700 text-white border border-neon-green rounded mt-2"
            placeholder="Enter image/video URL"
          />
        </div>

        {/* Images */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-blue">Images</h2>
          {formData.images.map((image, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                value={image}
                onChange={(e) => handleArrayChange(e, "images", index)}
                className="w-full p-2 bg-gray-700 text-white border border-neon-blue rounded"
                placeholder="Enter image URL"
              />
              <button
                type="button"
                onClick={() => handleAddField("images")}
                className="bg-neon-red text-white px-4 py-2 rounded-lg shadow-md hover:bg-neon-red-dark transition duration-200"
              >
                Add
              </button>
            </div>
          ))}
        </div>

        {/* Includes */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-orange">Includes</h2>
          {formData.includes.map((include, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                value={include}
                onChange={(e) => handleArrayChange(e, "includes", index)}
                className="w-full p-2 bg-gray-700 text-white border border-neon-orange rounded"
                placeholder="Enter include details"
              />
              <button
                type="button"
                onClick={() => handleAddField("includes")}
                className="bg-neon-red text-white px-4 py-2 rounded-lg shadow-md hover:bg-neon-red-dark transition duration-200"
              >
                Add
              </button>
            </div>
          ))}
        </div>

        {/* Language */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-pink">Language</h2>
          <input
            type="text"
            value={formData.language}
            onChange={(e) => handleChange(e, "language")}
            className="w-full p-2 bg-gray-700 text-white border border-neon-pink rounded mt-2"
            placeholder="Enter language"
          />
        </div>

        {/* Name */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-cyan">Name</h2>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
            className="w-full p-2 bg-gray-700 text-white border border-neon-cyan rounded mt-2"
            placeholder="Enter name"
          />
        </div>

        {/* Original Size */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-lime">
            Original Size
          </h2>
          <input
            type="text"
            value={formData.original_size}
            onChange={(e) => handleChange(e, "original_size")}
            className="w-full p-2 bg-gray-700 text-white border border-neon-lime rounded mt-2"
            placeholder="Enter original size"
          />
        </div>

        {/* Repack Size */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-teal">Repack Size</h2>
          <input
            type="text"
            value={formData.repack_size}
            onChange={(e) => handleChange(e, "repack_size")}
            className="w-full p-2 bg-gray-700 text-white border border-neon-teal rounded mt-2"
            placeholder="Enter repack size"
          />
        </div>

        {/* Tags */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-indigo">Tags</h2>
          {formData.tags.map((tag, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                value={tag}
                onChange={(e) => handleArrayChange(e, "tags", index)}
                className="w-full p-2 bg-gray-700 text-white border border-neon-indigo rounded"
                placeholder="Enter tag"
              />
              <button
                type="button"
                onClick={() => handleAddField("tags")}
                className="bg-neon-red text-white px-4 py-2 rounded-lg shadow-md hover:bg-neon-red-dark transition duration-200"
              >
                Add
              </button>
            </div>
          ))}
        </div>

        {/* Version */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-neon-gold">Version</h2>
          <input
            type="text"
            value={formData.version}
            onChange={(e) => handleChange(e, "version")}
            className="w-full p-2 bg-gray-700 text-white border border-neon-gold rounded mt-2"
            placeholder="Enter version"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-neon-red-dark transition duration-200"
          >
            Submit
          </button>
        </div>

        {/* JSON Preview */}
        {previewJSON && (
          <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-8">
            <h2 className="text-xl font-semibold text-neon-green">
              Preview JSON
            </h2>
            <pre className="bg-gray-700 p-4 rounded text-white overflow-auto">
              {previewJSON}
            </pre>
            <button
              onClick={handleCopy}
              className="flex items-center bg-neon-blue text-white px-4 py-2 rounded-lg shadow-md hover:bg-neon-blue-dark transition duration-200 mt-4"
            >
              <FaCopy className="mr-2" /> Copy JSON
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
