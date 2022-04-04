import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);

  useEffect(() => {
    if (post_list.length === 0) dispatch(postActions.getPostFB());
  }, []);

  return (
    <>
      <h1>목록 페이지</h1>
      {post_list.map((p) => {
        if (p.user_info.user_id === user_info?.uid) {
          return <Post key={p.id} {...p} is_me />;
        }
        return <Post key={p.id} {...p} />;
      })}
    </>
  );
};
export default PostList;
