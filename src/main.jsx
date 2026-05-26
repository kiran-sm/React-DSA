import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ShimmerEffect from "./components/commonComponents/ShimmerEffect.jsx";

// lazy only works for React components, not utility functions. reportWebVitals and sendToAnalytics are regular JS functions, so use normal import:
import Layout from "./components/navigationFiles/Layout.jsx"; // ✅ not lazy
// import reportWebVitals from "./webVitals/reportWebVitals.js";
// import { sendToAnalytics } from "./webVitals/analytics.js";

const Home = lazy(() => import("./components/Home.jsx"));
const Counter = lazy(() => import("./components/Counter.jsx"));
const CounterCode = lazy(() => import("./components/CounterCode.jsx"));
const TodoList = lazy(() => import("./components/TodoList.jsx"));
const TodoListCode = lazy(() => import("./components/TodoListCode.jsx"));
const BoxSelect = lazy(() => import("./components/BoxSelect.jsx"));
const BoxSelectCode = lazy(() => import("./components/BoxSelectCode.jsx"));
const ImagesGallery = lazy(() => import("./components/ImagesGallery.jsx"));
const ImagesGalleyCode = lazy(
  () => import("./components/ImagesGalleyCode.jsx"),
);

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
      { path: "box-select", element: <BoxSelect /> },
      { path: "box-select-code", element: <BoxSelectCode /> },
      { path: "images-gallery", element: <ImagesGallery /> },
      { path: "images-gallery-code", element: <ImagesGalleyCode /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<ShimmerEffect />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);

// reportWebVitals(console.log);
// reportWebVitals(sendToAnalytics);
