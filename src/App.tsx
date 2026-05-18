import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Details } from "./Pages/Details";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

export { router };
