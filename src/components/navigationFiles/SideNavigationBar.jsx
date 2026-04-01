import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menubar from "../../assets/burger-bar.png";
import close from "../../assets/close.png";
import MenuToggleButton from "../MenuToggleButton";

const SideNavigationBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  return (
    <div className="flex  min-h-screen ">
      <MenuToggleButton
        isOpen={menuIsOpen}
        onToggle={() => setMenuIsOpen((prev) => !prev)}
      />

      {menuIsOpen && (
        <div className="bg-[#ffffff] max-w-[150px] ">
          <nav className="flex flex-col gap-2 mx-5 w-fit mt-8 shadow-2xl">
            <NavLink to="/">Home</NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SideNavigationBar;
