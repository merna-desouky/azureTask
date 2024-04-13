import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorite.favorite);
  console.log(favorites);
  // useEffect(() => {
  //   dispatch(getFav());
  // }, [dispatch]);
  return (
    <>
      <div className="container">
        {" "}
        <div className="row gy-5">
          {" "}
          {favorites?.map((el) => (
            <div key={el.id} className="col-lg-4">
              <div className="movieCard">
                <div className="txt">
                  <Link to={`/movies/${el.id}`}>
                    <div className="name">Title: {el.title}</div>
                  </Link>
                  <img className="overview" src={el.posterURL} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
