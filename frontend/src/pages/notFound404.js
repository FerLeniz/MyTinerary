import Header from "../components/Header";
import Footer from "../components/Footer";
import imgError from "../assets/giphyError.gif";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NotFound404 = () => {
  return (
    <>
      <Header />
      <div className=" d-flex flex-column justify-content-center align-items-center">
        <img className="w-25" src={imgError} alt="There's an error 404" />
        <Link to="/">
            <Button
              className="my-3 py-3 px-2 shadow bg-danger"
              variant="primary"
              size="lg"
            >
              Back to Home
            </Button>{" "}
          </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound404;
