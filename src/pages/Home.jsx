function Home() {
  return (
    <div className="container mx-auto pt-[121px] py-4 text-[#1a1b1e] text-center bg-cover font-NotoSans home">
      <ul className='flex'>
        <li className='w-1/2'>
          {/* <p>你想知道的財經知識，盡在 FinGarage 財經知識庫</p> */}
        </li>
        <li className='h-[460px] overflow-hidden'>
          <img className='mt-[-50px]' src={window.location.origin + '/images/banner.gif'} alt='' />
        </li>
      </ul>
      {/* <h2 className="main-text text-3xl mb-2">
        FinGarage <span className="font-NotoSans">財酷</span>
      </h2>
      <p className="text-shadow-bk">你的財經知識庫</p>
      <p className="mt-36 text-shadow-bk">
        
      </p> */}
    </div>
  );
}

export default Home;
