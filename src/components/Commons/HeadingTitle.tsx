import { SVG } from "../../constant/Svg";
import type React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

interface HeadingTitleProps {
  title: string;
  className: string;
}
export const HeadingTitle: React.FC<HeadingTitleProps> = ({
  title,
  className,
}) => {
  return <h1 className={className}>{title}</h1>;
};

interface PageHeaderProps {
  title: string;
  to: To;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title,to }) => {
  return (
    <>
    <section
      className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(/images/BG_2.jpg)` }}
    >
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-2">
          <img src="/images/BgImg.svg" alt="logo" className="w-8 h-8" />
        </div>
        <img src={SVG.LOGO_IMG} alt="main logo" className="w-10 h-7 " />
        <h1 className="text-2xl md:text-4xl font-medium my-2 font-Poppins">{title}</h1>
        <div className="text-sm text-gray-700 flex justify-center items-center">
          <Link to="/" className="hover:text-gray-600 font-bold">
            Home
          </Link>
          <span className="mx-1 font-bold text-3xl">
          <FaAngleRight size={12} />
          </span>
          <Link to={to}>
          {title}
          </Link>
        </div>
      </div>
    </section>
    </>

  );
};
