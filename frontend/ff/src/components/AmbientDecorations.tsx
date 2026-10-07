export function AmbientArc({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={`ambient-arc${flip ? " ambient-arc--flip" : ""}`}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <path d="M 10 180 Q 60 20 190 40" stroke="#a78bfa" strokeWidth="0.7" opacity="0.12" strokeLinecap="round" />
      <path d="M 30 160 Q 90 50 180 80" stroke="#8b5cf6" strokeWidth="0.4" opacity="0.08" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleField() {
  const sparkles = [
    { x: 78, y: 14, size: 7 },
    { x: 22, y: 67, size: 5 },
    { x: 91, y: 55, size: 4 },
    { x: 40, y: 88, size: 6 },
    { x: 60, y: 30, size: 5 },
  ];

  return (
    <svg className="sparkle-field" viewBox="0 0 100 100" aria-hidden="true">
      {sparkles.map((sparkle, index) => (
        <g key={index} transform={`translate(${sparkle.x},${sparkle.y})`} opacity="0.18">
          <line x1={-sparkle.size / 2} y1="0" x2={sparkle.size / 2} y2="0" stroke="#c4b5fd" strokeWidth="0.5" />
          <line x1="0" y1={-sparkle.size / 2} x2="0" y2={sparkle.size / 2} stroke="#c4b5fd" strokeWidth="0.5" />
          <line x1={-sparkle.size * 0.35} y1={-sparkle.size * 0.35} x2={sparkle.size * 0.35} y2={sparkle.size * 0.35} stroke="#c4b5fd" strokeWidth="0.3" opacity="0.7" />
          <line x1={sparkle.size * 0.35} y1={-sparkle.size * 0.35} x2={-sparkle.size * 0.35} y2={sparkle.size * 0.35} stroke="#c4b5fd" strokeWidth="0.3" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}
