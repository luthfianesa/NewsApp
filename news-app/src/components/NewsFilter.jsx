"use client";
import { useState} from "react";

const NewsFilter = ({ onFilter }) => {
  const [keyword, setKeyword] = useState("");

  const handleFilter = () => {
    onFilter({ keyword });
  };

  return (
    <div id="filter-container">
      <input type="text" id="keyword-input" placeholder="Type Here.." value={keyword} onChange={(e) => setKeyword(e.target.value)} />

      <button id="filter-btn" onClick={handleFilter}>
        Search News
      </button>
    </div>
  );
};

export default NewsFilter;
