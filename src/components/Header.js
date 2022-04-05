import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Text } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { history } from "../redux/configureStore";
import Permit from "../shared/Permit";
import NotiBadge from "./NotiBadge";
import { apiKey } from "../shared/firebase";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.user);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const isSession = sessionStorage.getItem(_session_key) ? true : false;

  if (isSession && is_login) {
    return (
      <Permit>
        <Grid is_flex padding="16px">
          <Grid is_flex_center _cursor _onClick={() => history.push("/")}>
            <Text margin="0px" size="27px" bold>
              Firebase 사진첩
            </Text>
          </Grid>
          <Grid
            is_flex_center
            _cursor
            _onClick={() => history.push(`/profile/${is_login.uid}`)}
            width="30%"
          >
            <Text>프로필</Text>
            <PersonOutlineIcon />
          </Grid>
          <Grid
            is_flex_center
            width="30%"
            _cursor
            _onClick={() => {
              history.push("/noti");
            }}
          >
            <Text>알림</Text>
            <NotiBadge />
          </Grid>
          <Grid
            is_flex_center
            _cursor
            width="30%"
            _onClick={() => dispatch(userActions.logOutFB())}
          >
            로그아웃
            <LogoutOutlinedIcon size={50} />
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
