import React from "react";
import { Grid, Image, Text } from "../elements";

const CommentList = () => {
  return (
    <>
      <Grid padding="16px">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
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

  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image shape="circle" />
        <Text bold>{user_name}</Text>
      </Grid>
      <Grid is_flex margin="0 5px">
        <Text margin="0px">{contents}</Text>
        <Text margin="0px">{insert_dt}</Text>
      </Grid>
    </Grid>
  );
};
