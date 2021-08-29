import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userActions from "../redux/actions/userActions";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        email: "",
        password: "",
        error: null,
      },
    };

    this.changeValue = this.changeValue.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.toTop = this.toTop.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  componentDidMount() {
    this.toTop();
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
      if (stat.password === "" || stat.email === "") {
        // toast.error("Please complete all fields", {
        //   position: "top-right",
        //   autoClose: 5000,
        // });
        this.setState({
          error: "Please complete all fields",
          inputError: null,
        });
      } else {
        let result = await this.props.logUser(this.state.userData);
        if (result.data.success) {
          toast.success("Welcome to adventure", {});
        } else {
          // throw new Error("Network error");
         throw result.data.error 
        }
      }
    } catch (e) {
      toast.error(e, {
        position: "top-right",
      });
    }
  }

  responseGoogle =  (response) => {
    let user = {
      email: response.profileObj.email,
      password: response.profileObj.googleId,
      flagGoogle: true,
    };
     this.props.logUser(user)
    .then(res=>{
      if (!res.data.success) {
        toast.error("User exits! Please log in...", {
          position: "top-right",
        });
        this.setState({
          error: "No complete well, try again....",
          inputError: null,
        });
      } else {
        toast.success("Welcome to adventure", {
          position: "top-right",
        });
      }
    })
    .catch(err=>{
      console.log(err.message)
    } );
  };

  validateForm(e) {
    let nameField = e.target.name;
    let value = e.target.value;

    if (nameField === "email" && !value.includes("@")) {
      this.setState({
        error: "Complete well with @",
      });
    } else if (nameField === "password" && value.length < 4) {
      this.setState({
        error: "Must be at least 4 characters long",
      });
    }else{
      this.setState({
        error:null,
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        <ToastContainer />
        <div className="container-fluid text-center imgForm">
          <div>
            <h1>Sign in</h1>
            <h3>Enter to your account... or</h3>
            <h4>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="fw-bold text-decoration-none text-dark fs-bold"
              >
                Sign up here!
              </Link>
            </h4>
          </div>
          <div className="col-12">
            <form className=" my-2 titleItinerary d-flex justify-content-center flex-column">
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
            </form>
            <h5 className="textError">{this.state.error}</h5>
            <div>
              <button
                className="my-2 py-1 px-3  viewMore"
                onClick={this.sendForm}
              >
                <p className="fs-4 ">Sign In</p>
              </button>
            </div>
            <GoogleLogin
              className=" text-center viewMore my-3 shadow"
              clientId="65679480973-p575cghuvmfa66oindocsnolt53o1kcn.apps.googleusercontent.com"
              buttonText="Sign in with Google"
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

const mapDispatchToProps = {
  logUser: userActions.logUser,
};

export default connect(null, mapDispatchToProps)(SignIn);
