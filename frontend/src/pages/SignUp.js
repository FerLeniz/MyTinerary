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
import GoogleLogin from "react-google-login";
//65679480973-p575cghuvmfa66oindocsnolt53o1kcn.apps.googleusercontent.com
//t8LbZcQ285xQiufSiopJzSqb -->client secret

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
      errors: { name: "", lastName: "", email: "", password: "", url: "" },
      error: null,
      inputError: null,
    };

    this.changeValue = this.changeValue.bind(this);
    this.sendForm = this.sendForm.bind(this);
    //this.validateInput = this.validateForm.bind(this);
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
    let result = await this.props.postUser(this.state.userData);
    if (result.data.success) {
      toast.success("Welcome to adventure", {});
    } else {console.log('Hola mica Marquez')
      console.log(result.data);
      this.setState({
        error: "No complete well, try again....",
        inputError: null,
      });
    }
  }

  responseGoogle = async (response) => {
    let newUser={
        name: response.profileObj.givenName,
        lastName:  response.profileObj.familyName,
        email:  response.profileObj.email,
        password:  response.profileObj.googleId,
        url:  response.profileObj.imageUrl,
        country:  "Argentina",
        google:true
    }
    let result = await this.props.postUser(newUser);
    if (!result.data.success) {
      console.log(result.data);
      this.setState({
        error: "No complete well, try again....",
        inputError: null,
      });
    } 
  };

  async validateInput(e) {
    
    e.preventDefault();
    let inputName = e.target.name;
    let result = await this.props.postUser(this.state.userData);
    if (!result.data.success) {
      console.log(result)
      let val = result.data.errors.filter((x) => x.path[0] === inputName);
      if (val[0]) {
        console.log(val)
        this.setState({
          inputError: val[0].message,
        });
      }
    } else {
      this.setState({ inputError: null });
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
            <h3 className="text-danger">{this.state.inputError}</h3>
          </div>
          <div className="col-12">
            <form className=" my-2 titleItinerary  rounded shadow  d-flex justify-content-center flex-column">
              <div className="my-1 ">
                <FontAwesomeIcon icon={faUser} className="formSvg" />
                <input
                  onBlur={(e) => this.validateInput(e)}
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
                  onBlur={(e) => this.validateInput(e)}
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
                  onBlur={(e) => this.validateInput(e)}
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
                  onBlur={(e) => this.validateInput(e)}
                  onChange={this.changeValue}
                  type="password"
                  className=" fs-4 rounded-pill shadow border border-light noOtuline"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div className="my-1">
                <FontAwesomeIcon icon={faImage} className="formSvg" />
                <input
                  onBlur={(e) => this.validateInput(e)}
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
            <h6 className="text-danger">{this.state.error}</h6>
            <div className="">
              <button
                className="my-2 py-1 px-3 viewMore"
                onClick={this.sendForm}
              >
                <p className="fs-4 ">Sign Up</p>
              </button>
              </div>
              <GoogleLogin
              className=" text-center "
                clientId="65679480973-p575cghuvmfa66oindocsnolt53o1kcn.apps.googleusercontent.com"
                buttonText="Create account with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userStatus: state.user.userStatus,
  };
};

const mapDispatchToProps = {
  postUser: userActions.postUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
