import { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../redux/movies";

export default function MoviesDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movie.singleMovie);

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch]);

  return (
    <>
      <div className="movieCard">
        <div className="txt">
          <div className="id">Id: {movieDetails?.id}</div>
          <div className="name">Title: {movieDetails?.title}</div>
          <div className="overview">Overview: {movieDetails?.overview}</div>
        </div>
      </div>
    </>
  );
}
