function Navbar() {
  return (
    <header className="flex justify-between items-center container mx-auto p-5 ">
      <h1 className="font-WorkSans text-2xl text-sky-700 cursor-pointer">
        FinGarage
      </h1>
      <nav>
        <ul className="flex space-x-6">
          <li className="cursor-pointer">文章專區</li>
          <li className="cursor-pointer">討論專區</li>
          <li className="cursor-pointer">點數排行</li>
          <li className="cursor-pointer">服務內容</li>
          <li className="cursor-pointer">註冊和登入</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
