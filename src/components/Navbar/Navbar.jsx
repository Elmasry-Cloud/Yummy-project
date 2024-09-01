import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import { Button, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavbarYummy() {
  async function searchByName(char) {
    console.log(char);
  }

  return (
    <>
      <Navbar className=" bg-black" expand="lg" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Link to="">
              <img src={Logo} className="w-25" alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <NavLink
                to={""}
                className="t text-decoration-none m-2 text-muted"
              >
                Home
              </NavLink>
              <NavLink
                to={"/categories"}
                className="t text-decoration-none m-2 text-muted"
              >
                Categories
              </NavLink>
              <NavLink
                to={"/area"}
                className="t text-decoration-none m-2 text-muted"
              >
                Area
              </NavLink>
              <NavLink
                to={"/ingredents"}
                className="t text-decoration-none m-2 text-muted"
              >
                Ingredients
              </NavLink>
              <NavLink
                to={"/contact"}
                className="t text-decoration-none m-2 text-muted"
              >
                Contact Us
              </NavLink>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarYummy;
