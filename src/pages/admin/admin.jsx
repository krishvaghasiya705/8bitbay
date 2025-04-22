import React, { useState } from "react";
import { FaCopy, FaGamepad, FaSave, FaTrash, FaPlus } from "react-icons/fa";

const ImagePreview = ({ url, alt }) => {
  if (!url) return null;

  return (
    <div className="relative group aspect-video">
      <img
        src={url}
        alt={alt}
        className="w-full h-full object-cover rounded border border-pixelBlue"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/400x200?text=Image+Not+Found";
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-pixelBlue px-3 py-1 rounded"
        >
          View Full Size
        </a>
      </div>
    </div>
  );
};

const Admin = () => {
  const generatedIds = new Set();
  const generateUniqueId = () => {
    let id;
    do {
      id = Math.floor(100000 + Math.random() * 900000);
    } while (generatedIds.has(id));
    generatedIds.add(id);
    return id.toString();
  };

  const [formData, setFormData] = useState({
    banner_image: "",
    companies: [""],
    download_links: {
      direct_links: [
        { 
          link: "", 
          link_name: "Filehoster: DataNodes", 
          text: "(speed & usability use IDM)" 
        },
        { 
          link: "", 
          link_name: "Filehoster: FuckingFast", 
          text: "(REALLY Fucking Fast 🙂)" 
        },
        { 
          link: "", 
          link_name: "Filehoster: MultiUpload", 
          text: "(10+ hosters, interchangeable use JDownloader2)" 
        }
      ],
      torrent: [
        { 
          link: "", 
          link_name: "Filehoster: Torrent file only", 
          text: "(speed & usability use Utorrent)" 
        }
      ],
    },
    game_details: {
      description: "",
      features: [""],
      no_return_mode: "",
    },
    id: generateUniqueId(),
    imagevid: "",
    images: [""],
    includes: ["DLC", "Bonus OST"],
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
    const updatedFormData = { ...formData };
    const keys = path.split(".");
    let current = updatedFormData;

    keys.forEach((key, idx) => {
      if (idx === keys.length - 1) {
        current[key][index] = e.target.value;
      } else {
        current = current[key];
      }
    });

    setFormData(updatedFormData);
  };

  // Fix for handleNestedArrayChange
  const handleNestedArrayChange = (e, path, index, field) => {
    const keys = path.split(".");
    const updatedFormData = { ...formData };
    let current = updatedFormData;

    keys.forEach((key) => {
      current = current[key];
    });

    if (Array.isArray(current)) {
      current[index][field] = e.target.value; // Update the specific field in the nested array
    }

    setFormData(updatedFormData);
  };

  // Fix for handleAddField
  const handleAddField = (path) => {
    const keys = path.split(".");
    const updatedFormData = { ...formData };
    let current = updatedFormData;

    keys.forEach((key, idx) => {
      if (idx === keys.length - 1) {
        if (Array.isArray(current[key])) {
          if (path === "images" || path === "tags" || path === "companies" || path === "includes") {
            current[key].push(""); // Add empty string for simple arrays
          } else if (path.includes("download_links")) {
            current[key].push({ link: "", link_name: "", text: "" }); // Add empty object for download links
          } else {
            current[key].push({}); // Add empty object for other nested arrays
          }
        } else {
          current[key] = ""; // Add an empty string for non-array fields
        }
      } else {
        current = current[key];
      }
    });

    setFormData(updatedFormData);
  };

  // Fix for handleRemoveField
  const handleRemoveField = (path, index) => {
    const keys = path.split(".");
    const updatedFormData = { ...formData };
    let current = updatedFormData;

    keys.forEach((key, idx) => {
      if (idx === keys.length - 1) {
        if (Array.isArray(current[key])) {
          current[key].splice(index, 1); // Remove the item at the specified index
        }
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
    <div className="min-h-screen bg-darkBg text-white font-pixel">
      {/* Header */}
      <div className="bg-cardDark border-b border-pixelBlue">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl text-neon text-center">8BitBay Admin</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-cardGrey p-4 rounded-lg">
              <h2 className="text-xl text-pixelBlue mb-4">Basic Info</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-pixelRed mb-1">ID</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.id}
                      onChange={(e) => handleChange(e, "id")}
                      className="flex-1 p-2 bg-darkBg text-white border border-pixelRed rounded"
                      placeholder="Enter game ID"
                    />
                    <button
                      onClick={() => {
                        const newId = generateUniqueId();
                        setFormData({ ...formData, id: newId });
                      }}
                      className="bg-pixelRed text-white px-4 py-2 rounded flex items-center hover:bg-red-600 transition-colors"
                    >
                      Generate
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-pixelYellow mb-1">
                    Game Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange(e, "name")}
                    className="w-full p-2 bg-darkBg text-white border border-pixelBlue rounded"
                    placeholder="Enter game name"
                  />
                </div>
                <div>
                  <label className="block text-pixelGreen mb-1">Version</label>
                  <input
                    type="text"
                    value={formData.version}
                    onChange={(e) => handleChange(e, "version")}
                    className="w-full p-2 bg-darkBg text-white border border-pixelGreen rounded"
                    placeholder="Enter version"
                  />
                </div>
                <div>
                  <label className="block text-pixelPurple mb-1">
                    Language
                  </label>
                  <input
                    type="text"
                    value={formData.language}
                    onChange={(e) => handleChange(e, "language")}
                    className="w-full p-2 bg-darkBg text-white border border-pixelPurple rounded"
                    placeholder="Enter language"
                  />
                </div>
              </div>
            </div>

            {/* Media */}
            <div className="bg-cardGrey p-4 rounded-lg">
              <h2 className="text-xl text-pixelPurple mb-4">Media</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-pixelYellow mb-1">
                    Banner Image
                  </label>
                  <input
                    type="text"
                    value={formData.banner_image}
                    onChange={(e) => handleChange(e, "banner_image")}
                    className="w-full p-2 bg-darkBg text-white border border-pixelYellow rounded"
                    placeholder="Enter banner image URL"
                  />
                  <div className="mt-2">
                    <ImagePreview
                      url={formData.banner_image}
                      alt="Banner Preview"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-pixelOrange mb-1">
                    Game Image/Video
                  </label>
                  <input
                    type="text"
                    value={formData.imagevid}
                    onChange={(e) => handleChange(e, "imagevid")}
                    className="w-full p-2 bg-darkBg text-white border border-pixelOrange rounded"
                    placeholder="Enter image/video URL"
                  />
                  <div className="mt-2">
                    <ImagePreview
                      url={formData.imagevid}
                      alt="Game Image/Video Preview"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-pixelBlue mb-1">
                    Additional Images
                  </label>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      {formData.images.map((image, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            value={image}
                            onChange={(e) => handleArrayChange(e, "images", index)}
                            className="flex-1 p-2 bg-darkBg text-white border border-pixelBlue rounded"
                            placeholder="Enter image URL"
                          />
                          <button
                            onClick={() => handleRemoveField("images", index)}
                            className="bg-pixelRed text-white px-3 py-1 rounded flex items-center"
                          >
                            <FaTrash className="mr-1" /> Remove
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => handleAddField("images")}
                        className="bg-pixelBlue text-white px-3 py-1 rounded flex items-center"
                      >
                        <FaPlus className="mr-1" /> Add Image
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {formData.images.map((image, index) => (
                        image && (
                          <div key={index} className="relative group aspect-video">
                            <img 
                              src={image} 
                              alt={`Additional Image ${index + 1}`}
                              className="w-full h-full object-cover rounded border border-pixelBlue"
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/400x200?text=Image+Not+Found";
                              }}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                              <a 
                                href={image} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white bg-pixelBlue px-3 py-1 rounded"
                              >
                                View Full Size
                              </a>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Details */}
            <div className="bg-cardGrey p-4 rounded-lg">
              <h2 className="text-xl text-pixelGreen mb-4">Game Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-pixelYellow mb-1">
                    Description
                  </label>
                  <textarea
                    value={formData.game_details.description}
                    onChange={(e) =>
                      handleChange(e, "game_details.description")
                    }
                    className="w-full p-2 bg-darkBg text-white border border-pixelYellow rounded resize-none"
                    rows="4"
                    placeholder="Enter game description"
                  />
                </div>
                <div>
                  <label className="block text-pixelPurple mb-1">
                    Features
                  </label>
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
                    className="w-full p-2 bg-darkBg text-white border border-pixelPurple rounded resize-none"
                    rows="4"
                    placeholder="Enter features (one per line)"
                  />
                </div>
                <div>
                  <label className="block text-pixelOrange mb-1">
                    No Return Mode
                  </label>
                  <input
                    type="text"
                    value={formData.game_details.no_return_mode}
                    onChange={(e) =>
                      handleChange(e, "game_details.no_return_mode")
                    }
                    className="w-full p-2 bg-darkBg text-white border border-pixelOrange rounded"
                    placeholder="Enter no return mode details"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Download Links */}
            <div className="bg-cardGrey p-4 rounded-lg">
              <h2 className="text-xl text-pixelRed mb-4">Download Links</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-pixelBlue mb-2">Direct Links</h3>
                  {formData.download_links.direct_links.map((link, index) => (
                    <div
                      key={index}
                      className="mb-4 p-3 bg-darkBg rounded border border-pixelBlue"
                    >
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Link"
                          value={link.link}
                          onChange={(e) =>
                            handleNestedArrayChange(
                              e,
                              "download_links.direct_links",
                              index,
                              "link"
                            )
                          }
                          className="w-full p-2 bg-cardGrey text-white border border-pixelBlue rounded"
                        />
                        <input
                          type="text"
                          placeholder="Link Name"
                          value={link.link_name}
                          onChange={(e) =>
                            handleNestedArrayChange(
                              e,
                              "download_links.direct_links",
                              index,
                              "link_name"
                            )
                          }
                          className="w-full p-2 bg-cardGrey text-white border border-pixelGreen rounded"
                        />
                        <input
                          type="text"
                          placeholder="Text"
                          value={link.text}
                          onChange={(e) =>
                            handleNestedArrayChange(
                              e,
                              "download_links.direct_links",
                              index,
                              "text"
                            )
                          }
                          className="w-full p-2 bg-cardGrey text-white border border-pixelPurple rounded"
                        />
                        <div className="flex justify-end">
                          <button
                            onClick={() =>
                              handleRemoveField(
                                "download_links.direct_links",
                                index
                              )
                            }
                            className="bg-pixelRed text-white px-3 py-1 rounded flex items-center"
                          >
                            <FaTrash className="mr-1" /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() =>
                      handleAddField("download_links.direct_links")
                    }
                    className="bg-pixelGreen text-white px-4 py-2 rounded flex items-center"
                  >
                    <FaPlus className="mr-2" /> Add Direct Link
                  </button>
                </div>

                <div>
                  <h3 className="text-lg text-pixelGreen mb-2">
                    Torrent Links
                  </h3>
                  {formData.download_links.torrent.map((link, index) => (
                    <div
                      key={index}
                      className="mb-4 p-3 bg-darkBg rounded border border-pixelGreen"
                    >
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Link"
                          value={link.link}
                          onChange={(e) =>
                            handleNestedArrayChange(
                              e,
                              "download_links.torrent",
                              index,
                              "link"
                            )
                          }
                          className="w-full p-2 bg-cardGrey text-white border border-pixelGreen rounded"
                        />
                        <input
                          type="text"
                          placeholder="Link Name"
                          value={link.link_name}
                          onChange={(e) =>
                            handleNestedArrayChange(
                              e,
                              "download_links.torrent",
                              index,
                              "link_name"
                            )
                          }
                          className="w-full p-2 bg-cardGrey text-white border border-pixelBlue rounded"
                        />
                        <input
                          type="text"
                          placeholder="Text"
                          value={link.text}
                          onChange={(e) =>
                            handleNestedArrayChange(
                              e,
                              "download_links.torrent",
                              index,
                              "text"
                            )
                          }
                          className="w-full p-2 bg-cardGrey text-white border border-pixelPurple rounded"
                        />
                        <div className="flex justify-end">
                          <button
                            onClick={() =>
                              handleRemoveField("download_links.torrent", index)
                            }
                            className="bg-pixelRed text-white px-3 py-1 rounded flex items-center"
                          >
                            <FaTrash className="mr-1" /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => handleAddField("download_links.torrent")}
                    className="bg-pixelGreen text-white px-4 py-2 rounded flex items-center"
                  >
                    <FaPlus className="mr-2" /> Add Torrent Link
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-cardGrey p-4 rounded-lg">
              <h2 className="text-xl text-pixelOrange mb-4">Additional Info</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-pixelBlue mb-1">
                    Original Size
                  </label>
                  <input
                    type="text"
                    value={formData.original_size}
                    onChange={(e) => handleChange(e, "original_size")}
                    className="w-full p-2 bg-darkBg text-white border border-pixelBlue rounded"
                    placeholder="Enter original size"
                  />
                </div>
                <div>
                  <label className="block text-pixelGreen mb-1">
                    Repack Size
                  </label>
                  <input
                    type="text"
                    value={formData.repack_size}
                    onChange={(e) => handleChange(e, "repack_size")}
                    className="w-full p-2 bg-darkBg text-white border border-pixelGreen rounded"
                    placeholder="Enter repack size"
                  />
                </div>
                <div>
                  <label className="block text-pixelPurple mb-1">
                    Companies
                  </label>
                  {formData.companies.map((company, index) => (
                    <div key={index} className="mb-2 flex gap-2">
                      <input
                        type="text"
                        value={company}
                        onChange={(e) =>
                          handleArrayChange(e, "companies", index)
                        }
                        className="flex-1 p-2 bg-darkBg text-white border border-pixelPurple rounded"
                        placeholder="Enter company name"
                      />
                      <button
                        onClick={() => handleRemoveField("companies", index)}
                        className="bg-pixelRed text-white px-3 py-1 rounded flex items-center"
                      >
                        <FaTrash className="mr-1" /> Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => handleAddField("companies")}
                    className="bg-pixelPurple text-white px-3 py-1 rounded flex items-center mt-2"
                  >
                    <FaPlus className="mr-1" /> Add Company
                  </button>
                </div>
                <div>
                  <label className="block text-pixelYellow mb-1">Tags</label>
                  {formData.tags.map((tag, index) => (
                    <div key={index} className="mb-2 flex gap-2">
                      <input
                        type="text"
                        value={tag}
                        onChange={(e) => handleArrayChange(e, "tags", index)}
                        className="flex-1 p-2 bg-darkBg text-white border border-pixelYellow rounded"
                        placeholder="Enter tag"
                      />
                      <button
                        onClick={() => handleRemoveField("tags", index)}
                        className="bg-pixelRed text-white px-3 py-1 rounded flex items-center"
                      >
                        <FaTrash className="mr-1" /> Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => handleAddField("tags")}
                    className="bg-pixelYellow text-white px-3 py-1 rounded flex items-center mt-2"
                  >
                    <FaPlus className="mr-1" /> Add Tag
                  </button>
                </div>
                <div>
                  <label className="block text-pixelRed mb-1">Includes</label>
                  {formData.includes.map((include, index) => (
                    <div key={index} className="mb-2 flex gap-2">
                      <input
                        type="text"
                        value={include}
                        onChange={(e) =>
                          handleArrayChange(e, "includes", index)
                        }
                        className="flex-1 p-2 bg-darkBg text-white border border-pixelRed rounded"
                        placeholder="Enter included item"
                      />
                      <button
                        onClick={() => handleRemoveField("includes", index)}
                        className="bg-pixelRed text-white px-3 py-1 rounded flex items-center"
                      >
                        <FaTrash className="mr-1" /> Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => handleAddField("includes")}
                    className="bg-pixelRed text-white px-3 py-1 rounded flex items-center mt-2"
                  >
                    <FaPlus className="mr-1" /> Add Include
                  </button>
                </div>
                <div>
                  <label className="block text-pixelBlue mb-1">
                    Repack Details
                  </label>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-pixelGreen mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        value={formData.repack_details.title}
                        onChange={(e) =>
                          handleChange(e, "repack_details.title")
                        }
                        className="w-full p-2 bg-darkBg text-white border border-pixelGreen rounded"
                        placeholder="Enter repack title"
                      />
                    </div>
                    <div>
                      <label className="block text-pixelPurple mb-1">
                        Features
                      </label>
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
                        className="w-full p-2 bg-darkBg text-white border border-pixelPurple rounded resize-none"
                        rows="4"
                        placeholder="Enter features (one per line)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            className="bg-pixelRed text-white px-8 py-3 rounded-lg text-lg hover:bg-red-600 transition-colors flex items-center mx-auto"
          >
            <FaSave className="mr-2" /> Generate JSON
          </button>
        </div>

        {/* JSON Preview */}
        {previewJSON && (
          <div className="mt-8 bg-cardGrey p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-neon">Preview JSON</h2>
              <button
                onClick={handleCopy}
                className="bg-pixelBlue text-white px-4 py-2 rounded flex items-center"
              >
                <FaCopy className="mr-2" /> Copy
              </button>
            </div>
            <pre className="bg-darkBg p-4 rounded overflow-auto max-h-96">
              {previewJSON}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
