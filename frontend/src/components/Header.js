import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo-myTinerary.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userActions from "../redux/actions/userActions";

const Header = (props) => {
  const sesionOut = () => {
    toast.success("See you later!", {
      position: "top-right",
    });
    props.logOutUser();
  };

  return (
    <header>
      <ToastContainer />
      <Navbar bg="light" expand="md">
        <img className="imgNav" src={logo} alt="logo" />
        {/* <Image src={logo} thumbnail /> */}
        <Navbar.Brand className="textLogo fw-bolder animate__animated animate__rubberBand textNav">
          MyTinerary
        </Navbar.Brand>
        <h6 className="mx-2 mt-2 alternativeText">
              {props.userStatus ? `Welcome ${props.name}` : null}
            </h6>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="me-3"
        />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="d-lg-flex justify-content-end text-center  "
        >
          <Nav className="ml-auto d-flex align-items-center ">
            <h6 className="mx-2 mt-2 textNav">
              {props.userStatus ? `Welcome ${props.name}` : null}
            </h6>
            <span
              className="buttonNav"
              style={{
                backgroundImage: `url(${
                  props.userStatus
                    ? props.url
                    : "https://t4.ftcdn.net/jpg/01/18/03/35/160_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg"
                })`,
              }}
            ></span>
            <NavDropdown id="basic-nav-dropdown">
              <div className="  d-flex flex-column align-items-center justify-content-center">
                {props.userStatus ? (
                  <div>
                    <NavLink
                      to="/"
                      className="text-decoration-none text-dark"
                      onClick={sesionOut}
                    >
                      Log out
                    </NavLink>
                  </div>
                ) : (
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    {!props.userStatus && (
                      <NavLink
                        to="/signin"
                        className="text-decoration-none text-dark"
                      >
                        Sign in
                      </NavLink>
                    )}
                    {!props.userStatus && (
                      <NavLink
                        to="/signup"
                        className="text-decoration-none text-dark"
                      >
                        Sign up
                      </NavLink>
                    )}
                  </div>
                )}
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
            <NavLink
              to="/admin"
              className="fw-bolder mx-4 fs-5 text-dark text-decoration-none"
            >
              Admin
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    userStatus: state.user.token,
    name: state.user.name,
    url: state.user.url,
  };
};

const mapDispatchToProps = {
  logOutUser: userActions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
