import React from "react";
import { MdFirstPage, MdOutlineNavigateNext, MdOutlineLastPage } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({ page, totalPages, changePage }) => {
  const maxPagesToShow = 5;
  const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      {/* First Page Button */}
      <button
        onClick={() => changePage("t", 1)}
        disabled={page === 1}
        className={`p-2 border-[#4DA2FF] border-[1px] text-[#4DA2FF] rounded-full ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
      >
        <MdFirstPage />
      </button>

      {/* Previous Page Button */}
      <button
        onClick={() => changePage("t", page - 1)}
        disabled={page === 1}
        className={`p-2 border-[#4DA2FF] border-[1px] text-[#4DA2FF] rounded-full ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
      >
        <GrFormPrevious />
      </button>

      {/* Page Number Buttons */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => changePage("t", p)}
          className={`w-[34px] h-[34px] border-[#4DA2FF] border-[1px] rounded-full text-[#4DA2FF] ${p === page ? "bg-[#4DA2FF20]" : "hover:bg-gray-200"}`}
        >
          {p}
        </button>
      ))}

      {/* Next Page Button */}
      <button
        onClick={() => changePage("t", page + 1)}
        disabled={page === totalPages}
        className={`p-2 border-[#4DA2FF] border-[1px] text-[#4DA2FF] rounded-full ${page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
      >
        <MdOutlineNavigateNext />
      </button>

      {/* Last Page Button */}
      <button
        onClick={() => changePage("t", totalPages)}
        disabled={page === totalPages}
        className={`p-2 border-[#4DA2FF] border-[1px] text-[#4DA2FF] rounded-full ${page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
      >
        <MdOutlineLastPage />
      </button>
    </div>
  );
};

export default Pagination;
