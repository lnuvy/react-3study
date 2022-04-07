import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Unauth from "../components/Unauth";
import Upload from "../components/Upload";
import { Button, Grid, Image, Input, Text } from "../elements";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as postActions } from "../redux/modules/post";

import "./PostWrite.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
  const [layout, setLayout] = useState(_post ? _post?.layout : "");

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
    if (!preview) {
      alert("사진을 반드시 올려야합니다.");
      return;
    }
    if (!contents) {
      alert("내용을 입력해주세요.");
      return;
    }
    dispatch(postActions.addPostFB(contents));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents }));
  };

  console.log(layout);

  if (!isLogin) {
    return <Unauth />;
  }

  return (
    <>
      <Grid padding="15px">
        <Text margin="0px" size="32px" bold>
          {isEdit ? "게시글 수정" : "게시글 작성"}
        </Text>
        <Grid is_flex_center>
          <Text bold size="20px" margin="30px">
            레이아웃 선택
          </Text>
          <div className="container">
            <input id="dropdown" type="checkbox" />
            <label className="dropdownLabel" for="dropdown">
              <div>{layout ? layout : "선택하세요"}</div>
              <KeyboardArrowDownIcon className="caretIcon" />
            </label>
            <div className="content">
              <ul style={{ zIndex: "999" }}>
                <li
                  style={{ zIndex: "999" }}
                  id="left"
                  onClick={(e) => setLayout(e.target.id)}
                >
                  left
                </li>
                <li
                  style={{ zIndex: "999" }}
                  id="right"
                  onClick={(e) => setLayout(e.target.id)}
                >
                  right
                </li>
                <li
                  style={{ zIndex: "999" }}
                  id="down"
                  onClick={(e) => setLayout(e.target.id)}
                >
                  down
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid margin="20px auto">
          <Upload />
        </Grid>
      </Grid>
      <Grid>
        <Grid>
          <Text center margin="0px" size="24px" bold>
            업로드된 이미지
          </Text>
        </Grid>
        <Grid padding="10px 50px 50px 50px" margin="0 0 20px 0">
          <Image
            shape="rectangle"
            src={preview ? preview : "http://via.placeholder.com/400x300"}
          />
        </Grid>
      </Grid>
      <Grid padding="16px">
        <Input
          id="multi"
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
