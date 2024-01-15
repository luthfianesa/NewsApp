"use client";
import { useEffect, useState } from "react";
import "../app/homepage.modules.css";

const NewsContents = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/everything?q=Apple&page=1&pageSize=9&apiKey=3341deda0b2147ef8c8c1702d56241b6");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getRandomImage = () => {
    const randomImageId = Math.floor(Math.random() * 1000) + 1; // You can adjust the range as needed
    return `https://picsum.photos/150/150?random=${randomImageId}`;
  };

  return (
    <div className="news-container">
      {isLoading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p>Error fetching news: {error.message}</p>
      ) : (
        <div className="news-outer-container">
          <div className="news-inner-container">
            {news.map((article, index) => (
              <div key={index} className="news-item">
                <img src={article.urlToImage || getRandomImage()} alt="News Image" />
                <div className="news-details">
                  <h2 className="news-title">{article.title}</h2>
                  <p className="news-author">Author: {article.author}</p>
                  <p className="news-description">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsContents;
