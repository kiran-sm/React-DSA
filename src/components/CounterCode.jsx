import BackToProgram from "./navigationFiles/BackToProgram";

const CounterCode = () => {
  const code = `
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
  `.trim();

  return (
    <div className="bg-gray-100 p-8 rounded-md overflow-x-auto w-full">
      <pre>
        <code>{code}</code>
      </pre>
      <BackToProgram to="/counter" />
    </div>
  );
};

export default CounterCode;
