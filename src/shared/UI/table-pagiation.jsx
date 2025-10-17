import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const TablePagination = ({ page, totalPage, setPage, totalItem }) => {
  const totalPages = totalPage || 0;
  const totalItems = totalItem || 0;
  // const [page, setPage] = useState(1);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7; // Maximum visible page numbers before ellipsis

    if (totalPages <= maxVisible + 3) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (page <= 4) {
        // Near the beginning
        for (let i = 2; i <= maxVisible; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (page >= totalPages - 3) {
        // Near the end
        pages.push('ellipsis');
        for (let i = totalPages - (maxVisible - 2); i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push('ellipsis');
        for (let i = page - 2; i <= page + 2; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="bg-white border border-gray-300 rounded-2xl flex flex-col lg:flex-row items-center gap-4 md:gap-10 px-5 py-3 mb-5">
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <p>
          page {page} of {totalPages}
        </p>
        <p>({totalItems} Items)</p>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`w-7 h-7 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 rounded-lg ${
            page === 1
              ? 'opacity-50 cursor-not-allowed'
              : 'cursor-pointer hover:bg-gray-50'
          }`}
        >
          <IoIosArrowBack />
        </button>

        {getPageNumbers().map((num, index) => {
          if (num === 'ellipsis') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="hidden md:block px-2 text-gray-500"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`${
                num === page
                  ? 'bg-blue-400 text-white'
                  : 'bg-white hover:bg-gray-50'
              } w-7 h-7 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 rounded-lg cursor-pointer transition-colors`}
            >
              {num}
            </button>
          );
        })}

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`w-7 h-7 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 rounded-lg ${
            page === totalPages
              ? 'opacity-50 cursor-not-allowed'
              : 'cursor-pointer hover:bg-gray-50'
          }`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
