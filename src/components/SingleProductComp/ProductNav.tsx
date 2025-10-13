import React from "react";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface ProductNavProps {
  items: BreadcrumbItem[];
  current: string;
}

export const ProductNav: React.FC<ProductNavProps> = ({ items, current }) => {
  return (
    <nav
      className="w-full px-6 py-6 pl-20 flex flex-wrap items-center text-sm text-gray-600 bg-[#fdfaf6]"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center px-2">
          {item.path ? (
            <Link
              to={item.path}
              className="mx-1 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="mx-1">{item.label}</span>
          )}
          <MdNavigateNext size={18} className="text-gray-500" />
        </div>
      ))}

      {/* Divider before current page */}
      <div className="hidden md:block border-l-2 h-5 mx-2" />

      {/* Current Page */}
      <span className="text-gray-800 font-semibold">{current}</span>
    </nav>
  );
};
