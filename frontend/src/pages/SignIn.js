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

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        email: "",
        password: "",
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
        toast.error("Please complete well fields", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        let result = await this.props.logUser(this.state.userData);
        if (result.data.success) {
          toast.success("Welcome to adventure", {
            // onClose: () => {
            //   this.props.history.push("/");
            // },
          });
        } else {
          throw new Error("Network error");
        }
      }
    } catch (e) {
      console.log(e);
      toast.error("there´s a problem", {
        position: "top-right",
      });
    }
  }

  responseGoogle = async (response) => {
    let user={
        email:  response.profileObj.email,
        password:  response.profileObj.googleId,
        flagGoogle:true
    }
    let result = await this.props.logUser(user);
    if (!result.data.success) {
      console.log(result.data);
      this.setState({
        error: "No complete well, try again....",
        inputError: null,
      });
    } 
  };

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
        <Header />
        <ToastContainer />
        <div className="container  text-center">
          <div>
            <h1>Sign in</h1>
            <h3>Enter to your account!</h3>
          </div>
          <div className="col-12">
            <form className=" my-2 titleItinerary  rounded shadow  d-flex justify-content-center flex-column">
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
            <div>
              <button
                className="my-2 py-1 px-3  viewMore"
                onClick={this.sendForm}
              >
                <p className="fs-4 ">Sign In</p>
              </button>
            </div>
            <GoogleLogin
              className=" text-center "
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
