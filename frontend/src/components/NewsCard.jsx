function NewsCard({ article }) {
  return (
    <div className="news-card">
      <img
        src={article.urlToImage || "https://via.placeholder.com/300"}
        alt="news"
      />

      <div className="news-content">
        <h3>{article.title}</h3>
        <p>{article.description || "No description available"}</p>

        <p className="source">
          Source: {article.source?.name || "Unknown"}
        </p>

        <a href={article.url} target="_blank" rel="noreferrer">
          Read More →
        </a>
      </div>
    </div>
  );
}

export default NewsCard;