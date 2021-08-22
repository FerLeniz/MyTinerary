import axios from "axios";

const citiesActions = {
  getAllCities: () => {
    return async  (dispatch) => {
      let resp = await axios
      .get("http://localhost:4000/api/dataCities")
           if (!resp.data.success) {
             throw new Error("Backend and Database problem");
           }
          let status =resp.data.response
          dispatch({ type: "GET_ALL_CITIES", payload: status });
        
    };
  },
  filterCities: (e) => {
    let inputName = e.target.value;
    return (dispatch) => {
      dispatch({ type: "FILTER_CITIES", payload: inputName });
    };
  },
};

export default citiesActions;
