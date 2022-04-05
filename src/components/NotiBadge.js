import React, { useEffect, useState } from "react";
import { Badge } from "@material-ui/core";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const NotiBadge = (props) => {
  const userId = useSelector((state) => state.user.user.uid);
  const { _onClick = () => {} } = props;

  const [isRead, setIsRead] = useState(true);
  const notiCheck = () => {
    const notiDB = realtime.ref(`noti/${userId}`);
    notiDB.update({ read: true });
    _onClick();
  };

  useEffect(() => {
    const notiDB = realtime.ref(`noti/${userId}`);
    notiDB.on("value", (snapshot) => {
      setIsRead(snapshot.val().read);
    });

    return () => notiDB.off();
  });

  return (
    <>
      <Badge
        color="secondary"
        variant="dot"
        invisible={isRead}
        onClick={notiCheck}
      >
        <NotificationsNoneOutlinedIcon />
      </Badge>
    </>
  );
};

export default NotiBadge;
