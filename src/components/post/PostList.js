import React from "react";
import PostItem from "./card/PostItem";
import { usePost } from "../../contexts/PostContext";

function PostList() {
  const { posts } = usePost();
  return (
    <div className="mt-3 d-flex flex-column space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
