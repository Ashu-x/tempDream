import { useState } from "react";
import { ArchivePage } from "./pages/ArchivePage";
import { HomePage } from "./pages/HomePage";
import { RandomDreamPage } from "./pages/RandomDreamPage";
import { SubmitPage } from "./pages/SubmitPage";
import { SiteHeader } from "./components/SiteHeader";
import { useRandomDream } from "./hooks/useRandomDream";
import type { View } from "./types/dream.types";

export default function App() {
  const [view, setView] = useState<View>("home");
  const { dream, isLoading, chooseRandomDream } = useRandomDream();

  const openRandomDream = () => {
    setView("random");
    void chooseRandomDream();
  };

  return (
    <div className="site-shell">
      <SiteHeader view={view} onNavigate={setView} onOpenRandom={openRandomDream} />

      {view === "home" && <HomePage />}
      {view === "anonymous" && (
        <ArchivePage
          title="Anonymous dreams"
          intro="Stories shared without a name. Just the dream, exactly as it stayed behind."
        />
      )}
      {view === "random" && (
        <RandomDreamPage
          dream={dream}
          isLoading={isLoading}
          onAnotherDream={() => void chooseRandomDream()}
        />
      )}
      {view === "submit" && <SubmitPage />}

      <footer>
        <span>Dreamlives, an archive for the afterimage.</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
