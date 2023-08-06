import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import App from "../App";
import Signin from "../pages/Signin";
import Books from "../pages/AllBooks";
import BooksDetails from "../pages/BooksDetails";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import LatestBooks from "../pages/LatestBooks";

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
        path: '/latest-books',
        element: <LatestBooks></LatestBooks>
      },
      {
        path: '/books-details',
        element: <BooksDetails></BooksDetails>
      },
    ]
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
    path: "/books",
    element: <Books></Books>
  },
  {
    path: "/books-details",
    element: <BooksDetails></BooksDetails>
  },

  {
    path: "*",
    element: <NotFound></NotFound>
  },
]);
