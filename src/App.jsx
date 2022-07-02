import { Route, Routes } from "react-router-dom";

// Pages
import Index from "./pages/default/Index";
import Home from "./pages/default/Home";
import Forum from "./pages/forum/Forum";
import LeaderBoard from "./pages/default/LeaderBoard";
import About from "./pages/default/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="" element={<Home />}></Route>
        <Route path="leaderboard" element={<LeaderBoard />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
      <Route path="/forum" element={<Forum />}></Route>
    </Routes>
  );
}

export default App;
