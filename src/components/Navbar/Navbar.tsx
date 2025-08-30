import { useState } from "react";
import { SVG } from "../../constant/Svg";
import { Link } from "react-router-dom";
import { GridIcon } from "../../assets/svg";
import { navbarIcons, navigationMenu } from "../../constant/DummyData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200">
      <div className="w-[100%] px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex gap-3 items-center">
            <img src={SVG.LOGO_IMG} alt="Logo" className="w-10 h-10" />
            <h1 className="text-black font-bold text-2xl font-Poppins">
              Furniro
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-14 m-4">
            {navigationMenu.map((menu, index) => (
              <Link
                key={index}
                to={menu.path}
                className="font-[600] font-Poppins hover:text-gray-600"
              >
                {menu.text}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex gap-12 items-center">
            {navbarIcons.map((items, index) => (
              <Link to={items.to} key={index}>
                <img src={items.url} className="w-5" alt={items.alt} />
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <GridIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-4 pb-4 space-y-2">
          <div className="flex flex-col gap-3">
            {navigationMenu.map((menu, index) => (
              <Link
                key={index}
                to={menu.path}
                className="font-[600] font-Poppins hover:text-gray-600"
              >
                {menu.text}
              </Link>
            ))}
          </div>
          <div className="flex mt-4 flex-col gap-5">
            {navbarIcons.map((items, index) => (
              <Link to={items.to} key={index}>
                <img src={items.url} className="w-5" alt={items.alt} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

