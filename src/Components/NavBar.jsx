import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  const count = useSelector((state) => state.favorite.favCount);
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>Redux</Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/movies">Movies</NavLink>
              <NavLink to="/fav">Favorites</NavLink>
            </Nav>
          </Navbar.Collapse>

          <div className="count">Count: {count}</div>
        </Container>
      </Navbar>
    </>
  );
}
