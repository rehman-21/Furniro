import type { ReactNode } from "react";
import { SVG } from "../../constant/Svg";
import { CustomCard } from "../Card/CustomCard";

interface CardProps {
  Title: string;
  Title2?: string | ReactNode;
}

export const HeroSection = ({ Title, Title2 }: CardProps) => {
  return (
    <section
      className="h-150 bg-cover bg-center flex items-center justify-end"
      style={{ backgroundImage: `url(${SVG.BG_IMG})` }}
    >
      <CustomCard
        Title={Title}
        Title2={Title2}
        Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
      />
    </section>
  );
};

