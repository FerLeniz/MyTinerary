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
import { Link } from "react-router-dom";
//65679480973-p575cghuvmfa66oindocsnolt53o1kcn.apps.googleusercontent.com   --> googleID
//t8LbZcQ285xQiufSiopJzSqb -->client secret

let source = axios.CancelToken.source();

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: null,
      userData: {
        name: "",
        lastName: "",
        email: "",
        password: "",
        url: "",
        country: "",
      },
      errors: { name: "", lastName: "", email: "", password: "", url: "" },
      //inputError: 'No errors',
    };

    source = axios.CancelToken.source();
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

   allCountries = [
    "Antigua y Barbuda",
    "Argentina",
    "Bahamas",
    "Barbados",
    "Belice",
    "Bolivia",
    "Brasil",
    "Canadá",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Ecuador",
    "El Salvador",
    "Estados Unidos",
    "Granada",
    "Guatemala",
    "Guyana",
    "Haití",
    "Honduras",
    "Jamaica",
    "México",
    "Nicaragua",
    "Panamá",
    "Paraguay",
    "Perú",
    "Santa Lucía",
    "Surinam",
    "Trinidad y Tobago",
    "Uruguay",
    "Venezuela",
  ]

  componentDidMount() {
    this.toTop();
     this.setState({countries:this.allCountries})
    // axios.get("https://restcountries.eu/rest/v2/all",{cancelToken: source.token
    // }).then((res) => {
    //   this.setState({
    //     countries: res.data.filter((country) => country.name.length < 12),
    //   });
    // });
  }

  componentWillUnmount(){
    this.toTop();
    if (source) {
      source.cancel("Landing Component got unmounted");
    }
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
    e.preventDefault();
   let resp= await this.props.postUser(this.state.userData)
   console.log(resp)
    // .then(res =>{
    //   if (res.data.success) {
    //     toast.success("Welcome to adventure", {});
    //   } else {
    //     this.setState({
    //       inputError: 'Some inputs went wrong',
    //     });
    //   }
    // })
    // .catch(err=>toast.error(err.message, {position: "top-right"}))
  }

  responseGoogle = async (response) => {
    let newUser = {
      name: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
      password: response.profileObj.googleId,
      url: response.profileObj.imageUrl,
      country: "Argentina",
      google: true,
    };
    let result = await this.props.postUser(newUser);
    if (!result.data.success) {
      console.log(result)
      toast.error("User exits! Please log in...", {
        position: "top-right",
      });
      this.setState({
        error: "Complete again,please",
        inputError: null,
      });
    } else {
      toast.success("Welcome to adventure", {
        position: "top-right",
      });
    }
  };

  // validateInput(e) {
  //   e.preventDefault();
  //   let inputName = e.target.name;
  //   this.props.postUser(this.state.userData)
  //   .then(res=>{
  //     if (!res.data.success) {
  //       let value = res.data.errors.filter((err) => err.path[0] === inputName);
  //       if (value[0] && value[0].path[0] === inputName) {
  //         this.setState({
  //           inputError: value[0].message,
  //           error: null,
  //         });
  //       } else {
  //         this.setState({ inputError: "No errors" });
  //       }
  //     } else {
  //       this.setState({ inputError: "No errors" });
  //     }
  //   })
  //   .catch(err=>console.log(err.message))
  // }

  render() {
    return (
      <>
        <ToastContainer />
        <Header />
        <div className="container-fluid  text-center imgForm">
          <div>
            <h1>Sign up</h1>
            <h3>Join us! It's free and takes less han 30 seconds</h3>
            <h4>
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-decoration-none text-dark fw-bold"
              >
                Sign In here!
              </Link>
            </h4>
            {/* <h3 className="textError" >{this.state.inputError}</h3> */}
          </div>
          <div className="col-12">
            <form className=" my-2 titleItinerary  rounded  d-flex justify-content-center flex-column">
              <div className="my-1 ">
                <FontAwesomeIcon icon={faUser} className="formSvg" />
                <input
                  // onBlur={(e) => this.validateInput(e)}
                  onChange={this.changeValue}
                  type="text"
                  className=" fs-4 rounded-pill shadow border border-light noOtuline borderInput"
                  placeholder="First Name"
                  name="name"
                ></input>
              </div>
              <div className="my-1">
                <FontAwesomeIcon icon={faUser} className="formSvg" />
                <input
                  //onBlur={(e) => this.validateInput(e)}
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
                  //onBlur={(e) => this.validateInput(e)}
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
                  //onBlur={(e) => this.validateInput(e)}
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
                  //onBlur={(e) => this.validateInput(e)}
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
                    {this.allCountries.map((country) => {
                      return (
                        <option
                          className="options"
                          value={country}
                          key={country}
                        >
                          {country}
                        </option>
                      );
                    })}  
                </select>
              </div>
              <div></div>
            </form>
            <div className="">
              <button
                className="my-2 py-1 px-3 viewMore"
                onClick={this.sendForm}
              >
                <p className="fs-4 ">Sign Up</p>
              </button>
            </div>
            <GoogleLogin
              className=" text-center viewMore shadow my-3"
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
