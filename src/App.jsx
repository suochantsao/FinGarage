import { Route, Routes } from "react-router-dom";

// Pages
import Index from "./pages/default/Index";
import Home from "./pages/default/Home";
import Forum from "./pages/forum/Forum";
import LeaderBoard from "./pages/default/LeaderBoard";
import About from "./pages/default/About";
import AccountIndex from './pages/account/AccountIndex';
import SignIn from './pages/account/SignIn';
import SignUp from './pages/account/SignUp';

function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Index />}>
        <Route path="" element={<Home />}></Route>
        <Route path="leaderboard" element={<LeaderBoard />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
      {/* Forum Page */}
      <Route path="/forum" element={<Forum />}></Route>
      {/* Sign In / Sign Up page */}
      <Route path="/user" element={<AccountIndex />}>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
