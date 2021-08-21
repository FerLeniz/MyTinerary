import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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

class City extends React.Component {
  state = {
    loading: true,
  };

  // state = { idCity:{city: null,loading: true} };
  componentDidMount() {
    this.setState({
      loading: false,
    });
    const idCityRoute = this.props.match.params.id;
    this.props.findCity(idCityRoute);
    this.props.getItineraries(idCityRoute);
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <>
        <Header />
        <div
          className="imgCity "
          style={{
            backgroundImage: `linear-gradient(rgba(26, 35, 41, 0.2), rgb(49, 37, 37)),url(${this.props.oneCity.image})`,
          }}
        >
          <h1>Welcome to {this.props.oneCity.name}</h1>
          <p className="text-center text-white fst-italic">
            {this.props.descCity}
          </p>
        </div>
        <div className="container text-center my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 my-3">
              <FontAwesomeIcon icon={faCoins} className="europeSvg" />
              <h3>{this.props.oneCity.currentMoney}</h3>
            </div>
            <div className="col-sm-12 col-md-4 my-3">
              <FontAwesomeIcon icon={faGlobeAmericas} className="europeSvg" />
              <h3>{this.props.oneCity.country}</h3>
            </div>
            <div className="col-sm-12 col-md-4 my-3">
              <FontAwesomeIcon icon={faLanguage} className="europeSvg" />
              <h3>{this.props.oneCity.language}</h3>
            </div>
          </div>
          {this.props.showItineraries.length === 0 ? (
            <div>No itineraries found </div>
          ) : (
            this.props.showItineraries.map((itinerary) => (
              <Itinerary key={itinerary._id} itinerary={itinerary} />
            ))
          )}
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

const mapStateToProps = (state) => {
  return {
    allCities: state.cities.allCitiesArr,
    oneCity: state.cities.foundCity,
    showItineraries: state.itinerary.itinerary,
  };
};

const mapDispatchToProps = {
  getCities: citiesActions.getAllCities,
  findCity: citiesActions.findCity,
  getItineraries: itineraryActions.getItineraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);

// axios
//   .get(`http://localhost:4000/api/city/${this.props.match.params.id}`)
//   .then((res) => {
//     const {
//       country,
//       currentMoney,
//       name,
//       description,
//       language,
//       image,
//     } = res.data.response;
//     if (res.data.success) {
//       this.setState({
//         nameCity: name,
//         imgCity: image,
//         descCity: description,
//         languageCity: language,
//         countryCity: country,
//         moneyCity: currentMoney,
//         loading: false,
//       });
//     } else {
//       console.error(res.data.response);
//       throw new Error("City not found");
//     }
//   })
//   .catch((error) => {
//     toast.error(
//       error.message.includes("City") ? error.message : "Failed to fetch",
//       {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       }
//     );
//     this.props.history.push("/cities");
//   });
