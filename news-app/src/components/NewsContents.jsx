"use client";
import { useEffect, useState } from "react";
import "../app/homepage.modules.css";

const NewsContents = ({ keywordFilter, dateFilter }) => {
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

        // Log the fetched data to the console
        console.log("Fetched data:", data);

        let filteredNews = data.articles;

        // Filter news by keyword
        if (keywordFilter.keyword) {
          filteredNews = filteredNews.map((article) => {
            const words = article.title.split(" ");
            const highlightedTitle = words.map((word) => (word.toLowerCase() === keywordFilter.keyword.toLowerCase() ? `<span class="highlight">${word}</span>` : word)).join(" ");
            return { ...article, highlightedTitle };
          });
        }

        setNews(filteredNews);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [keywordFilter]);

  const getRandomImage = () => {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
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
          {news.length === 0 ? (
            <p>News not found.</p>
          ) : (
            <div className="news-inner-container">
              {news.map((article, index) => (
                <div key={index} className="news-item">
                  <img src={article.urlToImage || getRandomImage()} alt="News Image" />
                  <div className="news-details">
                    <h2
                      className="news-title"
                      dangerouslySetInnerHTML={{ __html: article.highlightedTitle || article.title }}
                    />
                    <p className="news-author">Author: {article.author}</p>
                    <p className="news-description">{article.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsContents;
