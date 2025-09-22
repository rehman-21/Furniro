import { HeadingTitle } from "../Commons/HeadingTitle";
import { JPG, PNG } from "../../constant/Images";

export const FurnitureComp = () => {
  const images = [
    { src: JPG.BG_1, col: "col-span-2", row: "row-span-2" },
    { src: PNG.BEDROOM_IMG },
    { src: JPG.SYLTHERINE },
    { src: PNG.LIVING_IMG, col: "col-span-2" },
    { src: JPG.BG_2, col: "col-span-2", row: "row-span-2" },
    { src: JPG.LOLITE },
    { src: PNG.DIINING_IMG },
    { src: JPG.RESPIRA, col: "col-span-2" },
    { src: JPG.POTTY },
  ];

  return (
    <div className="w-[100%] px-4 sm:px-8 md:px-12 py-10">
      <p className="text-center text-sm text-gray-500">Share your setup with</p>
      <HeadingTitle
        title="#FuniroFurniture"
        className="text-2xl md:text-3xl font-bold text-center mb-8"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {images.map((img, index) => (
          <div
            key={index}
            className={` overflow-hidden ${img.col ?? ""} ${
              img.row ?? ""
            }`}
          >
            <img
              src={img.src}
              alt={`setup-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
