const GAMES_DATA_URL =
  "https://raw.githubusercontent.com/krishvaghasiya705/8bitbay-api/main/data/games.json";

export const getAllGames = async () => {
  console.log("Fetching games...");
  const response = await fetch(GAMES_DATA_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch games data.");
  }
  const data = await response.json();
  console.log("Fetched games:", data);
  return Array.isArray(data.record) ? data.record : [];
};
