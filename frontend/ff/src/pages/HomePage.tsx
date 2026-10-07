import { DreamFeed } from "../components/DreamFeed";
import { Sidebar } from "../components/Sidebar";

export function HomePage() {
  return (
    <main className="page-grid">
      <DreamFeed />
      <Sidebar />
    </main>
  );
}
