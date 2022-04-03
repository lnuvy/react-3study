import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  useEffect(() => {
    dispatch(postActions.getPostFB());
  }, []);

  return (
    <>
      <h1>목록 페이지</h1>
      {/* <Post /> */}
      {post_list.map((p, i) => {
        return <Post key={p.id} {...p} />;
      })}
    </>
  );
};
export default PostList;
