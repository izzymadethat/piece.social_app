import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Layout from "./Layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]);
