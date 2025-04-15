import axios from "axios";

const API_BASE_URL = "https://eightbitbay-api.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10s timeout
});

// === Game APIs ===

// GET all games
export const getAllGames = async () => {
  const response = await api.get("/games");
  return response.data;
};

// POST new game
export const addGame = async (newGame) => {
  const response = await api.post("/games", newGame);
  return response.data;
};

// UPDATE a game
export const updateGame = async (id, updatedGame) => {
  const response = await api.put(`/games/${id}`, updatedGame);
  return response.data;
};

// DELETE a game
export const deleteGame = async (id) => {
  const response = await api.delete(`/games/${id}`);
  return response.data;
};
