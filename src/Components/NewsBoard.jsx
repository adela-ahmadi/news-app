import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import NewsSkeleton from "./NewsSkeleton";
import "../App.css";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  return (
    <div className='container my-4'>
      <h2 className='text-center mb-4'>
        Latest <span className='badge bg-danger'>News</span>
      </h2>

      {loading && <p className='text-center text-muted'>Loading news...</p>}
      {!loading && articles.length === 0 && (
        <p className='text-center text-muted'>
          No news available for this category.
        </p>
      )}
      <div className='row g-4'>
        {loading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div className='col-md-4 col-lg-3' key={i}>
              <NewsSkeleton />
            </div>
          ))}

        {!loading &&
          articles.map((news) => (
            <div className='col-md-4 col-lg-3' key={news.url}>
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsBoard;
