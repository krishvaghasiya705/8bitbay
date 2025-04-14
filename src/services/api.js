const BIN_ID = "67fc99eb8960c979a584997d";
const API_KEY = "$2a$10$geENos2etxSFaC9fGt2dX.vgNms2JS5eyjprJ2buoQW1XwBBFcoJO";
const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;

export const fetchGames = async () => {
  const res = await fetch(API_URL, {
    headers: {
      "X-Master-Key": API_KEY,
    },
  });
  const data = await res.json();
  return data.record; // Assuming the games array is stored in `record`
};

export const fetchGameDetails = async (id) => {
  const games = await fetchGames();
  return games.find((game) => game.id === id);
};
