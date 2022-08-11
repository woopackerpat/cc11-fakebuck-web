import React from "react";
import { createLike, deleteLike, getAllPost } from "../../../../api/post";
import { useAuth } from "../../../../contexts/AuthContext";
import { usePost } from "../../../../contexts/PostContext";
import { initPost } from "../../../../action/postAction";

function PostResponse({ showComment, likes , postId}) {
  const { user } = useAuth();
  const isLiked = likes.find((like) => like.userId === user.id);
  const { dispatch } = usePost();

  const handleClickLike = async () => {
    try {
      if (isLiked) {
        await deleteLike(postId);
      } else {
        await createLike(postId);
      }
      const res = await getAllPost();
      dispatch(initPost(res.data.posts));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex space-x-1 py-1">
      <button
        className={`btn flex-1 d-flex align-items-center space-x-2 justify-content-center hover-bg-gray-200 ${
          isLiked ? "text-primary" : "text-muted"
        }`}
        onClick={handleClickLike}
      >
        <i className="fa-regular fa-thumbs-up" />
        <small className="fw-bold">Like</small>
      </button>
      <button
        className="btn text-muted flex-1 d-flex align-items-center space-x-2 justify-content-center hover-bg-gray-200"
        onClick={showComment}
      >
        <i className="fa-regular fa-message" />
        <small className="fw-bold">Comment</small>
      </button>
    </div>
  );
}

export default PostResponse;
