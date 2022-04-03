import React from "react";
import Upload from "../components/Upload";
import { Button, Grid, Image, Input, Text } from "../elements";

const PostWrite = () => {
  return (
    <>
      <Grid padding="15px">
        <Text margin="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>
      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>
        <Image shape="rectangle" />
      </Grid>
      <Grid>
        <Input label="게시글 내용" multiLine />
      </Grid>
      <Grid padding="15px">
        <Button>작성</Button>
      </Grid>
    </>
  );
};

export default PostWrite;
