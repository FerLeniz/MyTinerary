import axios from "axios";

const userActions = {
  postUser: (user) => {
    return async (dispatch) => {
      let resp = await axios.post("http://localhost:4000/api/signUpUser", {
        ...user,
      });
      if (resp.data.success) {
        dispatch({ type: "LOG_USER", payload: resp.data.response });
      }
      return resp;
    };
  },
  logUser: (user) => {
    return async (dispatch) => {
      let res = await axios.post("http://localhost:4000/api/logInUser", {
        ...user,
      });

      if (res.data.success) {
        dispatch({ type: "LOG_USER", payload: res.data.response });
      }
      return res;
    };
  },
  logOut: () => {
    return (dispatch) => {
      dispatch({ type: "LOG_OUT" });
    };
  },
  anticipateLogInLS: (token, name, url) => {
    return (dispatch) => {
      dispatch({ type: "LOG_USER", payload: { token, name, url } });
    };
  },
};

export default userActions;
