import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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
]);
