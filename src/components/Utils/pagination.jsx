import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

    return (
        <div className="flex justify-center mt-4">
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    className={`mx-1 px-3 py-2 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
