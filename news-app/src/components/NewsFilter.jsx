const NewsFilter = () => {
  return (
    <div id="filter-container">
      <input type="text" id="keyword-input" placeholder="Keyword" />
      <input type="date" id="date-input" />
      <button id="filter-btn">
        Filter
      </button>
    </div>
  );
};

export default NewsFilter;
