import{j as e}from"./index-Cc36IQa3.js";import{B as o}from"./BackToProgram-DzHzA7QB.js";const s=()=>{const t=`
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Counter</h1>
      <div className="flex items-center gap-4">
        <button
          className="border px-2 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <div className={\`text-7xl mx-4 \${count < 0 ? "text-red-400" : ""}\`}>
          {count}
        </div>

        <button
          className="border px-2 rounded-md"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
  `.trim();return e.jsxs("div",{className:"bg-gray-100 p-8 rounded-md overflow-x-auto w-full",children:[e.jsx("pre",{className:"whitespace-pre-wrap break-all",children:e.jsx("code",{children:t})}),e.jsx(o,{to:"/counter"})]})};export{s as default};
