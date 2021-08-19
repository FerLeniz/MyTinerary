import video from "../assets/video.mp4";
import image from '../assets/logo.png';

const TextAndVideo = () => {
  return (
    <>
      <video id="video" src={video} autoPlay muted loop></video>
      <div className="d-flex justify-content-center text-center">
        <div className="contentVideo">
        <img src={image} alt="logo" />
          <h1 className="animate__animated animate__rubberBand">MyTinerary</h1>
          {/* <h2 className="animate__animated animate__zoomIn fst-italic">
            Find your perfect trip, designed by insiders who know
            and love their cities!
          </h2> */}
        </div>
      </div>
    </>
  );
};

export default TextAndVideo;
