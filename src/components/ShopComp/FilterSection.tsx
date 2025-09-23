import React from "react";
import { HiAdjustmentsHorizontal, HiMiniSquares2X2 } from "react-icons/hi2";
import { BsViewList } from "react-icons/bs";

interface FilterProps {}

export const FilterSection: React.FC<FilterProps> = () => {
  return (
    <div className="w-full bg-[#f9f1e7] flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-4 md:px-10 py-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <HiAdjustmentsHorizontal className="text-xl" />
          <h4 className="text-sm font-medium">Filter</h4>
        </div>
        <HiMiniSquares2X2 className="text-lg cursor-pointer" />
        <BsViewList className="text-lg cursor-pointer" />

        <div className="hidden md:block border-l-2 h-6 mx-3" />
        <p className="text-xs md:text-sm text-gray-700">
          Showing 1–16 of 32 results
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Show</span>
          <input
            type="number"
            defaultValue={16}
            className="w-14 rounded text-center text-sm py-2 appearance-none bg-white"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by</span>
          <select className="bg-white rounded px-3 py-2 text-sm appearance-none">
            <option value="default">Default</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Average rating</option>
            <option value="latest">Latest</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>
      </div>
    </div>
  );
};
