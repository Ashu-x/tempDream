import type { Dream } from "../types/dream.types";

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <i /><i /><i />
    </span>
  );
}

export function DreamCard({ dream }: { dream: Dream }) {
  return (
    <article className="dream-card">
      <div className="dream-body">
        <div className="dream-meta">
          <span>{dream.anonymous ? "shared anonymously" : `shared by @${dream.author}`}</span>
          <span>{dream.time}</span>
        </div>
        <h3>{dream.title}</h3>
        <p>{dream.excerpt}</p>
        <div className="dream-footer">
          <span className="views">
            <Mark /> {dream.views} reads
          </span>
        </div>
      </div>
    </article>
  );
}
