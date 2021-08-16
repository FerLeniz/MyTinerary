import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { Link } from "react-router-dom";
import img from "../assets/giphyTourist.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from '../components/Loader'

AOS.init();

export default class Cities extends React.Component {
  state = {
    firstArr: [],
    actualArr: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/dataCities")
      .then((res) => {
        const arr = res.data.response;

        if (res.data.response) {
          this.setState({
            firstArr: [...arr],
            actualArr: arr,
            loading: false,
          });
        } else {
          toast.error(res.data.response, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      })
      .catch((error) => toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }));
  }

  render() {
    if (this.state.loading) {
      return (
        <>
          <Header />
          <Loader/>
          <Footer />
        </>
      );
    }

    //onChange event
    const filterCountry = (e) => {
      let inputName = e.target.value;

      this.setState({
        actualArr: this.state.firstArr.filter((city) => {
          return city.name
            .toLowerCase()
            .startsWith(inputName.trim().toLowerCase());
        }),
      });
    };

    return (
      <>
      <ToastContainer />
        <Header />
        <div className="imgCities d-flex justify-content-end container-fluid text-center">
          <h1 className="mb-5 animate__animated animate__rubberBand">
            Find cities!
          </h1>
          <Row className="shadow my-2 ">
            <Form.Label column="lg" lg={2} className=""></Form.Label>
            <Col>
              <Form.Control
                className="shadow"
                size="md"
                type="text"
                placeholder="► Search a city..."
                onChange={filterCountry}
              />
            </Col>
          </Row>
        </div>
        <div className=" container-fluid ">
          <div className="row my-3 ">
            {this.state.actualArr.length === 0 ? (
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h1>Oops! There are not results for your search</h1>
                <h2>Try another one!</h2>
                <img src={img} alt="this is error search" />
              </div>
            ) : (
              this.state.actualArr.map((city) => {
                return (
                  <Link
                    data-aos="zoom-in"
                    key={city._id}
                    to={`/city/${city._id}`}
                    className="col-md-6 col-sm-12 my-3 text-decoration-none"
                  >
                    <div className=" d-flex justify-content-center shadow">
                      <div
                        className="cityCard d-flex align-items-center"
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
  }
}

// PARA SOLUCIONAR EL ERROR DE ESLINT, en el useEffect, para decirle que la props no va a cambiar
// eslint-disable-next-line react-hooks/exhaustive-deps
