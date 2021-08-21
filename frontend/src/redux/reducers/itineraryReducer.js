const itineraryReducer = (state = { itinerary: [] }, action) => {
  switch (action.type) {
    case "GET_ITINERARIES":
      return {
        ...state,
        itinerary: action.payload,
      };
    default:
      return state;
  }
};

export default itineraryReducer;
