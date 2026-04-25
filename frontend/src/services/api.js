import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchNews = async ({ category, country, search }) => {
  const res = await API.get("/news", {
    params: { category, country, search },
  });
  return res.data;
};