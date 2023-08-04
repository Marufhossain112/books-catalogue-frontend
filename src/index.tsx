import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
]);
