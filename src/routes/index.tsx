import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import App from "../App";
import Books from "../pages/AllBooks";
import BooksDetails from "../pages/BooksDetails";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import SignIn from "../pages/Signin";
import { Toastify } from "../components/Toastify";
import PrivateRoutes from "./PrivateRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/all-books',
        element: <AllBooks></AllBooks>
      },

      {
        path: '/books/:id',
        element: <BooksDetails></BooksDetails>
      },

      {
        path: '/new-book',
        element: <PrivateRoutes><AddBook></AddBook></PrivateRoutes>
      },
    ]
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/books",
    element: <Books></Books>
  },
  {
    path: "/books-details",
    element: <BooksDetails></BooksDetails>
  },
  {
    path: "/toast",
    element: <PrivateRoutes> <Toastify></Toastify></PrivateRoutes>
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
]);
