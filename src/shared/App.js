import { ConnectedRouter } from "connected-react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import Search from "../components/Search";
import { Button, Grid } from "../elements";
import { Login, NotFound, PostList, PostWrite } from "../pages";
import PostDetail from "../pages/PostDetail";
import Register from "../pages/Register";
import { history } from "../redux/configureStore";

import { actionCreators as userActions } from "../redux/modules/user";

import { apiKey } from "./firebase";
import Permit from "./Permit";

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
      <Grid padding="12px">
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/post/:id" exact component={PostDetail} />
          <Route path="/search" exact component={Search} />
          <Route path="/*" element={NotFound} />
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button
          isFloat
          text="+"
          _onClick={() => {
            history.push("/write");
          }}
        />
      </Permit>
    </>
  );
}

export default App;
