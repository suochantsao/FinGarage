function About() {
  return (
    <div className="about pt-16 lg:pt-32">
      <div className="container mx-auto py-4 text-[#1a1b1e] text-center bg-cover font-NotoSans">
        <ul className="flex flex-col justify-center items-center lg:flex-row">
          <li className="w-5/6 lg:w-2/5 px-6 lg:pl-10 pt-20 flex flex-col justify-center">
            <h2 className="text-center text-2xl lg:text-left lg:text-4xl lg:tracking-wide leading-snug">
              關於 FinGarage 財酷
            </h2>
            <p className="text-center lg:text-left my-4">
              提供各種投資工具和理財相關知識，建立良好投資觀念基礎
            </p>
          </li>
          <li className="lg:h-[500px] overflow-hidden lg:ml-10">
            <img
              className="w-full lg:w-4/5"
              src={window.location.origin + "/images/about.gif"}
              alt="four circle icon GIF"
            />
          </li>
        </ul>
      </div>
      <div className="content mt-6 lg:mt-[80px] bg-[#1a1b1e] py-5 lg:py-12">
        <main className="container mx-auto px-10 py-14 tracking-wide leading-snug text-white ">
          <h3 className="text-3xl mb-8 font-bold">FinGarage 財酷</h3>
          <p className='text-xl tracking-wider leading-8'>在出生就被強制加入這個資本主義的遊戲之後，除了每天努力上班賺取生活費之外勢必還是需要學習如何避免資產被通膨吃掉和用錢滾錢的技能。<br></br>
          因此在這個大前提之下創立了這樣一個為所有不同程度的投資者所建立的一個投資工具的學習大平台，提供一個友善且輕鬆容易理解的基礎學習關卡讓想要踏進投資領域的小韭菜們不再因為不懂如何投資而不敢開始第一步並幫助建立投資工具的基本知識和實際操作等的注意事項或經驗分享。</p>
        </main>
      </div>
      <div className="container mx-auto px-10 py-14 text-[#1a1b1e] text-center bg-cover font-NotoSans home">
        <h3 className='text-center lg:text-left text-2xl lg:text-3xl'>FinGarage 財酷 團隊成員</h3>
        <div className='lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-8'>
          <ul className='mt-8 mb-12'>
            <li>
              <img
                className="w-full lg:w-3/5 lg:mx-auto mb-3"
                src={window.location.origin + "/images/Angela.png"}
                alt="four circle icon GIF"
              />
            </li>
            <li>
              <p className='text-xl font-extrabold'>FRONT END DEVELOPER</p>
            </li>
            <li className='text-[#4a6dff]'>Angela 阿關</li>
          </ul>
          <ul className='mt-8 mb-12'>
            <li>
              <img
                className="w-full lg:w-3/5 lg:mx-auto mb-3"
                src={window.location.origin + "/images/Daniel.png"}
                alt="four circle icon GIF"
              />
            </li>
            <li>
              <p className='text-xl font-extrabold'>BACK END DEVELOPER</p>
            </li>
            <li className='text-[#4a6dff]'>Daniel 康智</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
