import { Navbar,HomeFooter } from "../components/Commons/commons";
import {
  BrowseRange,
  HeroSection,
  HeroText,
  ImageCarousel,
  RoomCard,
  OurProduct, 
  FurnitureComp 
} from "../components/HomeComp/HomeComp";
import { Products, ranges } from "../constant/DummyData";
import { JPG } from "../constant/Images";

export const Home = () => {
  return (
    <>
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
        <section className="flex justify-between items-center md:items-center flex-col md:flex-row  gap-1 md:gap-4  bg-[#FFF9F4]   px-4 sm:px-8 md:px-12  py-6 md:py-8 md:h-[600px] overflow-hidden">
          <HeroText />
          <RoomCard
            index="01"
            category="Bed Room"
            image={JPG.BEDROOM_DEN}
            title="Inner Peace"
          />
          <ImageCarousel />
        </section>
        <section>
          <FurnitureComp />
        </section>
        <HomeFooter />
      </div>
    </>
  );
};
