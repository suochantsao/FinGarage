// Components
import MainLayout from "../components/layout/MainLayout";

function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto py-4 pt-[121px]  text-[#1a1b1e] text-center bg-cover font-NotoSans home">
        <ul className='flex justify-center items-center'>
          <li className='w-2/5 pl-10 pt-24 flex flex-col justify-center'>
            <p className='text-left text-4xl tracking-wide leading-snug'>你想知道的財經知識<br></br>盡在 FinGarage 財經知識庫</p>
            <p className='text-left my-4'>提供各種投資工具介紹和討論，讓你在投資路上組隊闖關不孤單</p>
            <button className='mt-12 w-1/2 secondary-btn'>立即體驗</button>
          </li>
          <li className='h-[460px] overflow-hidden'>
            <img className='mt-[-30px]' src={window.location.origin + '/images/banner.gif'} alt='' />
          </li>
        </ul>
      </div>
      <div className="content mt-[98px] text-white bg-[#1a1b1e]">
        <main className='container mx-auto p-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio enim quod, harum ab cumque voluptates possimus corrupti praesentium ipsum, rem et non totam error aut similique, maiores dolorum dignissimos?</p>
          <ul className='service-section'>
            <li>
              
            </li>
            <li></li>
            <li></li>
          </ul>
        </main>
      </div>
    </MainLayout>

  );
}

export default Home;
