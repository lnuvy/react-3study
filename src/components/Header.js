import React from "react";
import { Button, Grid, Text } from "../elements";

const Header = (props) => {
  return (
    <Grid is_flex padding="16px">
      <Grid>
        <Text margin="0px" size="24px" bold>
          헤더임
        </Text>
      </Grid>
      <Grid is_flex>
        <Button text="로그인"></Button>
        <Button text="회원가입"></Button>
      </Grid>
    </Grid>
  );
};

export default Header;
