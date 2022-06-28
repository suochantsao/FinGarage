import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='fixed w-full bg-gradient-to-r from-[#1a1b1e] to-[#414141]'>
      <header className="flex justify-between items-center container mx-auto p-4">
        <h1 className="text-2xl">
          <Link to="/">
            <img src={window.location.origin + '/images/logo.png'} alt='' />
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 font-NotoSans pt-1">
            <li className="nav-btn btn">
              <Link to="/article">精選文章</Link>
            </li>
            <li className="nav-btn btn">
              <Link to="/forum">討論專區</Link>
            </li>
            <li className="nav-btn btn">
              <Link to="/leaderboard">點數排行</Link>
            </li>
            <li className="nav-btn btn">關於我們</li>
            <li className="primary-btn btn">註冊和登入</li>
          </ul>
        </nav>
      </header>
    </div>
   
  );
}

export default Navbar;
