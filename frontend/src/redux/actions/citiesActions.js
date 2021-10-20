import axios from "axios";

const citiesActions = {
  getAllCities: () => {
    return async (dispatch) => {
      let resp = await axios.get("https://mytineraryleniz.herokuapp.com/api/dataCities");
      if (!resp.data.success) {
        throw new Error("Backend and Database problem");
      }
      let status = resp.data.response;
      dispatch({ type: "GET_ALL_CITIES", payload: status });
    };
  },
  addCity:(dataCity)=>{
      return async (dispatch)=>{
        let resp= await axios.post("https://mytineraryleniz.herokuapp.com/api/dataCities",{...dataCity})
        console.log(resp)
        dispatch({type: "GET_ALL_CITIES"})//ponerpayload !!
      }
  },
  filterCities: (e) => {
    let inputName = e.target.value;
    return (dispatch) => {
      dispatch({ type: "FILTER_CITIES", payload: inputName });
    };
  },
};

export default citiesActions;
