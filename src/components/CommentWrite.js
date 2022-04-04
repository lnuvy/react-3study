import React, { useState } from "react";
import { Button, Grid, Input } from "../elements";

const CommentWrite = () => {
  const [comment, setComment] = useState();

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const write = () => {
    console.log(comment);
    setComment("");
  };

  return (
    <>
      <Grid padding="16px" is_flex>
        <Input
          label="댓글 내용 입력"
          _onChange={handleChange}
          value={comment}
        />
        <Button width="50px" margin="0 5px" _onClick={write}>
          작성
        </Button>
      </Grid>
    </>
  );
};
export default CommentWrite;
