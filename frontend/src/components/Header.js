import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo-myTinerary.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="md">
        <img className="imgNav" src={logo} alt="logo" />
        {/* <Image src={logo} thumbnail /> */}
        <Navbar.Brand className="textLogo fw-bolder animate__animated animate__rollIn">
          MyTinerary
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="d-lg-flex justify-content-end text-center me-5"
        >
          <Nav className="ml-auto ">
          <NavDropdown
              className=""
              title={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fillRule="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              }
              id="basic-nav-dropdown"
            >
              <div className=" w-50 d-flex flex-column align-items-center justify-content-center">
                <NavLink to="/notFound">Sign in</NavLink>
                <NavLink to="/notFound">Sign up</NavLink>
              </div>
            </NavDropdown>
            <NavLink
              to="/"
              className="fw-bolder mx-4 fs-5 text-dark text-decoration-none"
            >
              Home
            </NavLink>
            <NavLink
              to="/cities"
              className="fw-bolder mx-4 fs-5 text-dark text-decoration-none"
            >
              Cities
            </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
