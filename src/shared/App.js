import { Route, Routes } from "react-router-dom";
import PostList from "../pages/PostList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostList />} />
      </Routes>
    </div>
  );
}

export default App;
