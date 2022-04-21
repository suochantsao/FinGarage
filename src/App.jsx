import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// Components
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
