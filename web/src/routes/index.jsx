import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import Housing from "../pages/Services/Housing/Housing";
import Investing from "../pages/Services/Investing/Investing";
import Platform from "../pages/Services/Platform/Platform";
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
          },
          {
            path: "investing",
            element: <Investing />
          },
          {
            path: "platform",
            element: <Platform />
          }
        ]
      },
      {
        path: "how-it-works",
        element: <HowItWorks />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);
