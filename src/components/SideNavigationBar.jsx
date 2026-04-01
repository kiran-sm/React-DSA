import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menubar from "../assets/burger-bar.png";
import close from "../assets/close.png";

const SideNavigationBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  return (
    <div className="flex  min-h-screen ">
      <button
        className="px-4 absolute font-bold flex items-center gap-2 bg-green-100 cursor-pointer"
        onClick={() => {
          setMenuIsOpen((prev) => !prev);
        }}
      >
        {menuIsOpen ? (
          <div className="flex items-center gap-2">
            Menu <img src={close} alt="close" className="w-4" />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            Menu <img src={menubar} alt="menu bar" className="w-5 " />
          </div>
        )}
      </button>

      {menuIsOpen && (
        <div className="bg-green-100 max-w-[150px] ">
          <nav className="flex flex-col gap-2 mx-5 w-fit mt-8">
            <NavLink to="/">Home</NavLink>
            <NavLink className="w-full" to="/about">
              About
            </NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SideNavigationBar;
