import { useRef, useState } from "react";
import { fetchRecentDreams } from "../api/dream.api";
import { DREAMS_PER_PAGE } from "../data/mockDreams";
import { useDreams } from "../hooks/useDreams";
import { DreamCard } from "./DreamCard";
import { Pagination } from "./ui/Pagination";

export function DreamFeed() {
  const { dreams, isLoading, error } = useDreams(fetchRecentDreams);
  const [page, setPage] = useState(1);
  const feedRef = useRef<HTMLDivElement>(null);

  if (isLoading) return <section className="feed feed-status">Loading archive...</section>;
  if (error) return <section className="feed feed-status feed-status--error">{error}</section>;

  const slice = dreams.slice((page - 1) * DREAMS_PER_PAGE, page * DREAMS_PER_PAGE);
  const handlePage = (nextPage: number) => {
    setPage(nextPage);
    feedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="feed">
      <div className="feed-heading">
        <div>
          <span className="eyebrow">The latest from the archive</span>
          <h1>Recently dreamed</h1>
        </div>
        <span className="dream-count">{dreams.length} new stories</span>
      </div>
      <div className="dream-list" ref={feedRef}>
        {slice.map((dream) => <DreamCard key={dream.title} dream={dream} />)}
      </div>
      <Pagination page={page} total={dreams.length} perPage={DREAMS_PER_PAGE} onPage={handlePage} />
    </section>
  );
}
