import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";

import { setCookie, deleteCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";

const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const SET_PROFILE = "SET_PROFILE";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setProfile = createAction(SET_PROFILE, (user) => ({ user }));

const initialState = {
  user: null,
  isLogin: false,
};

const user_initial = {
  user_name: "lnuvy",
};

// middleware actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    setPersistence(auth, browserSessionPersistence).then(() => {
      auth
        .signInWithEmailAndPassword(id, pwd)
        .then((user) => {
          console.log(user);
          console.log(user.user.displayName);
          dispatch(
            setUser({
              user_name: user.user.displayName,
              id: id,
              user_profile: "",
              uid: user.user.uid,
            })
          );
          history.push("/");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode, errorMessage, "@@@@@^^@@@@@");
        });
    });
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        console.log(user);
        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({ user_name, id, user_profile: "", uid: user.user.uid })
            );
            history.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage, "&&&&&&&&^^&&&&&&");
      });
  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            user_name: user.displayName,
            user_profile: "",
            id: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  };
};

const logOutFB = () => {
  return function (dispatch, getState, { history }) {
    auth.signOut().then(() => {
      dispatch(logOut());
      history.replace("/");
    });
  };
};

// 프로필 수정
const setProfileFB = (user_name, profileURL = null) => {
  return function (dispatch, getState, { history }) {
    const user = auth.currentUser;
    if (user !== null) {
      if (!profileURL) {
        console.log(user);
        user
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            console.log(user.displayName);
            dispatch(
              setProfile({
                id: user.email,
                uid: user.uid,
                user_name: user.displayName,
                user_profile: "",
              })
            );
            history.replace("/");
          })
          .catch(() => {
            console.log("닉네임 바꾸는데 에러뜸~");
          });
      }
    }
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("isLogin", "success");
        draft.user = action.payload.user;
        draft.isLogin = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("isLogin");
        draft.user = null;
        draft.isLogin = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [SET_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.user.user_name = action.payload.user.user_name;
      }),
  },
  initialState
);

const actionCreators = {
  logOut,
  getUser,
  signupFB,
  loginFB,
  loginCheckFB,
  logOutFB,
  setProfileFB,
};

export { actionCreators };
