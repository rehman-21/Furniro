import { FaShareAlt } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";

type ProductCardProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  isNew?: boolean;
  discountPercent?: number;
};

export const ProductCard = ({
  imageSrc,
  title,
  subtitle,
  price,
  oldPrice,
  isNew = false,
  discountPercent,
}: ProductCardProps) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-md bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/4] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="h-100 w-[100%] object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {typeof discountPercent === "number" && (
          <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E97171] text-xs font-semibold text-white">
            -{discountPercent}%
          </span>
        )}

        {isNew && (
          <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#2EC1AC] text-xs font-semibold text-white">
            New
          </span>
        )}
      </div>

      <div className="space-y-3 p-4">
        <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
        <p className="text-xs text-neutral-500">{subtitle}</p>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-semibold text-neutral-900">
            {price}
          </span>
          {oldPrice && (
            <span className="text-xs text-neutral-400 line-through">
              {oldPrice}
            </span>
          )}
        </div>
      </div>

      {/* Hover actions */}
      <div className="pointer-events-none absolute inset-0 hidden flex-col items-center justify-center bg-black/40 group-hover:flex">
        <div className="pointer-events-auto flex flex-col items-center gap-3">
          <button className="rounded-sm bg-white px-6 py-2 text-xs font-semibold text-[#B88E2F] shadow-sm transition hover:bg-neutral-100">
            Add to cart
          </button>

          <div className="flex items-center gap-6 text-white text-lg">
            <button className="flex items-center gap-2 hover:text-[#B88E2F]">
              <FaShareAlt size={12} />
              <span className="text-sm">Share</span>
            </button>

            <button className="flex items-center gap-1 hover:text-[#B88E2F]">
              <GoArrowSwitch />
              <span className="text-sm">Compare</span>
            </button>

            <button className="flex items-center gap-1 hover:text-[#B88E2F]">
              <AiFillHeart size={12} />
              <span className="text-sm">Heart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

