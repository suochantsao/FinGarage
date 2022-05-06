import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Article from "./pages/article/Article";
import Forum from "./pages/forum/Forum";
import LeaderBoard from "./pages/LeaderBoard";

// Components
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article" element={<Article />}></Route>
        <Route path="/forum" element={<Forum />}></Route>
        <Route path="/leaderboard" element={<LeaderBoard />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
