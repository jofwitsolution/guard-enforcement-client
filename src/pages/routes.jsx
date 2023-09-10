import { createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Recruitments from "./recruitments/Recruitments";
import Services from "./services/Services";
import GeNigeria from "./ge-nigeria/GeNigeria";
import GeUsa from "./ge-usa/GeUsa";
import Contact from "./contact/Contact";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/our-company",
    element: <About />,
  },
  {
    path: "/recruitments",
    element: <Recruitments />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/guardenforcement-nigeria",
    element: <GeNigeria />,
  },
  {
    path: "/guardenforcement-usa",
    element: <GeUsa />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
