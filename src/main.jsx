import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import MovieDescription from "./pages/MovieDescription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "movie/:id",
    element: <MovieDescription />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
