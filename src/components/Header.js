import React, { useEffect, useState } from "react";
import { Button, Grid, Text } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

const Header = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let cookie = getCookie("user_id");
    cookie ? setIsLogin(true) : setIsLogin(false);
  }, []);

  if (isLogin) {
    return (
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
            _onClick={() => deleteCookie("user_id")}
          ></Button>
        </Grid>
      </Grid>
    );
  }

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
