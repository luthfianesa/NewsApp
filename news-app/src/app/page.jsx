import Header from "@/components/Header";
import NewsFilter from "@/components/NewsFilter";
import NewsContents from "@/components/NewsContents";

export default function Home() {
  return (
    <main className="homepage">
      <Header></Header>
      <NewsFilter></NewsFilter>
      <NewsContents></NewsContents>
    </main>
  );
}
