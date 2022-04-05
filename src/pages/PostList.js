import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { Button, Grid } from "../elements";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";
import Permit from "../shared/Permit";

const PostList = () => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);

  const {
    list: post_list,
    is_loading: isLoading,
    paging,
  } = useSelector((state) => state.post);

  useEffect(() => {
    if (post_list.length < 2) dispatch(postActions.getPostFB());
  }, []);

  return (
    <>
      <Grid bg={"#EFF6FF"} padding="20px 0">
        <InfinityScroll
          callNext={() => dispatch(postActions.getPostFB(paging.next))}
          isNext={paging.next ? true : false}
          loading={isLoading}
        >
          {post_list.map((p) => {
            if (p.user_info.user_id === user_info?.uid) {
              return (
                <Grid
                  margin="20px auto"
                  width="90%"
                  bg="white"
                  key={p.id}
                  _onClick={() => {
                    history.push(`/post/${p.id}`);
                  }}
                >
                  <Post {...p} is_me />
                </Grid>
              );
            } else {
              return (
                <Grid
                  key={p.id}
                  _onClick={() => {
                    history.push(`/post/${p.id}`);
                  }}
                >
                  <Post {...p} />;
                </Grid>
              );
            }
          })}
        </InfinityScroll>
      </Grid>
      <Permit>
        <Button
          isFloat
          text="+"
          _onClick={() => {
            history.push("/write");
          }}
        />
      </Permit>
    </>
  );
};
export default PostList;
