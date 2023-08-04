import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import App from "../App";
import Signin from "../pages/Signin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/signin",
    element: <Signin></Signin>
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
]);
