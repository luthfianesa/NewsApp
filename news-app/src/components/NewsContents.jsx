"use client";
import { useEffect, useState } from "react";
import "../app/homepage.modules.css";

const NewsContents = ({ keywordFilter, dateFilter }) => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the API URL with both keyword, date, and page query parameters
        const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keywordFilter.keyword)}&pageSize=10&page=${page}&apiKey=3341deda0b2147ef8c8c1702d56241b6${dateFilter.date ? `&from=${dateFilter.date}` : ""}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        // Log the fetched data to the console
        console.log("Fetched data:", data);

        setNews(data.articles);
        setTotalPages(Math.ceil(data.totalResults / 10)); // Assuming 10 items per page
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [keywordFilter, dateFilter, page]);

  const getRandomImage = () => {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/150/150?random=${randomImageId}`;
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const formatDate = (dateString) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="news-container">
      {isLoading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p>Error fetching news: {error.message}</p>
      ) : (
        <>
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
                        dangerouslySetInnerHTML={{
                          __html: article.title,
                        }}
                      />
                      <p className="news-author">
                        <span>Author:</span> {article.author}
                      </p>
                      <p className="news-date">
                        <span>Date:</span> {formatDate(article.publishedAt)}
                      </p>
                      <p className="news-description">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {totalPages > 1 && (
            <div className="pagination">
              {[...Array(Math.min(10, totalPages)).keys()].map((pageNum) => (
                <button key={pageNum + 1} onClick={() => handlePageChange(pageNum + 1)} className={pageNum + 1 === page ? "active" : ""}>
                  {pageNum + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsContents;
