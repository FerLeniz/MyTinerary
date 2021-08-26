const initState = {
  userStatus: '',
  name:null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "POST_USER":
      return {
        ...state,
        userStatus: action.payload,
      };
    case "LOG_USER":
      localStorage.setItem('userLogged', JSON.stringify({ }))
      localStorage.setItem('token', action.payload)
      return {
          ...state,
          userStatus: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
