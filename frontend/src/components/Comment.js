import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { connect } from "react-redux";
import { useState } from "react";

const MySwal = withReactContent(Swal);

const Comment = (props) => {
  const { comment, modifyComment, trashComment } = props;
  const [commentContent, setCommentContent] = useState(comment.comment);
  const [updateComment, setUpdateComment] = useState(false);

  alert = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this comment!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        MySwal.fire(
          "Deleted!",
          "Your comment has been deleted.",
          "success"
        ).then(trashComment(comment._id));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire("Cancelled", "Your comment is safe :)", "error");
      }
    });
  };

  const sendEnter = (e) => {
    if (e.key === "Enter") {
      modifyComment(commentContent, comment._id);
      setUpdateComment(!updateComment);
    }
  };

  return (
    <div className=" my-3 shadow" key={comment._id}>

      <div className="d-flex flex-row align-items-center">
        <img className="personActivity" alt="person" src={comment.userId.url} />
        <p className="px-3">{comment.userId.name}</p>
        {comment.userId.name === props.name && (
          <div>
            <i className="fas fa-edit cursor px-2" onClick={() => {
                  setUpdateComment(!updateComment);
                }}></i>
            <i
              className="fas fa-trash-alt cursor"
              onClick={() => {
                alert();
              }}
            ></i>
          </div>
          
        )}
      </div>
      <div className="d-flex justify-content-center align-items-center my-2 comment bg-gradient rounded-pill">
        {!updateComment ? (
          <p>{comment.comment}</p>
          
        ) : (
          <div>
            <input
              onChange={(e) => setCommentContent(e.target.value)}
              onKeyDown={sendEnter}
              className="inputComments"
              placeholder="write a comment"
              name="comment"
              type="text"
              value={commentContent}
            />
            <i
              className="far fa-paper-plane  mx-2 fs-3"
              onClick={() => {
                modifyComment(commentContent, comment._id);
                setUpdateComment(!updateComment);
              }}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userStatus: state.user.token,
    url: state.user.url,
    name: state.user.name,
  };
};

export default connect(mapStateToProps)(Comment);
