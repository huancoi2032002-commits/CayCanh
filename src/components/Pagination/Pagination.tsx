import React from "react";

interface PaginationProps {
    currentPage: number;       // Trang hiện tại
    totalPages: number;        // Tổng số trang
    onPageChange: (page: number) => void; // Callback khi đổi trang
    maxVisiblePages?: number;  // Số trang hiển thị ở giữa
    scrollToRef?: React.RefObject<HTMLDivElement | null>;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    maxVisiblePages = 5,
    scrollToRef
}) => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = startPage + maxVisiblePages - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    const handlePageChange = (page: number) => {
        onPageChange(page);
        scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex items-center gap-2 mt-4 justify-center">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
            >
                Prev
            </button>

            {getPageNumbers().map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded ${page === currentPage ? "bg-green-500 text-white" : "hover:bg-gray-200"
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
