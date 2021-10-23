const initState = {
  token: null,
 name:null,
 url:null,
 admin:null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "POST_USER":
      return {
        ...state,
        token: action.payload.token,
        name:action.payload.name,
        url:action.payload.url,
        admin:action.payload.admin
      };
    case "LOG_USER":
      localStorage.setItem("token",action.payload.token)
      localStorage.setItem("name",action.payload.name)
      localStorage.setItem("url",action.payload.url)
      localStorage.setItem("admin",action.payload.admin)
      return {
        ...state,
        token: action.payload.token,
        name:action.payload.name,
        url:action.payload.url,
        admin:action.payload.admin
      };
    case "LOG_OUT":
      localStorage.removeItem("token")
      localStorage.removeItem("name")
      localStorage.removeItem("url")
      localStorage.removeItem("admin")
      return {
        token: null,
        name:null,
        url:null
      };
    default:
      return state;
  }
};

export default userReducer;
