"use client";
import { useState } from "react";

const NewsFilter = ({ onFilter }) => {
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState("");

  const handleFilter = () => {
    onFilter({ keyword, date });
  };

  return (
    <div id="filter-container">
      <input type="text" id="keyword-input" placeholder="Type Here.." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <input type="date" id="date-input" value={date} onChange={(e) => setDate(e.target.value)} />
      <button id="filter-btn" onClick={handleFilter}>
        Search News
      </button>
    </div>
  );
};

export default NewsFilter;
