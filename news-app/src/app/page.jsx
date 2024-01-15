"use client";
import { useState } from "react";
import Header from "@/components/Header";
import NewsFilter from "@/components/NewsFilter";
import NewsContents from "@/components/NewsContents";

export default function Home() {
  const [keywordFilter, setKeywordFilter] = useState({});
  const [dateFilter, setDateFilter] = useState({});

  const handleFilter = (newFilter) => {
    if (newFilter.keyword) {
      setKeywordFilter(newFilter);
      setDateFilter({});
    } else if (newFilter.date) {
      setDateFilter(newFilter);
      setKeywordFilter({});
    }
  };

  return (
    <main className="homepage">
      <Header></Header>
      <NewsFilter onFilter={handleFilter} />
      <NewsContents keywordFilter={keywordFilter} dateFilter={dateFilter} />
    </main>
  );
}
