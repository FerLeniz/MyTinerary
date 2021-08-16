import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Hero = () => {
  return (
    <div className="imgHero">
      <p className="popularText fs-1" data-aos="fade-right"> Hey ! discover your favourite city </p>
      <Link to="/Cities" data-aos="fade-left">
        <Button className="my-3 py-2 px-5 shadow bg-gradient" variant="primary" size="lg">
          <p className="fs-2 ">Click here</p>
        </Button>
        
      </Link>
    </div>
  );
};

export default Hero;
