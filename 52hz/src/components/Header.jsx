import React from "react";
import "../styles/index.css";
import headerback from "../assests/headerback.jpg";

const Header = () => {
  return (
    <>
      <div>
        <body>
          <div className="relative">
            <img className="opacity-40 scale-50 -mt-60" src={headerback} />
            <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-[white] text-9xl ">52 Blue</h1>
              <h2 className="text-[white] text-2xl">
                The loneliest whale in the world.
              </h2>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default Header;
