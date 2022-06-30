import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Article from "./pages/article/Article";
import Forum from "./pages/forum/Forum";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/article" element={<Article />}></Route>
      <Route path="/forum" element={<Forum />}></Route>
      <Route path="/leaderboard" element={<LeaderBoard />}></Route>
    </Routes>
  );
}

export default App;
