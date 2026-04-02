import React, { useState } from "react";
import LinkButton from "./navigationFiles/LinkButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Counter</h1>
      <div className="flex items-center gap-4">
        <button
          className="border px-2 rounded-md hover:bg-green-100 hover:border-green-500 transition-colors duration-300"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <div className={`text-7xl mx-4 ${count < 0 ? "text-red-400" : ""}`}>
          {count}
        </div>

        <button
          className="border px-2 rounded-md hover:bg-red-100 hover:border-red-500 transition-colors duration-300"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
      <LinkButton to="/counter-code" />
    </div>
  );
};

export default Counter;
