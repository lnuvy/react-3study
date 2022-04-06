import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

const Alerts = (props) => {
  const { children = null, heart = false, unAuth = false, ...styles } = props;

  if (heart) {
    return (
      <WindowAlert>
        <FavoriteBorderOutlinedIcon style={{ fontSize: "70px" }} />
        <Text size="20px" bold>
          좋아요를 눌렀습니다.
        </Text>
      </WindowAlert>
    );
  }
  if (unAuth) {
    return (
      <WindowAlert>
        <VpnKeyOutlinedIcon style={{ fontSize: "70px" }} />
        <Text size="20px" bold>
          로그인을 해주세요!
        </Text>
      </WindowAlert>
    );
  }
  return <WindowAlert>{children}</WindowAlert>;
};

const WindowAlert = styled.div`
  position: fixed;
  top: 40%;
  left: 25%;
  width: 50vw;
  height: 20vh;
  /* background: tomato; */
  z-index: 999;
  border-radius: 20px;
  box-sizing: border-box;
  animation: fadeout 2s;
  opacity: 0;
  text-align: center;

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default Alerts;
