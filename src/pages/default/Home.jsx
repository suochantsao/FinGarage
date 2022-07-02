function Home() {
  return (
    <div className="home">
      <div className="container mx-auto py-4 text-[#1a1b1e] text-center bg-cover font-NotoSans home">
        <ul className="flex justify-center items-center">
          <li className="w-2/5 pl-10 pt-24 flex flex-col justify-center">
            <h2 className="text-left text-4xl tracking-wide leading-snug">
              你想知道的財經知識<br></br>盡在 FinGarage 財經知識庫
            </h2>
            <p className="text-left my-4">
              提供各種投資工具介紹和討論，讓你在投資路上組隊闖關不孤單
            </p>
            <button className="mt-12 w-1/2 secondary-btn transition ease-in-out hover:scale-105  duration-100">
              立即體驗
            </button>
          </li>
          <li className="h-[460px] overflow-hidden">
            <img
              className="mt-[-15px]"
              src={window.location.origin + "/images/landing.gif"}
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="content mt-[98px] bg-[#1a1b1e] pt-12 pb-20">
        <main className="container mx-auto px-10 py-14">
          <h3 className="text-white text-2xl">完整的財經投資知識服務平台</h3>
          <ul className="service-section flex mt-10 space-x-10">
            <li className="bg-white flex flex-col items-center rounded-lg pt-3 pb-8 px-8 w-1/3 transition ease-in-out hover:scale-105 duration-300">
              <img
                className="w-2/3"
                src={window.location.origin + "/images/forum.gif"}
                alt=""
              />
              <p className="font-bold text-xl mb-2">不同投資工具的討論專區</p>
              <p className="text-center">
                找到有興趣的投資工具討論專區<br></br>獲得你所需要的概念與答案
              </p>
            </li>
            <li className="bg-white flex flex-col items-center rounded-lg pt-3 pb-8 px-8 w-1/3 transition ease-in-out hover:scale-105 duration-300">
              <img
                className="w-2/3"
                src={window.location.origin + "/images/knowledge.gif"}
                alt=""
              />
              <p className="font-bold text-xl mb-2">基礎概念的關卡式學習</p>
              <p className="text-center">
                選擇你想學習和了解的投資工具<br></br>過關斬將成為投資新新手
              </p>
            </li>
            <li className="bg-white flex flex-col items-center rounded-lg pt-3 pb-8 px-8 w-1/3 transition ease-in-out hover:scale-105 duration-300">
              <img
                className="w-2/3"
                src={window.location.origin + "/images/trophy.gif"}
                alt=""
              />
              <p className="font-bold text-xl mb-2">每季更新的點數排行榜</p>
              <p className="text-center">
                根據財報 Q1 Q2 季度的概念<br></br>定期更新投資工具排行榜
              </p>
            </li>
          </ul>
        </main>
      </div>
      <div className="container mx-auto mb-28 py-4 text-[#1a1b1e] text-center bg-cover font-NotoSans home">
        <ul className="flex justify-center items-center">
          <li className="h-[460px] overflow-hidden">
            <img
              className="mt-[-40px]"
              src={window.location.origin + "/images/banner.gif"}
              alt=""
            />
          </li>
          <li className="w-2/5 pl-10 pt-32 flex flex-col justify-center">
            <p className="text-left text-4xl tracking-wide leading-snug">
              加入 FinGarage 財酷<br></br>享有完整會員功能和服務
            </p>
            <p className="text-left my-4">
              闖關拿點數發揮你的實力來獲得勳章並參與所有熱門的投資話題
            </p>
            <button className="mt-12 w-1/2 secondary-btn transition ease-in-out hover:scale-105  duration-100">
              立即註冊或登入
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
