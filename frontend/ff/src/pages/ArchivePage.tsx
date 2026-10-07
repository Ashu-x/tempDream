import { useRef, useState } from "react";
import { fetchAnonymousDreams } from "../api/dream.api";
import { AmbientArc } from "../components/AmbientDecorations";
import { DreamCard } from "../components/DreamCard";
import { Pagination } from "../components/ui/Pagination";
import { DREAMS_PER_PAGE } from "../data/mockDreams";
import { useDreams } from "../hooks/useDreams";

type ArchivePageProps = {
  title: string;
  intro: string;
};

export function ArchivePage({ title, intro }: ArchivePageProps) {
  const { dreams, isLoading, error } = useDreams(fetchAnonymousDreams);
  const [page, setPage] = useState(1);
  const listRef = useRef<HTMLDivElement>(null);
  const slice = dreams.slice((page - 1) * DREAMS_PER_PAGE, page * DREAMS_PER_PAGE);

  const handlePage = (nextPage: number) => {
    setPage(nextPage);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="archive-page">
      <AmbientArc />
      <div className="archive-hero">
        <span className="eyebrow">Dreamlives archive</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="archive-list" ref={listRef}>
        {isLoading && <p className="archive-status">Loading archive...</p>}
        {error && <p className="archive-status archive-status--error">{error}</p>}
        {!isLoading && !error && slice.map((dream) => <DreamCard key={dream.title} dream={dream} />)}
      </div>
      {!isLoading && !error && (
        <Pagination page={page} total={dreams.length} perPage={DREAMS_PER_PAGE} onPage={handlePage} />
      )}
    </main>
  );
}
