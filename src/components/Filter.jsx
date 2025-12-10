import React from "react";

export const Filter = ({ activeFilterValue, updateCurrentFilter }) => {
  return (
    <div className="filterContainer gap-2 flex  ">
      <button
        className={`w-[38px] h-8 px-3 py-1 rounded-md border transition text-xs font-normal
  ${
    activeFilterValue === "all"
      ? "bg-[#3c82f6] text-white border-[#3c82f6] hover:bg-[#3c82f6]"
      : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"
  }`}
        onClick={() => updateCurrentFilter("all")}
      >
        All
      </button>
      <button
        className={`w-[60px] h-8  px-3 py-1 rounded-md border transition text-xs font-normal
    ${
      activeFilterValue === "active"
        ? "bg-[#3c82f6] text-white border-[#3c82f6] hover:bg-[#3c82f6]"
        : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"
    }`}
        onClick={() => updateCurrentFilter("active")}
      >
        Active
      </button>

      <button
        className={`w-[87px] h-8  px-3 py-1 rounded-md border transition text-xs font-normal
    ${
      activeFilterValue === "completed"
        ? "bg-[#3c82f6] text-white border-[#3c82f6] hover:bg-[#3c82f6]"
        : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"
    }`}
        onClick={() => updateCurrentFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};
