import { Link } from "react-router-dom";
import { helpLinks, navigationMenu } from "../../constant/DummyData";

export const HomeFooter = () => {
  return (
    <>
      <footer className="w-full border-t border-gray-200">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                //~ {/* <================== [ FOOTER LOGO ] ==============> */}
                <h3 className="text-2xl font-bold font-Poppins mb-10">
                  Funiro.
                </h3>
              </div>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                400 University Drive Suite 200 Coral Gables,
                <br /> FL 33134 USA
              </p>
            </div>
            //~ {/* <================== [ FOOTER LINKS ] ==============> */}
            <div className="flex flex-col gap-8">
              <h4 className="uppercase tracking-wide text-gray-500 text-sm font-medium mb-10">
                Links
              </h4>
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
            //~ {/* <================== [ FOOTER HELP ] ==============> */}
            <div className="flex flex-col gap-5">
              <h4 className="uppercase tracking-wide text-gray-500 text-sm font-medium mb-10">
                Help
              </h4>
              <ul className="flex flex-col gap-10 text-sm font-medium">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="hover:text-gray-700">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
           
            //~{/* <================== [ FOOTER NEWS LETTER ] ==============> */}
            <div className="flex flex-col gap-5">
              <h4 className="uppercase tracking-wide text-gray-500 text-sm font-medium mb-5">
                Newsletter
              </h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full border-b border-gray-400 bg-transparent px-0 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                />
                <button
                  type="submit"
                  className="text-sm font-semibold hover:opacity-80 pt-2 border-b border-gray-400"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <p className="text-xs sm:text-sm text-gray-500">
              2023 Funiro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
