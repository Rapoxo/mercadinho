import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import CartProvider from "./context/CartProvider";

import App from "./App";
import ErrorPage from "./routes/error-page";
import Orders from "./routes/orders";
import Root from "./routes/root";
import Search from "./routes/search";
import About from "./routes/about";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
