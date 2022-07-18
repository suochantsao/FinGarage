function Footer () {
  return (
    <div className='footer bg-[#1a1b1e]'>
      <footer className="flex flex-col justify-between items-center container mx-auto px-4 py-10 lg:flex-row">
        <div>
          <img
            className="w-4/6 lg:w-5/6 mx-auto mb-5 lg:mx-0"
            src={window.location.origin + "/images/logo.png"}
            alt=""
          />
        </div>
        <ul className="text-center lg:text-right flex flex-col font-NotoSans space-y-1 lg:space-y-3 text-white text-sm lg:text-base">
          <li>
            <p className='text-white '>FinGarage 財酷，你的專業理財投資工具資料庫</p>
          </li>
          <li>
            <p>©2022 FinGarage</p>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;