import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import moment from "moment";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (list) => ({ list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const initialPost = {
  image_url:
    "data:image/jpeg;base64,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",
  contents: "",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

// middlewares
const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let dummy = doc.data();

        post_list.push({ ...dummy, id: doc.id });
      });
      dispatch(setPost(post_list));
    });
  };
};

const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    const user_data = getState().user.user;

    const user_info = {
      user_name: user_data.user_name,
      user_id: user_data.uid,
      user_profile: user_data.user_profile,
    };

    const data = {
      user_info,
      ...initialPost,
      contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    //// 이미지 포스트 관리
    const image = getState().image.preview;

    // 아이디 고유값 설정
    const storageRef = ref(
      storage,
      `images/${user_info.user_id}_${new Date().getTime()}`
    );

    uploadString(storageRef, image, "data_url").then((snapshot) => {
      console.log("9버전!", snapshot);
      getDownloadURL(storageRef)
        // .then((url) => url)
        .then((url) => {
          postDB
            .add({ ...data, iamge_url: url })
            .then((doc) => {
              let post = { ...data, id: doc.id, image_url: url };
              dispatch(addPost(post));
              history.replace("/");
              dispatch(imageActions.setPreview(null));
            })
            .catch((err) => {
              alert("post 작성 실패");
              console.log("redux middleware 캐치문 만나버림", err);
            });
        })
        .catch((err) => {
          alert("이미지 업로드 실패");
          console.log("이미지 업로드에서 에러 발생", err);
        });
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
};

export { actionCreators };
