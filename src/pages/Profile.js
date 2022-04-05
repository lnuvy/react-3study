import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Upload from "../components/Upload";
import { Button, Grid, Image, Input, Text } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";

const Profile = (props) => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const user_id = user_info.uid;
  const param_id = props.match.params.id;

  const [nickname, setNickname] = useState(user_info.user_name);

  return (
    <Grid padding="15px" margin="20px auto">
      <Text center margin="0px" size="32px" bold>
        {user_info.user_name} 의 프로필
      </Text>
      {user_info.user_profile === "" ? (
        <>
          <Text center bold size="24px">
            아직 설정한 이미지가 없습니다.
          </Text>

          {/* <Text center>(매운맛 좀 하다가 심심하면 추가할 예정)</Text> */}
          <Text center>
            user 안에 있는 photoURL 을 변경해주면 프로필 사진이 바뀝니다. 이거
            구현해봤자 <br />
            파이어베이스 실력이 느는거지 리액트 실력이 느는게 아니어서 안함.
            절대 귀찮아서 안하는거아님
          </Text>
        </>
      ) : (
        <Image size={40} shape="circle" src={user_info.user_profile} />
      )}
      <Grid margin="20px auto">
        <Upload />
      </Grid>
      <Grid>
        {user_id === param_id ? (
          <Grid padding="16px" width="50%" margin="0 auto">
            <Text size="24px" bold>
              닉네임 수정
            </Text>
            <Input
              type="text"
              label="수정할 닉네임 입력"
              value={nickname}
              _onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
            <Grid margin="10px 0">
              <Button
                _onClick={() => dispatch(userActions.setProfileFB(nickname))}
              >
                닉네임 수정
              </Button>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Profile;
