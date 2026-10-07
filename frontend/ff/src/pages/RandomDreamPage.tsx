import type { Dream } from "../types/dream.types";
import { AmbientArc, SparkleField } from "../components/AmbientDecorations";
import { FadeSection } from "../components/FadeSection";
import { ReadMark } from "../components/ui/ReadMark";

type RandomDreamPageProps = {
  dream: Dream;
  isLoading: boolean;
  onAnotherDream: () => void;
};

export function RandomDreamPage({ dream, isLoading, onAnotherDream }: RandomDreamPageProps) {
  return (
    <main className="random-page-full">
      <SparkleField />
      <AmbientArc flip />
      <div className="random-full-header">
        <span className="eyebrow">A dream, selected at random</span>
        <button className="another-dream-btn" onClick={onAnotherDream} disabled={isLoading}>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14" aria-hidden="true">
            <path d="M14.5 5.5A6 6 0 1 1 8 4.08" strokeLinecap="round" />
            <path d="M8 1v3.5H11.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {isLoading ? "Finding a dream" : "Another dream"}
        </button>
      </div>
      <FadeSection>
        <div className="random-full-title-block">
          <div className="random-full-orbit" aria-hidden="true">✦</div>
          <p className="random-meta">{dream.anonymous ? "Shared anonymously" : `Shared by @${dream.author}`} {" · "} {dream.time}</p>
          <h1 className="random-full-title">{dream.title}</h1>
          <div className="random-full-divider" />
        </div>
      </FadeSection>
      <FadeSection delay={80}>
        <div className="random-full-section"><p className="random-full-body">{dream.content}</p></div>
      </FadeSection>
      <FadeSection delay={120}>
        <div className="random-full-section">
          <div className="dream-section-label">Real life context</div>
          <p className="random-full-body random-full-body--muted">{dream.real_life_context}</p>
        </div>
      </FadeSection>
      <FadeSection delay={160}>
        <div className="random-full-section random-full-section--last">
          <div className="dream-section-label">Dreamer's interpretation</div>
          <blockquote className="random-full-blockquote">{dream.dreamer_interpretation}</blockquote>
        </div>
      </FadeSection>
      <FadeSection delay={200}>
        <div className="random-full-footer">
          <span className="views"><ReadMark /> {dream.views} reads</span>
          <button className="another-dream-btn another-dream-btn--ghost" onClick={onAnotherDream} disabled={isLoading}>
            Roll another dream <span aria-hidden="true"> →</span>
          </button>
        </div>
      </FadeSection>
    </main>
  );
}
