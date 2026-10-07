export function Search() {
  return (
    <label className="search" aria-label="Search dreams">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.25 4.25" />
      </svg>
      <input placeholder="Search the dream archive" />
      <kbd>⌘ K</kbd>
    </label>
  );
}
