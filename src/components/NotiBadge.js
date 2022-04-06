import React, { useEffect, useState } from "react";
import { Badge } from "@material-ui/core";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const NotiBadge = (props) => {
  const userId = useSelector((state) => state.user.user.uid);
  const { _onClick = () => {} } = props;

  const notiDB = realtime.ref(`noti/${userId}`);
  const [isRead, setIsRead] = useState(true);

  const notiCheck = () => {
    notiDB.update({ read: true });
    _onClick();
  };

  useEffect(() => {
    notiDB.on("value", (snapshot) => {
      if (snapshot.val() === null) {
        notiDB.update({ read: true });
      }
      setIsRead(snapshot.val().read);
    });

    return () => notiDB.off();
  }, []);

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
