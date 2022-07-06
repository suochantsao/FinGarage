function About() {
  return (
    <div className="about pt-32">
      <div className="container mx-auto py-4 text-[#1a1b1e] text-center bg-cover font-NotoSans">
        <ul className="flex justify-center items-center">
          <li className="w-2/5 pl-10 pt-20 flex flex-col justify-center">
            <h2 className="text-left text-4xl tracking-wide leading-snug">
              關於 FinGarage 財酷
            </h2>
            <p className="text-left my-4">
              提供各種投資工具和理財相關知識，建立良好投資觀念基礎
            </p>
          </li>
          <li className="h-[500px] overflow-hidden lg:ml-10">
            <img
              className="w-4/5"
              src={window.location.origin + "/images/about.gif"}
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="content mt-[80px] bg-[#1a1b1e] pt-12 pb-20">
        <main className="container mx-auto px-10 py-14 tracking-wide leading-snug text-white ">
          <h3 className="text-3xl mb-8 font-bold">FinGarage 財酷</h3>
          <p className='text-xl'>在出生就被強制加入這個資本主義的遊戲之後，除了每天努力上班賺取生活費之外勢必還是需要學習如何避免資產被通膨吃掉和用錢滾錢的技能。<br></br>
          因此在這個大前提之下創立了這樣一個為所有不同程度的投資者所建立的一個投資工具的學習大平台，提供一個友善且輕鬆容易理解的基礎學習關卡讓想要踏進投資領域的小韭菜們不再因為不懂如何投資而不敢開始第一步並幫助建立投資工具的基本知識和實際操作等的注意事項或經驗分享。</p>
        </main>
      </div>
      <div className="container mx-auto mb-28 p-10 text-[#1a1b1e] text-center bg-cover font-NotoSans home">
        <h3 className='text-left text-3xl'>FinGarage 財酷 團隊成員</h3>
        
      </div>
    </div>
  );
}

export default About;
