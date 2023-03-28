import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import CartProvider from "./context/CartProvider";

import ErrorPage from "./routes/error-page";
import Orders from "./routes/orders";
import Root from "./routes/root";
import Search from "./routes/search";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <Navbar />
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
