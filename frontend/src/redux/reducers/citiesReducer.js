const initState = {
  allCitiesArr: [],
  filterCitArr: [],
  foundCity: {},
};

const citiesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_CITIES":
      return {
        ...state,
        allCitiesArr: action.payload,
        filterCitArr: action.payload,
      };
    case "FILTER_CITIES":
      return {
        ...state,
        allCitiesArr: state.filterCitArr.filter((city) =>
          city.name
            .toLowerCase()
            .startsWith(action.payload.trim().toLowerCase())
        ),
      };
    case "FIND_CITY":
      return {
        ...state,
        foundCity: action.payload
      };
    default:
      return state;
  }
};

export default citiesReducer;
