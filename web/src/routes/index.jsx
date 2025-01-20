import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Housing from "../pages/Services/Housing/Housing";
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
      },
      {
        path: "services",
        children: [
          {
            path: "housing",
            element: <Housing />
          }
        ]
      }
    ]
  }
]);
