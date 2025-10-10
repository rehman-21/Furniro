import { JPG, PNG } from "../../constant/Images";
import React, { useState } from "react";
import { FaStar, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

interface ProductInfoProps {
  name?: string;
  price?: number;
  description?: string;
  imageUrls?: string[];
  sizes?: string[];
  colors?: string[];
}

export const Product_Info: React.FC<ProductInfoProps> = ({
  name = "Asgaard Sofa",
  price = 250000,
  description = "Setting the bar as one of the loudest speakers in its class...",
  imageUrls = [JPG.SOFA_IMG, PNG.BEDROOM_IMG, PNG.DIINING_IMG, PNG.BEDROOM_IMG],
  sizes = ["L", "XL", "XS"],
  colors = ["#000000", "#4F46E5", "#FACC15"],
}) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-16 py-10">
      {/* Left Image Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2 order-2 md:order-1">
          {imageUrls.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={name}
              className="w-20 h-20 object-cover  rounded cursor-pointer hover:border-gray-800"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 order-1 md:order-2">
          <img
            src={imageUrls[0]}
            alt={name}
            className="w-full h-[400px] object-cover rounded"
          />
        </div>
      </div>

      {/* Product Info Section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="text-xl text-yellow-600">Rs. {price.toLocaleString()}</p>

        {/* Reviews */}
        <div className="flex items-center gap-2">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
          <FaStar className="text-gray-300" />
          <span className="text-sm text-gray-500">5 Customer Reviews</span>
        </div>

        {/* Description */}
        <p className="text-gray-600">{description}</p>

        {/* Size Selector */}
        <div>
          <h3 className="font-medium mb-2">Size</h3>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded ${
                  selectedSize === size
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div>
          <h3 className="font-medium mb-2">Color</h3>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-gray-900"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quantity + Action Buttons */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border rounded">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2">
              +
            </button>
          </div>

          <button className="px-6 py-2 border rounded hover:bg-gray-900 hover:text-white">
            Add To Cart
          </button>

          <button className="px-6 py-2 border rounded hover:bg-gray-900 hover:text-white">
            + Compare
          </button>
        </div>

        {/* Meta Info */}
        <div className="text-sm text-gray-500 space-y-1 pt-4 border-t">
          <p>
            <span className="font-medium">SKU:</span> SS001
          </p>
          <p>
            <span className="font-medium">Category:</span> Sofas
          </p>
          <p>
            <span className="font-medium">Tags:</span> Sofa, Chair, Home, Shop
          </p>

          {/* Social Icons */}
          <p className="flex gap-3 items-center">
            <span className="font-medium">Share:</span>
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
            <FaLinkedin className="cursor-pointer hover:text-blue-700" />
            <FaTwitter className="cursor-pointer hover:text-sky-500" />
          </p>
        </div>
      </div>
    </div>
  );
};
