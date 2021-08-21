import axios from "axios";

const itineraryActions = {
  getItineraries: (id) => {
    return (dispatch) => {
      axios
        .get("http://localhost:4000/api/itineraries/" + id)
        .then((res) => {
          dispatch({ type: "GET_ITINERARIES", payload: res.data.response });
        })
        .catch((error) => console.log(error));
    };
  },
};

export default itineraryActions;
