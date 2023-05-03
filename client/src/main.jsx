import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loves from "./components/Loves";
import Family from "./components/Family";
import Friends from "./components/Friends";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/loves",
    element: <Loves />,
  },
  {
    path: "/family",
    element: <Family />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
