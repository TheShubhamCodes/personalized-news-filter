# 📰 Personalized News Filter

A modern news filtering web application that allows users to search and view news based on category, country, and keywords.

## 🚀 Features

- Search news by keyword
- Filter news by category
- Filter news by country
- Real-time news fetching using NewsAPI
- Modern responsive UI
- Separate frontend and backend structure
- API key secured using backend `.env`

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- CSS
- Axios

### Backend
- Node.js
- Express.js
- Axios
- CORS
- Dotenv

### API
- NewsAPI

## 📁 Project Structure

```txt
Personalized News Filter/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Filters.jsx
│   │   │   ├── NewsCard.jsx
│   │   │   └── NewsList.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── App.css
│
├── README.md
└── .gitignore
