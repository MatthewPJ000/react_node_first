import React, { useState, useEffect } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const [pageNumber, setPageNumber] = useState(currentPage);
  const [buttonClickCount, setButtonClickCount] = useState(0);

  useEffect(() => {
    setPageNumber(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    onPageChange(pageNumber + 1);
    setButtonClickCount(buttonClickCount + 1);
  };

  const firstPage = () => {
    onPageChange(1);
    setButtonClickCount(buttonClickCount + 1);
  };

  const prevPage = () => {
    onPageChange(pageNumber - 1);
    setButtonClickCount(buttonClickCount + 1);
  };

  const finalPage = () => {
    onPageChange(totalPages);
    setButtonClickCount(buttonClickCount + 1);
  };

  const goToPage = (pageNumber: number) => {
    onPageChange(pageNumber);
    setButtonClickCount(buttonClickCount + 1);
  };

  let buttons: any[] = [];

  if (totalPages <= 7) {
    // Less than or equal to 7 pages, display all buttons
    buttons = Array.from({ length: totalPages }, (_, index) => (
      <button className='pageButton'
        key={index + 1}
        onClick={() => goToPage(index + 1)}
        disabled={pageNumber === index + 1}
      >
        {index + 1}
      </button>
    ));
  } else {
    // More than 7 pages, display the first 3, current, last 3, and "..." in between
    if (pageNumber <= 4) {
      // Display first 5 buttons and "..."
      buttons = Array.from({ length: 3 }, (_, index) => {
        return (
          <button className='pageButton'
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            disabled={pageNumber === index + 1}
          >
            {index + 1}
          </button>
        )
      });
    } else if (pageNumber >= totalPages - 3) {
      buttons = Array.from({ length: 3 }, (_, index) => {
        return (
          <button className='pageButton'
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            disabled={pageNumber === index + 1}
          >
            {index + 1}
          </button>
        )
      });
      // Display "..." and last 5 buttons
      // if(currentPage!==totalPages){
    // }
      buttons = buttons.concat(
        Array.from({ length: 3 }, (_, index) => {
          const page = totalPages - 1 + index;
          return (
            <button  className='pageButton'
              key={page}
              onClick={() => goToPage(page)}
              disabled={pageNumber === page}
            >
              {page}
            </button>
          );
        })
      );
    } else {
      // Display current page and surrounding buttons and "..."
      buttons = buttons.concat(
        Array.from({ length: 3 }, (_, index) => {
          const page = pageNumber - 1 + index;
          return (
            <button className='pageButton'
              key={page}
              onClick={() => goToPage(page)}
              disabled={pageNumber === page}
            >
              {page}
            </button>
          );
        })
      );
    }
  }

  return (
    <div className='pagination1'>
      <button onClick={firstPage} className='pageButton' disabled={pageNumber === 1}>
       --
      </button>
      <button onClick={prevPage} className='pageButton' disabled={pageNumber === 1}>
      -
      </button>
      {buttons}
      <button onClick={nextPage} className='pageButton' disabled={pageNumber === totalPages}>
       +
      </button>
      <button onClick={finalPage} className='pageButton' disabled={pageNumber === totalPages}>
       ++
      </button>
      <div>
        Go to page:{' '}
        <input
          type="number"
          min="1"
          max={totalPages}
          value={pageNumber}
          onChange={(e) => goToPage(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Pagination;