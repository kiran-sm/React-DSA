import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/fast-forward.png";

const LinkButton = ({ to }) => {
  return (
    <Link
      to={to}
      className="text-blue-500  border px-3 rounded-md hover:bg-blue-100 hover:border-blue-500 transition-colors duration-300 flex items-center"
    >
      Code{" "}
      <img src={arrow} alt="arrow" className="w-4 inline-block ml-2 size-4" />
    </Link>
  );
};

export default LinkButton;
