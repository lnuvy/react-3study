import React from "react";
import Card from "../components/Card";
import { Grid, Image, Text } from "../elements";

const Notification = () => {
  let noti = [
    { user_name: "aaaaaaa", post_id: "post1", image_url: "" },
    { user_name: "aaaaaaa", post_id: "post2", image_url: "" },
    { user_name: "aaaaaaa", post_id: "post3", image_url: "" },
    { user_name: "aaaaaaa", post_id: "post4", image_url: "" },
  ];
  return (
    <>
      <Grid padding="15px" bg="#EFF6FF" margin="8px 0px">
        {noti.map((n) => {
          return <Card key={n.post_id} {...n} />;
        })}
      </Grid>
    </>
  );
};

export default Notification;
