import { BrowseRange } from "../components/BrowseRange";
import { HeroSection, Navbar, OurProduct } from "../components/components";
import { Products, ranges } from "../constant/DummyData";

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
    </div>
  );
};

