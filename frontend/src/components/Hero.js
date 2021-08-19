// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Hero = () => {
  return (
    <div className="imgHero text-center">
      <h1 className="fs-1" data-aos="fade-right">
        "Find your perfect trip, designed by <br /> insiders who know and love
        their cities..."
      </h1>
      <h2 className="my-3" data-aos="fade-left">Hey! discover your favourite place</h2>
      <Link to="/Cities" data-aos="fade-left">
        <button className="my-3 py-2 px-5  goldenButton" data-aos="flip-up">
          <p className="fs-3 ">Click here</p>
        </button>
      </Link>
    </div>
  );
};

export default Hero;
