import React from "react";
import { ProductNav, Product_Info } from "../components/components";

export const SingleProduct: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <ProductNav items={breadcrumbItems} current="Asgaard Sofa" />

      {/* Product Info Section */}
      <Product_Info />
    </div>
  );
};
