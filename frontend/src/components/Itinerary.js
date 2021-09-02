import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMoneyBillWave,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import itineraryActions from "../redux/actions/itineraryActions";
import { ToastContainer, toast } from "react-toastify";

const Itineraries = (props) => {
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
      title,
      _id,
      userLiked,
    },
  } = props;

  const [button, setButton] = useState({
    class: "d-none",
    textContent: "View More",
  });
  const [loadingHeart, setLoadingHeart] = useState(true);
  const [activities, setActivities] = useState([]);
  const [likesCant, setLikesCant] = useState(likes);
  const [usersLikes, setUsersLikes] = useState(userLiked);
  const [actualLike, setActualLike] = useState(false);

  const response = async () => {
    let respAxios = await props.getActivities(_id);
    setActivities(respAxios);
  };

  const likeStatus = async () => {
    if (!props.userStatus) {
      toast.error("Please, log in to like this.");
    } else {
      setLoadingHeart(false);
      const response = await props.viewLikes(_id, props.name);
      setLikesCant(response.likes);
      setUsersLikes(response.usersLikes);
      setActualLike(response.btnStatus);
      setLoadingHeart(true);
      console.log(actualLike);
    }
  };

  const changeStatus = (e) => {
    let text = e.target.textContent;
    response();
    setButton(
      text === "View More"
        ? { textContent: "View Less", class: "transitions" }
        : { textContent: "View More", class: "d-none" }
    );
  };

  useEffect(() => {
    if (props.name) {
      if (usersLikes.includes(props.name)) {
        setActualLike(true);
      } else {
        setActualLike(false);
      }
    } else {
      console.log(props.name);
      console.log(actualLike);
      setActualLike(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userStatus]);

  return (
    <div className="row my-5 shadow rounded">
      <ToastContainer />
      <div className="col-12 ">
        <h1 className="titleItinerary row rounded text-center py-1 px-1">
          {title}
        </h1>
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
          {Array(price)
            .fill(null)
            .map(
              (unit, index) =>
                (unit = (
                  <FontAwesomeIcon
                    key={index}
                    icon={faMoneyBillWave}
                    className="europeSvg px-1"
                  />
                ))
            )}
        </div>
        <div className="d-flex flex-row align-items-center">
          <FontAwesomeIcon icon={faClock} className="europeSvg px-1" />
          <h3>Duration:{duration} hs</h3>
        </div>
        <div className="d-flex flex-row align-items-center">
          <h3 className="px-3">Do you like it?</h3>
          <div onClick={loadingHeart ? likeStatus : null} className="cursor">
            {actualLike ? (
              <i className="fas fa-heart heartIcon "></i>
            ) : (
              <i className="far fa-heart heartIcon "></i>
            )}
          </div>
          <span className="fs-4 px-1">{likesCant}</span>
        </div>
      </div>
      <div className={button.class}>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-6 rounded">
              <Carousel>
                {activities !== "There are not itineraries" &&
                activities.length > 0 ? (
                  activities.map((activity) => (
                    <Carousel.Item key={activity._id}>
                      <div
                        className="d-block w-100 photoActivity"
                        style={{
                          backgroundImage: `url(${activity.activities[0].image})`,
                        }}
                        alt="Third slide"
                      ></div>
                      <Carousel.Caption>
                        <h3>{activity.activities[0].title}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))
                ) : (
                  <p>There aren´t activities :( </p>
                )}
              </Carousel>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="divComments">
                
                {/* <div className=" my-3 shadow">
                  <div className="d-flex flex-row align-items-center">
                    <img
                      className="personActivity"
                      alt="person"
                      src="https://th.bing.com/th/id/R.480b9fbb6640d39c818ab51e94101957?rik=Jy%2bJ8i4DRUDVIg&riu=http%3a%2f%2fwww.vignette3.wikia.nocookie.net%2fsimpsons%2fimages%2f5%2f54%2fImagemoe3.jpg%2frevision%2flatest%2fscale-to-width-down%2f185%3fcb%3d20130623173027&ehk=iVNioWslLDaAVS8QoO3kJ2WHiojIBik6DTplntWnz5A%3d&risl=&pid=ImgRaw&r=0"
                    />
                    <p>Moe Siklack</p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center my-2 comment bg-gradient rounded-pill">
                    <p>Este es mi gran comentario y me parecio fantastico</p>
                  </div>
                </div> */}
              </div>
              <div className="my-2 d-flex align-items-center justify-content-center ">
                <input className="inputComments" type="text" />
                <FontAwesomeIcon icon={faReply} className="europeSvg px-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 ">
        <button onClick={changeStatus} className="viewMore py-2 px- my-3">
          {button.textContent}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userStatus: state.user.token,
    name: state.user.name,
  };
};

const mapDispatchToProps = {
  getActivities: itineraryActions.getActivities,
  viewLikes: itineraryActions.viewLikes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
