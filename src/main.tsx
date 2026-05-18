import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./App";
import { RouterProvider } from "react-router-dom";
import { Context } from "./Context/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>,
);
