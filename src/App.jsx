import * as React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Apropos from "./Components/Apropos/Apropos";
import Footer from "./Components/Footer/Footer";
import TastyBurger from "./Components/Portfolio/TastyBurger/TastyBurger";
import Faceclone from "./Components/Portfolio/faceclone/Faceclone";
import Studio from "./Components/Portfolio/studio/Studio";

function App(props) {
  const Layout = () => {
    return (
      <main className="justify-center items-center bg-gray-200 flex flex-col px-5">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/apropos",
          element: <Apropos />,
        },
        {
          path: "/tastyburger",
          element: <TastyBurger />,
        },
        {
          path: "/faceclone",
          element: <Faceclone />,
        },
        {
          path: "/studio",
          element: <Studio />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
