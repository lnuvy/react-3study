import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { Grid } from "../elements";
import { Login, NotFound, PostList } from "../pages";
import Register from "../pages/Register";

import "./App.css";

function App() {
  return (
    <Grid padding="12px">
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Grid>
  );
}

export default App;
