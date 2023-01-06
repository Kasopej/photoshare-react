import { connect } from "react-redux";
import { makePost } from "../redux/actions";
import { CommentsStateToProps } from "../redux/utils";

function Comments(props) {
  const { dispatch, comments, postId } = props;
  return (
    <div className="comment">
      {comments[postId]?.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
      <form
        onSubmit={(evt) => submitComment(evt, postId, dispatch)}
        className="comment-form"
      >
        <input type="text" placeholder="comment" name="comment" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default connect(CommentsStateToProps)(Comments);

function submitComment(evt, postId, dispatch) {
  evt.preventDefault();
  const comment = evt.target.elements.comment.value;
  if (!comment) return;
  dispatch(makePost(comment, postId));
}
