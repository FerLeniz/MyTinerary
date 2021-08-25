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

export default class SignUp extends React.Component {
  state = {
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

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      this.setState({ countries: res.data });
    });
    console.log(this)
  }

  changeValue = (e) => {
    let value = e.target.value;
    const field = e.target.name;
    this.setState({
      ...this.state,
      userData: { ...this.state.userData, [field]: value },
    });
  };

  sendForm = (e) => {
    e && e.preventDefault();//let state =
  let stat=this.state.userData
    if (
      stat.password === "" || stat.firstname === "" || stat.country === "" || stat.email === "" || stat.url === "" || stat.lastName === ""
    ) {

       console.log(this)
      toast.error("Please complete all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log("caiste en elseeee");
      axios
        .post("http://localhost:4000/api/signUpUser")
        .then((res) => console.log(res))
        .catch(err => console.log(err))
    }
  };

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
                  onChange={this.changeValue}
                  type="text"
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
