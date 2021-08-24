import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default class SignIn extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <form>
            <div>
              <FontAwesomeIcon icon={faUser} className="europeSvg" />
              <input type="text" id="fname" name="fname"></input>
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} className="europeSvg" />
              <input type="text" id="fname" name="fname"></input>{" "}
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} className="europeSvg" />
              <input type="text" id="fname" name="fname"></input>{" "}
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} className="europeSvg" />
              <input type="text" id="fname" name="fname"></input>{" "}
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} className="europeSvg" />
              <input type="text" id="fname" name="fname"></input>{" "}
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} className="europeSvg" />
              <input type="text" id="fname" name="fname"></input>{" "}
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} className="europeSvg" />
              <input type="text" id="fname" name="fname"></input>{" "}
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} className="europeSvg" />
              <input type="text" id="fname" name="fname"></input>{" "}
            </div>
          </form>
        </div>

        <Footer />
      </>
    );
  }
}
