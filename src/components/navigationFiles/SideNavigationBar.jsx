import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuToggleButton from "../commonComponents/MenuToggleButton";

const SideNavigationBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
    ${
      isActive
        ? "bg-[#2b80ff] text-white shadow-md"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <div className="flex min-h-screen relative">
      <MenuToggleButton
        isOpen={menuIsOpen}
        onToggle={() => setMenuIsOpen((prev) => !prev)}
      />

      {menuIsOpen && (
        <div className="bg-white w-48 shadow-2xl absolute h-full sm:relative sm:h-stretch border-r border-gray-100">
          <nav className="flex flex-col gap-1 mx-3 w-auto mt-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/counter" className={navLinkClass}>
              Counter
            </NavLink>
            <NavLink to="/todo-list" className={navLinkClass}>
              Todo list
            </NavLink>
            <NavLink to="/box-select" className={navLinkClass}>
              Box-Select
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SideNavigationBar;
