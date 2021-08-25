import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export default class SignIn extends React.Component {
  render() {
    return (
      <>
        <Header />

        <div className="container  text-center">
          <div>
            <h1>Sign in</h1>
            <h3>Enter to your account!</h3>
          </div>
          <div className="col-12">
            <form className=" my-2 titleItinerary  rounded shadow  d-flex justify-content-center flex-column">
              <div className="my-1  ">
                <FontAwesomeIcon icon={faUser} className="formSvg" />
                <input
                  className=" fs-4 rounded-pill shadow border border-light noOtuline"
                  type="text"
                  placeholder="First Name"
                  id="fName"
                  name="fName"
                ></input>
              </div>
              <div className="my-1">
                <FontAwesomeIcon icon={faUser} className="formSvg" />
                <input
                  className=" fs-4 rounded-pill shadow border border-light noOtuline"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                />
              </div>
              <div>
                <button className="my-2 py-1 px-3  viewMore">
                  <p className="fs-4 ">Sign In</p>
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
