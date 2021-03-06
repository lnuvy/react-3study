import React, { useEffect, useState } from "react";
import { Button, Grid, Image, Text } from "../elements";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { changeTime } from "../shared/ChangeTime";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Alerts from "../elements/Alerts";

const Post = (props) => {
  const dispatch = useDispatch();
  const { insert_dt, id: post_id, is_me, like, layout = null } = props;
  const currentUser = useSelector((state) => state.user?.user?.uid);
  const currentComment = useSelector((state) => state.comment?.list[post_id]);
  const isMyLike = like.filter((l) => l === currentUser);

  const [likeToast, setLikeToast] = useState(false);
  const [unlikeToast, setUnLikeToast] = useState(false);
  const [unAuth, setUnAuth] = useState(false);

  const changeToast = (toggle) => {
    if (!currentUser) {
      setUnAuth(true);
      return;
    }
    if (!toggle.length) {
      console.log("like", toggle);
      setLikeToast(true);
    } else {
      console.log("unLike", toggle);
      setUnLikeToast(true);
    }
  };

  useEffect(() => {
    if (likeToast) {
      setTimeout(() => setLikeToast(false), 500);
    }
    if (unlikeToast) {
      setTimeout(() => setUnLikeToast(false), 500);
    }
    if (unAuth) {
      setTimeout(() => setUnAuth(false), 500);
    }
  }, [likeToast, unlikeToast, unAuth]);

  const handleLike = () => {
    dispatch(postActions.toggleLikeFB(post_id, currentUser));
    changeToast(isMyLike);
  };

  return (
    <Grid>
      {unlikeToast && <Alerts unHeart />}
      {likeToast && <Alerts heart />}
      {unAuth && <Alerts unAuth />}
      <Grid
        is_flex
        padding="16px"
        _cursor
        _onClick={() => {
          history.push(`/post/${post_id}`);
        }}
      >
        <Grid is_flex width="auto">
          <Image size={40} shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
        </Grid>
        <Grid is_flex width="auto">
          <Text>{changeTime(insert_dt)}</Text>
          {is_me && (
            <>
              <Button
                width="auto"
                margin="4px 5px"
                padding="7px"
                _color="#5eaba5"
                _onClick={(e) => {
                  e.stopPropagation();
                  history.push(`/write/${post_id}`);
                }}
              >
                ??????
              </Button>
              <Button
                width="auto"
                margin="4px 5px"
                padding="7px"
                _color="#d03333"
                _onClick={(e) => {
                  e.stopPropagation();
                  dispatch(postActions.deletePostFB(post_id));
                }}
              >
                ??????
              </Button>
            </>
          )}
        </Grid>
      </Grid>

      {layout === "right" && (
        <Grid padding="16px">
          <Grid is_flex>
            <Grid width="30%">
              <Text center>{props.contents}</Text>
            </Grid>
            <Grid width="70%">
              <Image
                shape="rectangle"
                src={props.image_url}
                _onDoubleClick={(e) => {
                  e.stopPropagation();
                  handleLike();
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      )}

      {layout === "left" && (
        <Grid padding="16px">
          <Grid is_flex>
            <Grid width="70%">
              <Image
                shape="rectangle"
                src={props.image_url}
                _onDoubleClick={(e) => {
                  e.stopPropagation();
                  handleLike();
                }}
              />
            </Grid>
            <Grid width="30%">
              <Text center>{props.contents}</Text>
            </Grid>
          </Grid>
        </Grid>
      )}
      {layout === "down" && (
        <>
          <Grid padding="5px 16px" margin="0 20px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid padding="10px 30px">
            <Image
              shape="rectangle"
              src={props.image_url}
              _onDoubleClick={(e) => {
                e.stopPropagation();
                handleLike();
              }}
            />
          </Grid>
        </>
      )}

      <Grid padding="16px">
        <Grid is_flex_start width="auto">
          {isMyLike.length ? (
            <FavoriteOutlinedIcon
              onClick={handleLike}
              style={{ cursor: "pointer", color: "red" }}
            />
          ) : (
            <FavoriteBorderOutlinedIcon
              onClick={handleLike}
              style={{ cursor: "pointer", color: "red" }}
            />
          )}

          <Text margin="0px" bold>
            &nbsp;{like?.length > 0 ? like?.length : "0"}???
          </Text>
        </Grid>
        <Text margin="10px 0" bold>
          ??????&nbsp;
          {currentComment?.length ? currentComment.length : props.comment_cnt}???
        </Text>
      </Grid>
    </Grid>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "lnuvy",
    user_profile:
      "data:image/jpeg;base64,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",
  },
  image_url:
    "data:image/jpeg;base64,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",
  contents: "?????????",
  comment_cnt: 10,
  insert_dt: "2021-04-01 14:00:00",
  is_me: false,
};

export default Post;
