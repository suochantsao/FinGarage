import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header fixed z-10 w-full bg-[#1a1b1e]">
      <header className="flex justify-between items-center container mx-auto p-4">
        <h1 className="text-2xl">
          <Link to="/">
            <img
              className="w-5/6"
              src={window.location.origin + "/images/logo.png"}
              alt=""
            />
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 font-NotoSans pt-1 text-white">
            <li className="nav-btn btn">
              <Link to="">挑戰關卡</Link>
            </li>
            <li className="nav-btn btn">
              <Link to="/forum">討論專區</Link>
            </li>
            <li className="nav-btn btn">
              <Link to="/leaderboard">點數排行</Link>
            </li>
            <li className="nav-btn btn">
              <Link to="/about">關於我們</Link>
            </li>
            <li className="primary-btn btn">註冊或登入</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
