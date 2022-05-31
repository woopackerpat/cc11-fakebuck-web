import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import NewCommentBox from "./NewCommentBox";

function CommentContainer({ post: { Comments: comments, id } }) {
  // const [commentStatus, setcommentStatus] = useState(false);
  // useEffect(() => {

  // }, [commentStatus]);
  return (
    <div className="pb-2">
      <hr className="my-0 hr-sm" />
      <div className="pt-1">
        {comments.length > 10 && (
          <button className="btn p-0 pt-1 text-muted shadow-none text-3.5 hover-underline">
            View 5 previous comments
          </button>
        )}
      </div>
      <CommentList comments={comments} />
      <NewCommentBox postId={id} />
    </div>
  );
}

export default CommentContainer;
