import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img from "../assets/cityNotFound.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import { useState, useEffect } from "react";

AOS.init();

const Cities = (props) => {
  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    toTop();
    async function getStatusCities() {
      try {
        await props.getCities();
      } catch (e) {
        toast.error("Failed to fetch", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        props.history.push("/");
        return false;
      }
      setLoading(false);
    }
    getStatusCities();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      <Header />
      <div className="imgCities d-flex justify-content-end container-fluid text-center">
        <h1 className="mb-5 animate__animated animate__rubberBand">
          Discover the world with us!
        </h1>
        <input
          type="text"
          className="css-input"
          onChange={(e) => props.filterCities(e)}
          placeholder="search a city..."
        />
      </div>
      <div className=" container-fluid linearBack">
        <div className="row">
          {props.allCitiesArr.length === 0 ? (
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h1>Oops! There are not results for your search</h1>
              <h2>Try another one!</h2>
              <img src={img} alt="this is error search" />
            </div>
          ) : (
            props.allCitiesArr.map((city) => {
              return (
                <Link
                  data-aos="zoom-in"
                  key={city._id}
                  to={`/city/${city._id}`}
                  className="col-md-6 col-sm-12 py-4 text-decoration-none"
                >
                  <div className=" d-flex justify-content-center ">
                    <div
                      className="cityCard d-flex align-items-center shadow"
                      style={{
                        backgroundImage: `url(${city.image})`,
                      }}
                    >
                      <h3 className=" text-white text-center cityTitle">
                        {city.name} - {city.country}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allCitiesArr: state.cities.allCitiesArr,
  };
};

const mapDispatchToProps = {
  getCities: citiesActions.getAllCities,
  filterCities: citiesActions.filterCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);

// PARA SOLUCIONAR EL ERROR DE ESLINT, en el useEffect, para decirle que la props no va a cambiar
// eslint-disable-next-line react-hooks/exhaustive-deps
