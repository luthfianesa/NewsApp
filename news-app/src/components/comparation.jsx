useEffect(() => {
  const fetchData = async () => {
    try {
      // Check if keyword is truthy before making the API request
      if (!keywordFilter.keyword) {
        return;
      }

      // Construct the API URL with the keyword query parameter
      const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keywordFilter.keyword)}&pageSize=9&apiKey=3341deda0b2147ef8c8c1702d56241b6`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      // Log the fetched data to the console
      console.log("Fetched data:", data);

      let filteredNews = data.articles;

      // Filter news by keyword
      if (keywordFilter.keyword) {
        filteredNews = filteredNews.map((article) => {
          const words = article.title.split(" ");
          const highlightedTitle = words.map((word) => (word.toLowerCase() === keywordFilter.keyword.toLowerCase() ? `<span class="highlight">${word}</span>` : word)).join(" ");
          return { ...article, highlightedTitle };
        });
      }

      setNews(filteredNews);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
}, [keywordFilter]);