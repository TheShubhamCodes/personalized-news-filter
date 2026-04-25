import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import NewsList from "../components/NewsList";
import { fetchNews } from "../services/api";

function Home() {
  const [category, setCategory] = useState("technology");
  const [country, setCountry] = useState("in");
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    try {
      setLoading(true);
      const data = await fetchNews({ category, country, search });
      setNews(data.articles || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <Filters
          category={category}
          setCategory={setCategory}
          country={country}
          setCountry={setCountry}
          search={search}
          setSearch={setSearch}
          onFetch={getNews}
        />

        {loading ? (
          <p className="loader">Loading...</p>
        ) : (
          <NewsList news={news} />
        )}
      </div>
    </>
  );
}

export default Home;