const BIN_ID = "67fc99eb8960c979a584997d";
const API_KEY = "$2a$10$geENos2etxSFaC9fGt2dX.vgNms2JS5eyjprJ2buoQW1XwBBFcoJO";
const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;

export const fetchGames = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }
    const json = await response.json();
    return Array.isArray(json.record.record) ? json.record.record : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchGameDetails = async (id) => {
  const games = await fetchGames();
  return games.find((game) => game.id === id);
};
