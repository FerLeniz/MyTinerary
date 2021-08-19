import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import Itineraries from '../components/Itineraries';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faLanguage,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

export default class City extends React.Component {
  state = {
    nameCity: "",
    imgCity: "",
    descCity: "",
    languageCity: "",
    countryCity: "",
    moneyCity: "",
    loading: true,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/api/city/${this.props.match.params.id}`)
      .then((res) => {
        const {
          country,
          currentMoney,
          name,
          description,
          language,
          image,
        } = res.data.response;

        if (res.data.success) {
          this.setState({
            nameCity: name,
            imgCity: image,
            descCity: description,
            languageCity: language,
            countryCity: country,
            moneyCity: currentMoney,
            loading: false,
          });
        } else {
          console.error(res.data.response);
          throw new Error("City not found");
        }
      })
      .catch((error) => {
        toast.error(
          error.message.includes("City") ? error.message : "Failed to fetch",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        this.props.history.push("/cities");
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <>
          <Header />
          <Loader />
          <Footer />
        </>
      );
    }

    return (
      <>
        <Header />
        <div
          className="imgCity "
          style={{
            backgroundImage: `linear-gradient(rgba(26, 35, 41, 0.2), rgb(49, 37, 37)),url(${this.state.imgCity})`,
          }}
        >
          <h1>Welcome to {this.state.nameCity}</h1>
          <p className="text-center text-white fst-italic">
            {this.state.descCity}
          </p>
        </div>
        <div className="container text-center my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 my-3">
              <FontAwesomeIcon icon={faCoins} className="europeSvg" />
              <h3>{this.state.moneyCity}</h3>
            </div>
            <div className="col-sm-12 col-md-4 my-3">
              <FontAwesomeIcon icon={faGlobeAmericas} className="europeSvg" />
              <h3>{this.state.countryCity}</h3>
            </div>
            <div className="col-sm-12 col-md-4 my-3">
              <FontAwesomeIcon icon={faLanguage} className="europeSvg" />
              <h3>{this.state.languageCity}</h3>
            </div>
          </div>
          <Itineraries/>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Link to="/Cities">
            <button className="my-3 py-2 px-5  goldenButton">
              <p className="fs-3 ">Back to Cities</p>
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}
