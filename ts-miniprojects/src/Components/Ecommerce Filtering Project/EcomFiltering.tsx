import { useState } from "react";
import Navigation from "./Navigation";
import { FilterProvider } from "./FilterContext";
import MainContent from "./MainContent";

const EcomFiltering = () => {
  const [showNavBar, setShowNavbar] = useState<boolean>(false);

  return (
    <FilterProvider>
      <div className="relative min-h-screen bg-[#121212] overflow-hidden ml-14 md:ml-16">
        <Navigation showNavBar={showNavBar} setShowNavbar={setShowNavbar} />
        {showNavBar && (
          <div
            onClick={() => setShowNavbar(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-300"
          />
        )}

        <div className="relative z-0 p-6 text-white">
          <MainContent/>
        </div>

      </div>
    </FilterProvider>
  );
};

export default EcomFiltering;
