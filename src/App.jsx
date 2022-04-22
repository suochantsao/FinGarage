import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/article/Article";
import Forum from "./pages/forum/Forum";
import Charts from "./pages/Charts";

// Components
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/article" element={<Article />}></Route>
        <Route path="/forum" element={<Forum />}></Route>
        <Route path="/charts" element={<Charts />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
