import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
          <div>
            <img
              className="rounded-5"
              src="https://cdn4.vectorstock.com/i/1000x1000/82/33/sun-cloud-icon-vector-9848233.jpg"
              width={50}
              alt=""
            />
          </div>
          <Nav className="me-auto">
            <Link to="" className="text-light fs-5 fw- nav-link">
              Home
            </Link>
            <Link to="/favourites" className="text-light fs-5 fw- nav-link">
              Favourites
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
