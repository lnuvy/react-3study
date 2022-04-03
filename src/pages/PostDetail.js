import React from "react";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Post from "../components/Post";

const PostDetail = () => {
  return (
    <>
      <Post />
      <CommentWrite />
      <CommentList />
    </>
  );
};
export default PostDetail;
