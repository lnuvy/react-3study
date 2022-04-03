import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Text } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import Permit from "../shared/Permit";

const Header = (props) => {
  const dispatch = useDispatch();

  return (
    <Permit>
      <Grid is_flex padding="16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            헤더임
          </Text>
        </Grid>
        <Grid is_flex>
          <Button text="내정보"></Button>
          <Button text="알림"></Button>
          <Button
            text="로그아웃"
            _onClick={() => dispatch(userActions.logOutFB())}
          ></Button>
        </Grid>
      </Grid>
    </Permit>
  );

  // return (
  //   <Grid is_flex padding="16px">
  //     <Grid>
  //       <Text margin="0px" size="24px" bold>
  //         헤더임
  //       </Text>
  //     </Grid>
  //     <Grid is_flex>
  //       <Button
  //         text="로그인"
  //         _onClick={() => {
  //           history.push("/login");
  //         }}
  //       ></Button>
  //       <Button
  //         text="회원가입"
  //         _onClick={() => {
  //           history.push("/register");
  //         }}
  //       ></Button>
  //     </Grid>
  //   </Grid>
  // );
};

export default Header;
