import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/index.css";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1000) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={navColor ? "header-bg" : "header"}>
      <div className="flex justify-center h-24 mx-0 px-4 text-xl text-white">
        <ul className="flex p-4">
          <li className="p-4 hover:text-blue-200 hover:cursor-pointer hover:underline transition ease-in-out delay-50">
            <Link activeClass="active" smooth spy to="about">
              ABOUT
            </Link>
          </li>
          <li className="p-4 hover:text-blue-200 hover:cursor-pointer hover:underline transition ease-in-out delay-50">
            <Link activeClass="active" smooth spy to="Contact">
              CONTACT
            </Link>
          </li>
          <li className="p-4 hover:text-blue-200 hover:cursor-pointer hover:underline transition ease-in-out delay-50">
            <Link activeClass="active" smooth spy to="More">
              MORE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
