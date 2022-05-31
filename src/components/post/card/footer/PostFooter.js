import CommentContainer from "../comment/CommentContainer";
import PostFeedback from "./PostFeedback";
import PostResponse from "./PostResponse";
import { useState } from "react";

function PostFooter({ post }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const showComment = () => {
    setShow(true);
  };

  return (
    <>
      <PostFeedback toggleShow={toggleShow} post={post} />
      <hr className="hr-sm my-0" />
      <PostResponse showComment={showComment} />
      {show && <CommentContainer post = {post}/>}
    </>
  );
}

export default PostFooter;
