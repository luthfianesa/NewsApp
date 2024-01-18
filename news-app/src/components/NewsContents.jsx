"use client";
// require("dotenv").config({ path: "../../../../.env" });
import { useEffect, useState } from "react";
import "../app/homepage.modules.css";
import NewsModal from "./NewsModal";

const NewsContents = ({ keywordFilter, dateFilter }) => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const apiKey = "3341deda0b2147ef8c8c1702d56241b6";
  //

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(dateFilter);
        // Construct the API URL with both keyword, date, and page query parameters
        const apiUrl = `https://newsapi.org/v2/everything?q=${keywordFilter.keyword}&pageSize=10&page=${page}&apiKey=${apiKey}${dateFilter.dateStart ? `&from=${dateFilter.dateStart} ` : ""}${
          dateFilter.dateEnd ? `&to=${dateFilter.dateEnd}` : ""
        }`;

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

  // Get online random image when the news has no Image
  const getRandomImage = () => {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/150/150?random=${randomImageId}`;
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleNewsClick = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };
  // Formatting date to
  const formatDate = (dateString) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="news-container">
      {isLoading ? (
        <p className="loading-news">Loading news...</p>
      ) : error ? (
        <p className="erorr-news">Error fetching news: {error.message}</p>
      ) : (
        <>
          <div className="news-outer-container">
            {news.length === 0 ? (
              <p>News not found.</p>
            ) : (
              <div className="news-inner-container">
                {news.map((article, index) => (
                  <div key={index} className="news-item" onClick={() => handleNewsClick(article)}>
                    <div className="img-container">
                      <img src={article.urlToImage || getRandomImage()} alt="News Image" />
                    </div>
                    <div className="news-details">
                      <h2
                        className="news-title"
                        dangerouslySetInnerHTML={{
                          __html: article.title,
                        }}
                      />
                      <p className="news-author">Author: {article.author}</p>
                      <p className="news-date">Date: {formatDate(article.publishedAt)}</p>
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
      {selectedArticle && <NewsModal article={selectedArticle} onClose={closeModal} />}
    </div>
  );
};

export default NewsContents;
