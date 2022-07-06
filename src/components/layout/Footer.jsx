function Footer () {
  return (
    <div className='footer bg-[#1a1b1e]'>
      <footer className="flex justify-between items-center container mx-auto px-4 p-10">
        <div>
          <img
            className="w-2/3"
            src={window.location.origin + "/images/logo.png"}
            alt=""
          />
        </div>
        <ul className="text-right flex flex-col font-NotoSans space-y-3 text-white">
          <li>
            <p className='text-white'>FinGarage 財酷，你的專業理財投資工具資料庫</p>
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