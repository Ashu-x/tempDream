type PaginationProps = {
  page: number;
  total: number;
  perPage: number;
  onPage: (page: number) => void;
};

export function Pagination({ page, total, perPage, onPage }: PaginationProps) {
  const pages = Math.ceil(total / perPage);
  if (pages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Page navigation">
      <button
        className="page-btn"
        disabled={page === 1}
        onClick={() => onPage(page - 1)}
        aria-label="Previous page"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" width="13" height="13">
          <path d="M10 3L5.5 8 10 13" />
        </svg>
      </button>
      <div className="page-numbers">
        {Array.from({ length: pages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`page-num${pageNumber === page ? " active" : ""}`}
            onClick={() => onPage(pageNumber)}
            aria-current={pageNumber === page ? "page" : undefined}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="page-btn"
        disabled={page === pages}
        onClick={() => onPage(page + 1)}
        aria-label="Next page"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" width="13" height="13">
          <path d="M6 3l4.5 5L6 13" />
        </svg>
      </button>
    </nav>
  );
}
