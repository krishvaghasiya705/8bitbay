const API_KEY = "14d26ac1f9db405eb11200fdfc9730aa";
const BASE_URL = "https://api.rawg.io/api";

export const fetchGames = async (search = "", page = 1) => {
  const res = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&search=${search}&page=${page}&page_size=20`
  );
  const data = await res.json();
  return data.results;
};

export const fetchGameDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  return await res.json();
};
