





export default function Home() {
  const [keywordFilter, setKeywordFilter] = useState({});
  const [dateFilter, setDateFilter] = useState({});

  const handleFilter = (newFilter) => {
    if (newFilter.keyword) {
      setKeywordFilter(newFilter);
      setDateFilter({}); // Clear date filter when keyword filter is applied
    } else if (newFilter.date) {
      setDateFilter(newFilter);
      setKeywordFilter({}); // Clear keyword filter when date filter is applied
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