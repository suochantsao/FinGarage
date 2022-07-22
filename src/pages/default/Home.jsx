import classes from './Home.module.css'

function Home() {
  return (
    <div className={classes.home}>
      <div className="container mx-auto py-4 text-[#1a1b1e] text-center bg-cover font-NotoSans home">
        <ul className="flex flex-col justify-center items-center lg:flex-row">
          <li className="w-full px-6 pt-2 lg:pt-24 flex flex-col justify-center lg:w-2/5">
            <h2 className="text-2xl lg:text-left lg:text-4xl tracking-wide leading-snug">
              你想知道的財經知識<br></br>盡在 FinGarage 財經知識庫
            </h2>
            <p className="lg:text-left my-4">
              提供各種投資工具介紹和討論，讓你在投資路上組隊闖關不孤單
            </p>
            <button className="mt-6 lg:mt-12 w-5/6 mx-auto lg:mx-0 lg:w-1/2 secondary-btn transition ease-in-out hover:scale-105 duration-100">
              立即體驗
            </button>
          </li>
          <li className="lg:h-[450px] lg:overflow-hidden lg:block">
            <img
              className="w-4/5 mx-auto lg:mt-[-60px] lg:w-full"
              src={window.location.origin + "/images/landing.gif"}
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="content mt-0 lg:mt-[98px] bg-[#1a1b1e] py-5 lg:pt-12 lg:pb-20">
        <main className="container mx-auto px-10 py-14">
          <h3 className="text-white text-xl text-center lg:text-left lg:text-2xl">完整的財經投資知識服務平台</h3>
          <ul className="service-section flex flex-col mt-10 space-y-10 lg:space-x-10 lg:space-y-0 lg:flex-row">
            <li className="bg-white flex flex-col items-center rounded-lg pt-3 pb-8 px-8 w-full lg:w-1/3 transition ease-in-out hover:scale-105 duration-300">
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
            <li className="bg-white flex flex-col items-center rounded-lg pt-3 pb-8 px-8 w-full lg:w-1/3 transition ease-in-out hover:scale-105 duration-300">
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
            <li className="bg-white flex flex-col items-center rounded-lg pt-3 pb-8 px-8 w-full lg:w-1/3 transition ease-in-out hover:scale-105 duration-300">
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
      <div className="container mx-auto mb-28 lg:pb-4 text-[#1a1b1e] text-center bg-cover font-NotoSans home">
        <ul className="flex flex-col justify-center items-center lg:flex-row">
          <li className="lg:h-[460px] lg:overflow-hidden">
            <img
              className="lg:mt-[-40px]"
              src={window.location.origin + "/images/banner.gif"}
              alt=""
            />
          </li>
          <li className="w-full px-6 flex flex-col justify-center lg:w-2/5 lg:pl-10 lg:pt-32">
            <p className="text-center text-2xl lg:text-left lg:text-4xl tracking-wide leading-snug">
              加入 FinGarage 財酷<br></br>享有完整會員功能和服務
            </p>
            <p className="text-center m-4 lg:text-left lg:mx-0 ">
              闖關拿點數發揮你的實力來獲得勳章並參與所有熱門的投資話題
            </p>
            <button className="mt-6 lg:mt-12 w-5/6 mx-auto lg:mx-0 lg:w-1/2 secondary-btn transition ease-in-out hover:scale-105  duration-100">
              立即註冊或登入
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
