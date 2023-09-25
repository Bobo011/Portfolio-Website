import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the window width
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 500); // Adjust the threshold as needed
    };

    // Initial check
    handleWindowResize();

    // Add the resize event listener
    window.addEventListener("resize", handleWindowResize);

    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Render the BallCanvas components conditionally
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) =>
        // Only render BallCanvas if not on a mobile-sized screen
        isMobile ? null : (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        )
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
