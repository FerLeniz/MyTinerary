import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faClock } from "@fortawesome/free-solid-svg-icons";
import { useState} from "react";

const Itineraries = (props) => {
  const [button, setButton] = useState({
    class: "d-none",
    textContent: "View More",
  });

  const {
    itinerary: {
      imagePlace,
      name,
      imagePerson,
      duration,
      price,
      hashtags,
      sentence,
      likes,
      title
    },
  } = props;

  const changeStatus = (e) => {
    let text = e.target.textContent;
    setButton(
      text === "View More"
        ? { textContent: "View Less", class: "transitions" }
        : { textContent: "View More", class: "d-none" }
    );
  };

  return (
    
      <div className="row my-5 shadow rounded ">
      <div className="col-12 ">
            <h1 className="titleItinerary row rounded text-center py-1 px-1">{title}</h1>
            <div className=" col-12 d-flex flex-row ">
            {hashtags.map((word) => (
              <h4 key={word} className="mx-2">
                {word}
              </h4>
            ))}
            </div>
          </div>
        <div className="  col-md-4 d-flex justify-content-center">
          <div
            className="imgItinerary"
            style={{ backgroundImage: `url(${imagePlace})` }}
          ></div>
        </div>
        <div className="col-sm-12 col-md-8 ">
          <div className="d-flex flex-row align-items-center">
            <img alt="tourist" className="imgPerson" src={imagePerson} />
            <h2 className="px-3">{name}</h2>
          </div>
          <h4 className="d-flex justify-content-start ">"{sentence}"</h4>
          <div className="d-flex flex-row">
            <span className="money">{"💵".repeat(price)}</span>
          </div>
          <div className="d-flex flex-row align-items-center">
            <FontAwesomeIcon icon={faClock} className="europeSvg px-1" />
            <h3>Duration:{duration} hs</h3>
          </div>
          <div className="d-flex flex-row align-items-center">
            <h3 className="px-3">Do you like it?</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fillRule="currentColor"
              className="bi bi-heart svgHeart text-danger "
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fillRule="currentColor"
              className="bi bi-heart-fill svgHeart text-danger d-none"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            <span className="fs-4 px-2">{likes}</span>
          </div>
        </div>
        <div className={button.class}>
          <div className="col-12 otherPage bg-warning fs-1 ">Under Construction</div>
        </div>
        <div className="col-12 ">
          <button onClick={changeStatus} className="viewMore py-2 px- my-3">
            {button.textContent}
          </button>
        </div>
      </div>
  );
};

export default Itineraries;