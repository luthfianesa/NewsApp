import React from 'react';

const NewsModal = ({ article, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img src={article.urlToImage || getRandomImage()} alt="News Image" />
        <h2>{article.title}</h2>
        <p>Author: {article.author}</p>
        <p>Date: {formatDate(article.publishedAt)}</p>
        <p>{article.description}</p>
        {/* Additional content/details */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
  return formattedDate;
};

export default NewsModal;
