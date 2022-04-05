import React from "react";
import { Grid, Image, Text } from "../elements";
import { history } from "../redux/configureStore";
import { changeTime } from "../shared/ChangeTime";

const Card = (props) => {
  const {
    image_url = "",
    user_name = "",
    post_id = null,
    insert_dt = "2020-01-01 13:00:00",
  } = props;

  return (
    <Grid
      _onClick={() => {
        history.push(`/post/${post_id}`);
      }}
      padding="15px"
      is_flex
      bg="#fff"
    >
      <Grid is_flex width="auto" margin="0 16px 0 0">
        <Image size={80} shape="asdf" src={image_url} />
        <Text margin="0 0 0 16px">
          <b>{user_name}</b>님이 게시글에 댓글을 남겼스빈다.
        </Text>
      </Grid>
      <Text margin="0 20px">{changeTime(insert_dt)}</Text>
    </Grid>
  );
};
export default Card;
