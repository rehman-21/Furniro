import {
  BrowseRange,
  HeroSection,
  HeroText,
  ImageCarousel,
  Navbar,
  OurProduct,
  RoomCard,
} from "../components/components";
import { Products, ranges } from "../constant/DummyData";
import { JPG } from "../constant/Images";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        Title={"New Arrival"}
        Title2={
          <>
            Discover Our <br /> New Collection
          </>
        }
      />
      <BrowseRange ranges={ranges} />
      <OurProduct Products={Products} />
      <section className="flex justify-between flex-col md:flex-row  gap-1 md:gap-4  bg-[#FFF9F4]   px-4 sm:px-8 md:px-12  py-6 md:py-8">
        <HeroText />
        <RoomCard
          index="01"
          category="Bed Room"
          image={JPG.BEDROOM_DEN}
          title="Inner Peace"
        />
        <ImageCarousel />
      </section>
    </div>
  );
};
