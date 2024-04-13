import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../redux/fav";

export default function Movie({ id, title, posterURL }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const favArr = useSelector((state) => state.favorite.favorite);

  useEffect(() => {
    // Check if the current movie ID is in the list of favorites
    setIsFav(favArr?.some((fav) => fav.id === id));
  }, [favArr, id]);

  function handleToggleFav() {
    // Toggle isFav immediately
    setIsFav(!isFav);

    // Dispatch the appropriate action based on isFav state
    if (isFav) {
      dispatch(removeFavorite(id));
      console.log(favArr);
    } else {
      dispatch(addFavorite({ id, title, posterURL }));
    }
  }

  return (
    <div className="movieCard">
      <div className="txt">
        {isFav ? (
          <Favorite onClick={handleToggleFav} className="fav"></Favorite>
        ) : (
          <FavoriteBorder
            onClick={handleToggleFav}
            className="fav"
          ></FavoriteBorder>
        )}
        <div className="id">Id: {id}</div>
        <Link to={`/movies/${id}`}>
          {" "}
          <div className="name">Title: {title}</div>
        </Link>{" "}
        <img className="overview" src={posterURL} alt={title} />
      </div>
    </div>
  );
}
