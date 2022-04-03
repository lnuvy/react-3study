import React from "react";
import { Button, Grid, Input } from "../elements";

const CommentWrite = () => {
  return (
    <>
      <Grid padding="16px" is_flex>
        <Input label="댓글 내용 입력" />
        <Button width="50px" margin="0 5px">
          작성
        </Button>
      </Grid>
    </>
  );
};
export default CommentWrite;
