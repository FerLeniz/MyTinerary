import axios from "axios";

const citiesActions = {
  getAllCities: () => {
    return (dispatch, getState) => {
      axios
        .get("http://localhost:4000/api/dataCities")
        .then((res) =>
          dispatch({ type: "GET_ALL_CITIES", payload: res.data.response })
        );
    };
  },
  filterCities: (e) => {
    let inputName = e.target.value;
    return (dispatch, getState) => {
      dispatch({ type: "FILTER_CITIES", payload: inputName });
    };
  },
  findCity: (id) => {
    return (dispatch, getState) => {
      axios
        .get("http://localhost:4000/api/city/" + id)
        .then((res) => dispatch({ type: "FIND_CITY", payload: res.data.response})
        // .catch((err)=> console.log(err.message))
        );
    };
  },
};

export default citiesActions;
