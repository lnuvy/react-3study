import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Upload from "../components/Upload";
import { Button, Grid, Image, Input, Text } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const { history } = props;

  const [contents, setContents] = useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(postActions.addPostFB(contents));
  };

  if (!isLogin) {
    return (
      <Grid margin="auto 0" padding="16px" center>
        <Text size="32px" bold>
          잠깐!
        </Text>
        <Text size="24px">로그인 후에만 글을 쓸수있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/");
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }

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
        <Input _onChange={changeContents} label="게시글 내용" multiLine />
      </Grid>
      <Grid padding="15px">
        <Button _onClick={handleSubmit}>작성</Button>
      </Grid>
    </>
  );
};

export default PostWrite;
