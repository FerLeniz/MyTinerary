import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faKey,
  faImage,
  faGlobeEurope,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userActions from "../redux/actions/userActions";
import { connect } from "react-redux";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: "",
      userData: {
        name: "",
        lastName: "",
        email: "",
        password: "",
        url: "",
        country: "",
      },
    };

    this.changeValue = this.changeValue.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.toTop = this.toTop.bind(this);
  }

  toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  componentDidMount() {
    this.toTop();
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      this.setState({ countries: res.data });
    });
  }

  changeValue(e) {
    let value = e.target.value;
    let field = e.target.name;
    this.setState({
      ...this.state,
      userData: { ...this.state.userData, [field]: value },
    });
  }

  async sendForm(e) {
    e && e.preventDefault();
    let stat = this.state.userData;
    try {
      if (
        stat.password === "" ||
        stat.name === "" ||
        stat.country === "" ||
        stat.email === "" ||
        stat.url === "" ||
        stat.lastName === ""
      ) {
        toast.error("Please complete well fields", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        await this.props.postUser(this.state.userData);
        toast.success("Welcome to adventure", {
          onClose: () => {
            this.props.history.push("/");
          },
        });
      }
    } catch {
      toast.error("There´s an error", {
        position: "top-right",
      });
    }
  }

  validateForm(e) {
    let nameField = e.target.name;
    let value = e.target.value;

    if (nameField === "email" && !value.includes("@")) {
      toast.error("Complete well with @", {
        position: "top-right",
      });
    } else if (nameField === "password" && value.length < 4) {
      toast.error("Must be at least 4 characters long", {
        position: "top-right",
      });
    }
  }

  render() {
    return (
      <>
        <ToastContainer />
        <Header />
        <div className="container  text-center">
          <div>
            <h1>Sign up</h1>
            <h3>Join us! It's free and takes less han 30 seconds</h3>
          </div>
          <div className="col-12">
            <form className=" my-2 titleItinerary  rounded shadow  d-flex justify-content-center flex-column">
              <div className="my-1  ">
                <FontAwesomeIcon icon={faUser} className="formSvg" />
                <input
                  onChange={this.changeValue}
                  type="text"
                  className=" fs-4 rounded-pill shadow border border-light noOtuline"
                  placeholder="First Name"
                  name="name"
                ></input>
              </div>
              <div className="my-1">
                <FontAwesomeIcon icon={faUser} className="formSvg" />
                <input
                  onChange={this.changeValue}
                  className=" fs-4 rounded-pill shadow border border-light noOtuline"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                />
              </div>
              <div className="my-1">
                <FontAwesomeIcon icon={faEnvelope} className="formSvg" />
                <input
                  onBlur={(e) => this.validateForm(e)}
                  onChange={this.changeValue}
                  className=" fs-4 rounded-pill shadow border border-light noOtuline"
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="my-1">
                <FontAwesomeIcon icon={faKey} className="formSvg" />
                <input
                  onBlur={(e) => this.validateForm(e)}
                  onChange={this.changeValue}
                  type="password"
                  className=" fs-4 rounded-pill shadow border border-light noOtuline"
                  placeholder="Password"
                  name="password"
                />
              </div>
              {/* <div className="my-1">
                <FontAwesomeIcon icon={faKey} className="formSvg" />
                <input
                  onChange={this.changeValue}
                  className=" fs-4 rounded-pill shadow border border-light noOtuline"
                  type="text"
                   placeholder="Repeat Password"
                  name="repeatPassword"
                />
              </div> */}
              <div className="my-1">
                <FontAwesomeIcon icon={faImage} className="formSvg" />
                <input
                  onChange={this.changeValue}
                  type="text"
                  className=" fs-4 rounded-pill shadow border border-light noOtuline"
                  placeholder="Your photo"
                  name="url"
                />
              </div>
              <div className="my-1">
                <FontAwesomeIcon icon={faGlobeEurope} className="formSvg" />
                <select
                  onChange={this.changeValue}
                  name="country"
                  value={this.state.userData.country}
                  className=" fs-4 rounded-pill shadow border border-light noOtuline options"
                  placeholder="Choose your country"
                >
                  <option className="options" value="">
                    Choose your country
                  </option>
                  {this.state.countries.length > 0 &&
                    this.state.countries.map((country) => {
                      return (
                        <option
                          className="options"
                          value={country.name}
                          key={country.name}
                        >
                          {country.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div></div>
            </form>
            <button
              className="my-2 py-1 px-3  viewMore"
              onClick={this.sendForm}
            >
              <p className="fs-4 ">Sign Up</p>
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //filteredCities: state.cities.filterCitArr,
    userStatus: state.user.userStatus,
  };
};

const mapDispatchToProps = {
  postUser: userActions.postUser,
  // getCities: citiesActions.getAllCities,
  // filterCities: citiesActions.filterCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
