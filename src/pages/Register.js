import React from "react";
import { Button, Grid, Input, Text } from "../elements";

const Register = () => {
  return (
    <Grid>
      <Text size="32px" bold>
        회원가입
      </Text>
      <Grid padding="16px 0px">
        <Input label="아이디" _onChange={() => console.log("!!")} />
      </Grid>
      <Grid padding="16px 0px">
        <Input label="닉네임" _onChange={() => console.log("!!")} />
      </Grid>
      <Grid padding="16px 0px">
        <Input label="비밀번호" _onChange={() => console.log("!!")} />
      </Grid>
      <Grid padding="16px 0px">
        <Input label="비밀번호 확인" _onChange={() => console.log("!!")} />
      </Grid>
      <Button text="회원가입 하기" />
    </Grid>
  );
};

export default Register;
