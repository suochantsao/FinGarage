function Navbar() {
  return (
    <header className="flex justify-between items-center container mx-auto p-5 ">
      <h1 className="main-text text-2xl cursor-pointer">FinGarage</h1>
      <nav>
        <ul className="flex space-x-6 font-NotoSans">
          <li className="btn">文章專區</li>
          <li className="btn">討論專區</li>
          <li className="btn">點數排行</li>
          <li className="btn">服務內容</li>
          <li className="btn">註冊和登入</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
