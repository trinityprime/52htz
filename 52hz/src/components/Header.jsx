import React, { useEffect, useState } from "react";
import "../styles/index.css";
import headerback from "../assests/headerback.jpg";

const Header = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div>
        <div className="relative">
          <div style={{ transform: `translateY(${offsetY * 0.28}px)` }}>
            <img
              className="opacity-40 scale-50 -mt-60 -z-50 "
              src={headerback}
            />
          </div>
          <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-[white] text-9xl ">52 Blue</h1>
            <h2 className="text-[white] text-2xl">
              The loneliest whale in the world.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
