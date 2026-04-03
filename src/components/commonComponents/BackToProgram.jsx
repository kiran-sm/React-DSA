import React from "react";
import { Link } from "react-router-dom";

const BackToProgram = ({ to }) => {
  return (
    <Link
      to={to}
      className="text-blue-500  border px-3 rounded-md hover:bg-blue-100 hover:border-blue-500 hover:text-black transition-colors duration-300 py-1 mt-4 inline-block"
    >
      Back to Program
    </Link>
  );
};

export default BackToProgram;
