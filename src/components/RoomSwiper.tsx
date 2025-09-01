import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { RoomCard } from "./RoomCard";
import { JPG } from "../constant/Images";

const rooms = [
  {
    image: JPG.GRIFO,
    index: "01",
    category: "Bed Room",
    title: "Inner Peace",
  },
  {
    image: JPG.LOLITE,
    index: "02",
    category: "Living Room",
    title: "Cozy Minimal",
  },
  {
    image: JPG.RESPIRA,
    index: "03",
    category: "Dining Room",
    title: "Light Elegance",
  },
];

export const RoomSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      className="max-w-3xl"
    >
      {rooms.map((room, idx) => (
        <SwiperSlide className="flex-row" key={idx}>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
