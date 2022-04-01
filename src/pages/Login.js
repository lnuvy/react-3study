import React from "react";
import { Button, Grid, Input, Text } from "../elements";

const Login = () => {
  return (
    <>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input label="아이디" />
        </Grid>
        <Grid padding="16px 0px">
          <Input label="패스워드" />
        </Grid>
        <Button text="로그인하기" _onClick={() => console.log("로그인함")} />
      </Grid>
    </>
  );
};

export default Login;
