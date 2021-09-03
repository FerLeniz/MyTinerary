import axios from "axios";

const itineraryActions = {
  getItineraries: (id) => {
    return (dispatch) => {
      axios.get("http://localhost:4000/api/itineraries/" + id).then((res) => {
        dispatch({ type: "GET_ITINERARIES", payload: res.data.response });
      });
    };
  },
  getActivities: (id) => {
    return async (dispatch) => {
      try {
        let axiosResp = await axios.get(
          "http://localhost:4000/api/activities/" + id
        );
        return axiosResp.data.response;
      } catch (error) {
        console.log(error);
      }
    };
  },
  viewLikes: (id, name) => {
    return async (dispatch) => {
      try {
        const resp = await axios.post(
          "http://localhost:4000/api/itinerary/like/" + id,
          { data: { email: name } }
        );
        console.log(id);
        return resp.data.response;
      } catch (error) {
        console.log(error);
      }
    };
  },
  addComment: (comment, id) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/itinerary/comment/" + id,
          comment,
          {
            headers: {
              Authorization: "Bearer " + comment.token,
            },
          }
        );
        return response.data.response;
      } catch (error) {
        console.log(error);
      }
    };
  },
  deleteComment: (idComment, id) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.delete(
          "http://localhost:4000/api/itinerary/comment/" +
            id,
          { data: { id: idComment } }
        );
        console.log(response)
        return response.data.response;
      } catch (error) {
        console.log(error);
      }
    };
  },
  editComment: (id, idComment, comment) => {
    const dataComment = {
      idComment: idComment,
      comment: comment,
    };
    return async (dispatch, getState) => {
      try {
        const response = await axios.put(
          "http://localhost:4000/api/itinerary/comment/" +
            id,
          dataComment
        );
        return response.data.response;
      } catch (error) {
        console.log(error);
      }
    };
  },
};

export default itineraryActions;
