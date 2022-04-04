import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Post from "../components/Post";
import { actionCreators as postActions } from "../redux/modules/post";

import Permit from "../shared/Permit";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((state) => state.post.list);
  const post = post_list.filter((l) => l.id === id)[0];

  useEffect(() => {
    if (post) return;
    dispatch(postActions.getOnePostFB(id));
  }, []);

  return (
    <>
      {post && (
        <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />
      )}
      <Permit>
        <CommentWrite post_id={id} />
      </Permit>
      <CommentList post_id={id} />
    </>
  );
};
export default PostDetail;
