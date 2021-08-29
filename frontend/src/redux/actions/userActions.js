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
      return dispatch({ type: "LOG_OUT" });
    };
  },
  anticipateLogInLS: (token) => {
    return async (dispatch) => {
      try {
        let res = await axios.get("http://localhost:4000/api/verifyToken", {
          headers: { Authorization: "Bearer " + token },
        });
        dispatch({
          type: "LOG_USER",
          payload: { token, name: res.data.name, url: res.data.url },
        });
      } catch (e) {
       return dispatch({ type: "LOG_OUT" });
      }
    };
  },
};

export default userActions;
