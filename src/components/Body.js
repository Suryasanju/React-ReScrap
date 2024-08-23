import React from "react";

import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./About";
import PickupRequest from "../Pickup Request/PickupRequest";
import Home from "./Home";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/contact",
      element: <Browse />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/pickup-request",
      element: <PickupRequest />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
