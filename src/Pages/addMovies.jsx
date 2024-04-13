import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/movies";
import { v4 as uuid } from "uuid";

export default function AddMovies() {
  const [moviesData, setMoviesData] = useState({
    title: "",
    overview: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMoviesData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = { ...moviesData, id: uuid() };
    dispatch(addMovie(newMovie));
    navigate("/movies");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={moviesData.title}
          />
        </div>
        <div>
          <label htmlFor="overview">Overview: </label>
          <input
            type="text"
            name="overview"
            id="overview"
            value={moviesData.overview}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
