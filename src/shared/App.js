import { ConnectedRouter } from "connected-react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import Search from "../components/Search";
import { Login, NotFound, PostList, PostWrite, Profile } from "../pages";
import Notification from "../pages/Notification";
import PostDetail from "../pages/PostDetail";
import Register from "../pages/Register";
import { history } from "../redux/configureStore";

import { actionCreators as userActions } from "../redux/modules/user";

import { apiKey } from "./firebase";
import "./App.css";
// import Alerts from "../elements/Alerts";

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const isSession = sessionStorage.getItem(_session_key) ? true : false;

  useEffect(() => {
    if (isSession) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/write/:id" exact component={PostWrite} />
          <Route path="/post/:id" exact component={PostDetail} />
          <Route path="/search" exact component={Search} />
          <Route path="/profile/:id" exact component={Profile} />
          <Route path="/noti" exact component={Notification} />
          <Route path="/*" element={NotFound} />
        </ConnectedRouter>
      </div>
    </>
  );
}

export default App;
