import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Text } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import Permit from "../shared/Permit";
import NotiBadge from "./NotiBadge";
import { apiKey } from "../shared/firebase";

// import LogoutOutlinedIcon from "@material-ui/icons/outline";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.user);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const isSession = sessionStorage.getItem(_session_key) ? true : false;

  if (isSession && is_login) {
    return (
      <Permit>
        <Grid is_flex padding="16px">
          <Grid _onClick={() => history.push("/")}>
            <Text margin="0px" size="24px" bold>
              Firebase 사진첩
            </Text>
          </Grid>
          <Grid is_flex>
            <Button text="내정보"></Button>
            <NotiBadge
              _onClick={() => {
                history.push("/noti");
              }}
            />
            <Button
              text="로그아웃"
              _onClick={() => dispatch(userActions.logOutFB())}
            ></Button>
          </Grid>
        </Grid>
      </Permit>
    );
  } else
    return (
      <Grid is_flex padding="16px">
        <Grid _onClick={() => history.push("/")}>
          <Text margin="0px" size="24px" bold>
            헤더임
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/register");
            }}
          ></Button>
        </Grid>
      </Grid>
    );
};

export default Header;
