import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import { Grid } from "../elements";
import { Login, NotFound, PostList } from "../pages";
import Register from "../pages/Register";
import { history } from "../redux/configureStore";

import "./App.css";

function App() {
  return (
    <Grid padding="12px">
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/*" element={<NotFound />} />
      </ConnectedRouter>
    </Grid>
  );
}

export default App;
