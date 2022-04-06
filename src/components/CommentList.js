import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Image, Text } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";
import Permit from "../shared/Permit";
import { changeTime } from "../shared/ChangeTime";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
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
  const dispatch = useDispatch();
  const {
    user_profile = "",
    user_name = "asdf",
    user_id = "",
    post_id = 1,
    contents = "후후후",
    insert_dt = "2022-04-01",
  } = props;

  return (
    <Grid is_flex>
      <Grid is_flex_center width="35%">
        <Image shape="circle" />
        <Text bold>{user_name}</Text>
      </Grid>
      <Grid is_flex margin="0 5px">
        <Text margin="0px">{contents}</Text>
        <Grid is_flex width="30%" margin="0 10px">
          <Text margin="0px">{changeTime(insert_dt)}</Text>
          <Permit>
            <Button
              width="auto"
              margin="4px 5px"
              padding="7px"
              _color="#d03333"
              _onClick={() => {
                console.log("삭제");
              }}
            >
              삭제
            </Button>
          </Permit>
        </Grid>
      </Grid>
    </Grid>
  );
};
