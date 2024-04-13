import { createBrowserRouter } from "react-router-dom";
import Movies from "../Pages/movies";
// import AddMovies from "../Pages/addMovies";
import Home from "../Pages/home";
import Error from "../Pages/Error";
import Layout from "../Pages/Layout";
import MoviesDetails from "../Pages/moviesDetails";
import Favorites from "../Pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: "fav",
        element: <Favorites></Favorites>,
      },
      {
        path: "movies",
        children: [
          { index: true, element: <Movies></Movies> },
          // { path: "add", element: <AddMovies></AddMovies> },
          { path: ":id", element: <MoviesDetails></MoviesDetails> },
        ],
      },
      { path: "*", element: <Error></Error> },
    ],
  },
]);

export default router;
