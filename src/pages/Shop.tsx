import React, { useState } from "react";
import { PageHeader } from "../components/Commons/HeadingTitle";
import { FilterSection, ServiceHighlights } from "../components/components";
import { ProductCard } from "../components/HomeComp/ProductCard";
import { Products } from "../constant/DummyData";

export const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16; 

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(Products.length / productsPerPage);

  return (
    <div>
      <PageHeader title="Shop" />
      <FilterSection />

      <section className="w-full px-10 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentProducts.map((p) => (
            <ProductCard
              key={p.id}
              imageSrc={p.image}
              title={p.title}
              subtitle={p.subtitle}
              price={p.price}
              oldPrice={p.oldPrice}
              isNew={p.isNew}
              discountPercent={p.discountPercent}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-[#B88E2F] text-white"
                  : "bg-[#f9f1e7] text-gray-800 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 rounded bg-[#f9f1e7] text-gray-800 hover:bg-gray-200"
            >
              Next
            </button>
          )}
        </div>
      </section>
        <ServiceHighlights/>
    </div>
  );
};
