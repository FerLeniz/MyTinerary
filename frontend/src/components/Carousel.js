import Carousel from "react-bootstrap/Carousel";
import { useState } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Carusel = ({cities}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h2 className="text-center carouselTitle fs-1 " data-aos="fade-up">Popular MYtineraries</h2>
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        {cities.map((cityGroup, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="containerCarousel">
                {cityGroup.map((city) => {
                  return (
                    <div
                      className="photo shadow"
                      key={city.id}
                      style={{ backgroundImage: `url('${city.url}')` }}
                    >
                      <h3 className="photoTitle">{city.name}</h3>
                    </div>
                  );
                })}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Carusel;