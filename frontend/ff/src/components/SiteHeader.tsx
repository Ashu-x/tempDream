import type { View } from "../types/dream.types";
import { Search } from "./ui/Search";

type SiteHeaderProps = {
  view: View;
  onNavigate: (view: View) => void;
  onOpenRandom: () => void;
};

export function SiteHeader({ view, onNavigate, onOpenRandom }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <button className="wordmark" type="button" onClick={() => onNavigate("home")}>
        Dreamlives
      </button>
      <nav aria-label="Primary navigation">
        <button className={view === "home" ? "active" : ""} type="button" onClick={() => onNavigate("home")}>
          Dreams
        </button>
        <button className={view === "anonymous" ? "active" : ""} type="button" onClick={() => onNavigate("anonymous")}>
          Anonymous dreams
        </button>
        <button className={view === "random" ? "active" : ""} type="button" onClick={onOpenRandom}>
          Random dream
        </button>
        <button className={view === "submit" ? "active" : ""} type="button" onClick={() => onNavigate("submit")}>
          Submit a dream
        </button>
      </nav>
      <Search />
    </header>
  );
}
