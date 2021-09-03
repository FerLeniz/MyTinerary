import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import itineraryActions from "../redux/actions/itineraryActions";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import Comment from "./Comment"


const Comments = (props) => {
  const [comment, setComment] = useState({
    message: "",
    token: localStorage.getItem("token"),
  });
  const [loadingComment, setLoadingComment] = useState(true);
  const { comments } = props;
  const [allComments, setAllComments] = useState(comments);
  const id = props.idItinerary;
  

  useEffect(() => {
       setAllComments(comments)
       // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

  const messageData = (e) => {
    setComment({
      ...comment,
      message: e.target.value,
    });
  };

  const updateComment = async (e) => {
    e.preventDefault();
    const withoutSpaces = comment.message.charAt(0);
    if (props.userStatus) {
      if (withoutSpaces === " " || comment.message === "") {
        toast.error("write some text", {
          toastId: "sendComment",
        });
      } else {
        setLoadingComment(false);
        const response = await props.addComment(comment, id);
        setAllComments(response);
        setLoadingComment(true);
        setComment({
          ...comment,
          message: "",
        });
      }
    } else {
      toast.error("You must be logged in to comment", {
        toastId: "error",
      });
    }
  };

  const modifyComment = async (comment, idComment) => {
    const response = await props.editComment(props.idItinerary,idComment,comment)
    setAllComments(response)
}

  const trashComment = async (idComment) => {
    const response = await props.deleteComment(idComment, props.idItinerary)
    setAllComments(response)
}

 

  return (
    <>
      <div className="divComments">
         {allComments.map(comment=> <Comment key={comment._id} trashComment={trashComment} modifyComment={modifyComment} comment={comment}/>)}
         {/* {allComments.map((comment) => {
          return (
            <div className=" my-3 shadow" key={comment._id}>
              <div className="d-flex flex-row align-items-center">
                <img
                  className="personActivity"
                  alt="person"
                  src={comment.userId.url}
                />
                <p className="px-3">{comment.userId.name}</p>

                <i className="fas fa-pencil-alt px-2"></i>
                <i className="fas fa-trash-alt" onClick={() => { alert() }}></i>
              </div>
              <div className="d-flex justify-content-center align-items-center my-2 comment bg-gradient rounded-pill">
                <p>{comment.comment}</p>
              </div>
            </div>
          );
        })}  */}
      </div>
      <div className="my-2 d-flex align-items-center justify-content-center ">
        <input
          onChange={messageData}
          className="inputComments"
          placeholder="write a comment"
          name="comment"
          type="text"
          value={comment.message}
        />
        <FontAwesomeIcon
          onClick={loadingComment ? updateComment : null}
          icon={faReply}
          className="europeSvg px-1 cursor"
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userStatus: state.user.token,
    url: state.user.url,
    name: state.user.name,
  };
};

const mapDispatchToProps = {
  addComment: itineraryActions.addComment,
  deleteComment: itineraryActions.deleteComment,
  editComment: itineraryActions.editComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
