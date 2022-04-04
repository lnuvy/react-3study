import React from "react";
import { Grid, Image, Text } from "../elements";

const Card = (props) => {
  const { image_url = "", user_name = "", post_id = null } = props;
  return (
    <Grid padding="15px" is_flex bg="#fff">
      <Grid width="auto" margin="0 8px 0 0">
        <Image size={80} shape="asdf" image_url={image_url} />
      </Grid>
      <Grid>
        <Text>
          <b>{user_name}</b>님이 게시글에 댓글을 남겼스빈다.
        </Text>
      </Grid>
    </Grid>
  );
};
export default Card;
