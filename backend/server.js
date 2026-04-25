const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/api/news", async (req, res) => {
  try {
    const { category, country, search } = req.query;

    let url;

    if (search && search.trim() !== "") {
      url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${country || "in"}&category=${category || "technology"}&apiKey=${process.env.NEWS_API_KEY}`;
    }

    const response = await axios.get(url);

    res.json({
      success: true,
      articles: response.data.articles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch news",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});