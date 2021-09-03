import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const ItemCarousel = (props) => {
    {console.log(props)}
  <>
    <Carousel.Item>
      <div
        className="d-block w-100 photoActivity"
        style={{
          backgroundImage: `url(${props.activity.activities[0].image})`,
        }}
        alt="Third slide"
      ></div>
      <Carousel.Caption>
        <h3>{props.activity.activities[0].title}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </>;
};

export default ItemCarousel;
