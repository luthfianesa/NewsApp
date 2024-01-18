"use client";
import { useState } from "react";

const NewsFilter = ({ onFilter }) => {
  const [keyword, setKeyword] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  

  // Passing the keyword and date to the parent component
  const handleFilter = () => {
    onFilter({ keyword, dateStart, dateEnd });
  };

  return (
    <div id="filter-container">
      <input type="text" id="keyword-input" placeholder="Type Here.." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <input type="date" id="date-input" value={dateStart} onChange={(e) => setDateStart(e.target.value)} />
      <input type="date" id="date-input" value={dateEnd} onChange={(e) => setDateEnd(e.target.value)} />
      <button id="filter-btn" onClick={handleFilter}>
        Search News
      </button>
    </div>
  );
};

export default NewsFilter;
