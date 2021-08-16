import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

export default class City extends React.Component {
  state = {
    nameCity: "",
    imgCity: "",
    descCity: "",
    loading: true,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/api/city/${this.props.match.params.id}`)
      .then((res) => {
        const respAxios = res.data.response;
        const imgCity = respAxios.image;
        const nameCity = respAxios.name;
        const descCity = respAxios.description;

        if (res.data.success) {
          this.setState({
            nameCity: nameCity,
            imgCity: imgCity,
            descCity: descCity,
            loading: false,
          });
        } else {
          console.error(res.data.response)
          throw new Error("City not found" )
        }
      })
      .catch((error) => {
        toast.error(error.message.includes('City')?error.message:'Failed to fetch', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
        <div className="otherPage bg-warning d-flex flex-column justify-content-center">
          <h1 className="text-dark fs-bold">Under construction...</h1>
          <Link to="/Cities">
            <Button
              className="my-3 py-1 px-2 shadow bg-gradient"
              variant="primary"
              size="lg"
            >
              <p className="fs-2 ">Back to Cities</p>
            </Button>{" "}
          </Link>
        </div>

        <Footer />
      </>
    );
  }
}