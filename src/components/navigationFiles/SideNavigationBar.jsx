import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuToggleButton from "./MenuToggleButton";

const SideNavigationBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  return (
    <div className="flex  min-h-screen relative ">
      <MenuToggleButton
        isOpen={menuIsOpen}
        onToggle={() => setMenuIsOpen((prev) => !prev)}
      />

      {menuIsOpen && (
        <div className="bg-white w-40 shadow-2xl  absolute h-full sm:relative sm:h-stretch">
          <nav className="flex flex-col gap-2 mx-5 w-fit mt-8 ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/counter">Counter</NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SideNavigationBar;
