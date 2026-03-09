import { FRUITS } from '../fruits'
import { usePagination } from '../hooks/usePagination'

export function PaginationDemo() {
  const {
    currentPage, totalPages, startIndex, endIndex, nextPage, prevPage, canNextPage, canPrevPage
  } = usePagination(FRUITS.length, 10);

  const currentFruits = FRUITS.slice(startIndex, endIndex);

  return(
    <div>
      <h3>Fruit Page: {currentPage} of {totalPages}</h3>
      <ul>
        {currentFruits.map(fruit => <li key={fruit}>{fruit}</li>)}
      </ul>
      <button onClick={prevPage} disabled={!canPrevPage}>Previous</button>
      <button onClick={nextPage} disabled={!canNextPage}>Next</button>
    </div>
  );
};