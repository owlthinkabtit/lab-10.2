import { FRUITS } from "../fruits";
import { usePagination } from "../hooks/usePagination";

export function PaginationDemo() {
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
    setPage
  } = usePagination(FRUITS.length, 10);

  const currentFruits = FRUITS.slice(startIndex, endIndex);

  return (
    <div>
      <h3>
        Fruit Page: {currentPage} of {totalPages}
      </h3>
      <ul>
        {currentFruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={!canPrevPage}>
        Previous
      </button>
      <div style={{ display: "flex", gap: "5px" }}>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              style={{
                padding: "5px 10px",
                backgroundColor:
                  currentPage === pageNumber ? "#007bff" : "#f0f0f0",
                color: currentPage === pageNumber ? "white" : "black",
                cursor: "pointer",
              }}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button onClick={nextPage} disabled={!canNextPage}>
        Next
      </button>
    </div>
  );
}
