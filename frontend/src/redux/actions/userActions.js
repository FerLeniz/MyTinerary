import axios from "axios";

const citiesActions = {
  postUser: (user) => {
    return (dispatch) => {
      axios.post("http://localhost:4000/api/signUpUser", user).then((res) => {
        dispatch({ type: "POST_USER", payload: res.data.response });
      });
    };
  },
  logUser: (user) => {
    console.log("cae en ACTIONS");
    return async (dispatch) => {
      let res = await axios.post("http://localhost:4000/api/logInUser", user);
      
      if (res.data.success) {
        dispatch({ type: "LOG_USER", payload: res.data.response });
        console.log(user)
      } else {
        throw new Error(res.data.response);
      }
      return res;
    };
  },
  logOut: () => {
    return (dispatch) => {
      dispatch({ type: "LOG_OUT" });
    };
  },
};

export default citiesActions;
