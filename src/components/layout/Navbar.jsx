function Navbar() {
  return (
    <header className="flex justify-between items-center container mx-auto p-5 ">
      <h1 className="main-text text-2xl cursor-pointer">FinGarage</h1>
      <nav>
        <ul className="flex space-x-6 font-NotoSans">
          <li className="nav-btn btn">精選文章</li>
          <li className="nav-btn btn">討論專區</li>
          <li className="nav-btn btn">點數排行</li>
          <li className="nav-btn btn">關於我們</li>
          <li className="primary-btn btn">註冊和登入</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
