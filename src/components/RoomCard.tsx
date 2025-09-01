import type React from "react";
import { Button } from "./Button";

type RoomCardProps = {
  image: string;
  index: string;
  category: string;
  title: string;
};

export const RoomCard: React.FC<RoomCardProps> = ({
  image,
  index,
  category,
  title,
}) => {
  return (
    <div className="relative aspect-[4/4] w-[100%]  shadow-md">
      {/* Background image */}
      <img src={image} alt={title} className="h-full w-full object-cover" />

      {/* Overlay text box */}
      <div className="absolute bottom-6 left-6 bg-white/80 px-4 py-3 shadow-md ">
        <p className="text-xs text-neutral-500">
          {index} — {category}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-neutral-900">
          {title}
        </h3>
      </div>

      {/* Arrow button */}
      <Button
        className="absolute bottom-6 left-38 flex h-10 w-10 items-center justify-center  bg-[#B88E2F] text-white shadow hover:bg-[#a27b27] transition"
      >
        →
      </Button>
    </div>
  );
};
