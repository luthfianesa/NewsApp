"use client";
import { useState } from "react";
import Header from "@/components/Header";
import NewsFilter from "@/components/NewsFilter";
import NewsContents from "@/components/NewsContents";

export default function Home() {
  const [keywordFilter, setKeywordFilter] = useState({});
  const [dateFilter, setDateFilter] = useState({});
  console.log(dateFilter);

  const handleFilter = (newFilter) => {
    console.log(newFilter);
    if (newFilter.keyword) {
      setKeywordFilter(newFilter);
      // setDateFilter({});
    } else if (newFilter.dateStart && newFilter.dateEnd) {
      setDateFilter(newFilter);
      // setKeywordFilter({});
    }
  };
  // Ketika live challenge saya kurang teliti, di bagian else if,  sebelumnya menggunakan newfilter.date (Karena hanya satu date)
  // Challenge yang diminta adalah membuat fitur tanggal mulai dan tanggal akhir

  return (
    <main className="homepage">
      <Header></Header>
      <NewsFilter onFilter={handleFilter} />
      <NewsContents keywordFilter={keywordFilter} dateFilter={dateFilter} />
    </main>
  );
}
