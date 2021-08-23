import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import Itinerary from "../components/Itinerary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faLanguage,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itineraryActions from "../redux/actions/itineraryActions";
import imgItinerary from "../assets/itineraryNotFound.png";

class City extends React.Component {
  state = {
    loading: true,
    city: {},
  };

  componentDidMount() {
    const idCityRoute = this.props.match.params.id;

    this.props.getItineraries(idCityRoute);

    if (
      this.props.allCities.length > 0 &&
      this.props.showItineraries.length > 0
    ) {
      this.setState({
        loading: false,
        city: this.props.allCities.find((city) => city._id === idCityRoute),
      });
    } else {
      toast.error("information not found", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.props.history.push("/cities");
    }
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <>
        <ToastContainer />
        <Header />
        <div
          className="imgCity "
          style={{
            backgroundImage: `linear-gradient(rgba(26, 35, 41, 0.2), rgb(49, 37, 37)),url(${this.state.city.image})`,
          }}
        >
          <h1>Welcome to {this.state.city.name}</h1>
          <p className="text-center text-white fst-italic">
            {this.props.descCity}
          </p>
        </div>
        <div className="container text-center my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 my-3">
              <FontAwesomeIcon icon={faCoins} className="europeSvg" />
              <h3>{this.state.city.currentMoney}</h3>
            </div>
            <div className="col-sm-12 col-md-4 my-3">
              <FontAwesomeIcon icon={faGlobeAmericas} className="europeSvg" />
              <h3>{this.state.city.country}</h3>
            </div>
            <div className="col-sm-12 col-md-4 my-3">
              <FontAwesomeIcon icon={faLanguage} className="europeSvg" />
              <h3>{this.state.city.language}</h3>
            </div>
          </div>
          {this.props.showItineraries === "There are not itineraries" || this.props.showItineraries.length < 1? (
            <div>
              <img
                className="w-50"
                src={imgItinerary}
                alt="Itinerary not found"
              />
              <h2>
                Oh! It seems that there are not itineraries for this city yet!
              </h2>
              <h3>Please, feel free to post the first one!</h3>
            </div>
          ) : (
            this.props.showItineraries.map((itinerary) => (
              <Itinerary key={itinerary._id} itinerary={itinerary} />
            ))
          )}
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Link to="/cities">
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

const mapStateToProps = (state) => {
  return {
    allCities: state.cities.allCitiesArr,
    showItineraries: state.itinerary.itinerary,
  };
};

const mapDispatchToProps = {
  getCities: citiesActions.getAllCities,
  getItineraries: itineraryActions.getItineraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
