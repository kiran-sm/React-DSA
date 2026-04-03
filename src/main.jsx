import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home.jsx";
import Layout from "./components/navigationFiles/Layout.jsx";
import Counter from "./components/Counter.jsx";
import CounterCode from "./components/CounterCode.jsx";
import reportWebVitals from "./webVitals/reportWebVitals.js";
// import { sendToAnalytics } from "./webVitals/analytics.js";
import TodoList from "./components/TodoList.jsx";
import TodoListCode from "./components/TodoListCode.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "counter", element: <Counter /> },
      { path: "counter-code", element: <CounterCode /> },
      { path: "todo-list", element: <TodoList /> },
      { path: "todolist-code", element: <TodoListCode /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

// reportWebVitals(console.log);
// reportWebVitals(sendToAnalytics);
