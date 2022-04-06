import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { Grid } from "../elements";
import { realtime } from "../shared/firebase";

const Notification = () => {
  const user = useSelector((state) => state.user.user);
  const [noti, setNoti] = useState([]);

  useEffect(() => {
    if (!user) return;

    const notiDB = realtime.ref(`noti/${user.uid}/list`);

    const noti_info = notiDB.orderByChild("insert_dt");

    noti_info.once("value", (snapshot) => {
      if (snapshot.exists()) {
        let data = snapshot.val();

        let noti_list = Object.keys(data)
          .reverse()
          .map((s) => {
            return data[s];
          });

        setNoti(noti_list);
      }
    });
  }, [user]);

  return (
    <>
      <Grid padding="15px" bg="#EFF6FF" margin="8px 0px">
        {noti.map((n, i) => {
          console.log(n);
          return <Card key={`noti_${i}`} {...n} />;
        })}
      </Grid>
    </>
  );
};

export default Notification;
