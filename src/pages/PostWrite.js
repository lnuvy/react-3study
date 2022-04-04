import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Upload from "../components/Upload";
import { Button, Grid, Image, Input, Text } from "../elements";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  // 수정시에만 id값이 넘어옴
  const post_id = props.match.params.id || "write";
  const isEdit = post_id !== "write" ? true : false;

  let _post = isEdit ? post_list.find((p) => p.id === post_id) : null;

  const { history } = props;

  const [contents, setContents] = useState(_post ? _post.contents : "");

  useEffect(() => {
    if (isEdit && !_post) {
      console.log("정보없음");
      history.goBack();
      return;
    }
    if (isEdit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents }));
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
          {isEdit ? "게시글 작성" : "게시글 수정"}
        </Text>
        <Upload />
      </Grid>
      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>
        <Image
          shape="rectangle"
          src={preview ? preview : "http://via.placeholder.com/400x300"}
        />
      </Grid>
      <Grid>
        <Input
          value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          multiLine
        />
      </Grid>
      <Grid padding="15px">
        {!isEdit ? (
          <Button _onClick={addPost}>작성</Button>
        ) : (
          <Button _onClick={editPost}>수정</Button>
        )}
      </Grid>
    </>
  );
};

export default PostWrite;
