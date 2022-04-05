import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Image, Text } from "../elements";
import { actionCreators as commentActions } from "../redux/modules/comment";
import moment from "moment";
import "moment/locale/ko";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  console.log(comment_list);
  const { post_id = null } = props;

  useEffect(() => {
    if (!comment_list[post_id]) {
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);

  if (!comment_list[post_id] || !post_id) {
    return null;
  }

  return (
    <>
      <Grid padding="16px">
        {comment_list[post_id].map((c) => {
          return <CommentItem key={c.id} {...c} />;
        })}
      </Grid>
    </>
  );
};
export default CommentList;

const CommentItem = (props) => {
  const {
    user_profile = "",
    user_name = "asdf",
    user_id = "",
    post_id = 1,
    contents = "후후후",
    insert_dt = "2022-04-01",
  } = props;

  const changeTime = (insert_dt) => {
    const text = moment(insert_dt).fromNow();
    return text;
  };

  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image shape="circle" />
        <Text bold>{user_name}</Text>
      </Grid>
      <Grid is_flex margin="0 5px">
        <Text margin="0px">{contents}</Text>
        <Text margin="0px">{changeTime(insert_dt)}</Text>
      </Grid>
    </Grid>
  );
};
