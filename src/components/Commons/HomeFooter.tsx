import { Link } from "react-router-dom";
import { helpLinks, navigationMenu } from "../../constant/DummyData";

export const HomeFooter = () => {
  return (
    <>
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-16 xl:px-24 py-10 lg:py-14">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* ========== [ FOOTER LOGO & ADDRESS ] ========== */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold font-Poppins mb-6">
              Funiro.
            </h3>
            <p className="text-sm lg:text-base text-gray-500 max-w-xs leading-relaxed">
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
          </div>

          {/* ========== [ FOOTER LINKS ] ========== */}
          <div className="flex flex-col gap-5">
            <h4 className="uppercase tracking-wide text-gray-500 text-sm lg:text-base font-medium mb-4">
              Links
            </h4>
            {navigationMenu.map((menu, index) => (
              <Link
                key={index}
                to={menu.path}
                className="font-semibold font-Poppins hover:text-gray-700 text-sm lg:text-base"
              >
                {menu.text}
              </Link>
            ))}
          </div>

          {/* ========== [ FOOTER HELP ] ========== */}
          <div className="flex flex-col gap-5">
            <h4 className="uppercase tracking-wide text-gray-500 text-sm lg:text-base font-medium mb-4">
              Help
            </h4>
            <ul className="flex flex-col gap-3 lg:gap-5 text-sm lg:text-base font-medium">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-gray-700 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== [ FOOTER NEWSLETTER ] ========== */}
          <div className="flex flex-col gap-5">
            <h4 className="uppercase tracking-wide text-gray-500 text-sm lg:text-base font-medium mb-4">
              Newsletter
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3"
            >
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border-b border-gray-400 bg-transparent py-2 text-sm lg:text-base outline-none placeholder:text-gray-400 focus:border-gray-700"
              />
              <button
                type="submit"
                className="text-sm lg:text-base font-semibold hover:opacity-80 border-b border-gray-400 pt-4 "
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-xs sm:text-sm lg:text-base text-gray-500">
            2023 Funiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>

  );
};
