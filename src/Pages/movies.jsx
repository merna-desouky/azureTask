import { useEffect } from "react";
import Movie from "../Components/movie";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/movies";

export default function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <div className="movies">
        {" "}
        <div className="container">
          <div className="row gy-5">
            {movies &&
              movies.map((movie) => (
                <div key={movie.id} className="col-md-4 ">
                  <Movie {...movie}></Movie>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
