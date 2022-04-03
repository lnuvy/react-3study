import React from "react";
import { useSelector } from "react-redux";

import { apiKey } from "./firebase";

const Permit = (props) => {
  const is_login = useSelector((state) => state.user.user);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const isSession = sessionStorage.getItem(_session_key) ? true : false;

  if (isSession && is_login) {
    return <>{props.children}</>;
  } else return null;
};

export default Permit;
