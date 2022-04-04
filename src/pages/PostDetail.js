import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Post from "../components/Post";
import { firestore } from "../shared/firebase";

const PostDetail = (props) => {
  const id = props.match.params.id;

  console.log(id);
  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((state) => state.post.list);
  const post_data = post_list.filter((l) => l.id === id)[0];

  const [post, setPost] = useState(post_data ? post_data : null);

  useEffect(() => {
    if (post) return;

    const postDB = firestore.collection("post");
    postDB
      .doc(id)
      .get()
      .then((doc) => {
        let data = doc.data();
        setPost({ id: doc.id, ...data });
      });
  }, []);

  return (
    <>
      {post && (
        <Post {...post} is_me={post.user_info.user_id === user_info.uid} />
      )}

      <CommentWrite />
      <CommentList />
    </>
  );
};
export default PostDetail;
