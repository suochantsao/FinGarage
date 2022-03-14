// Components
import Navbar from "./Navbar";
// import banner from "../../images/banner.jpg";

function MainLayout(props) {
  return (
    <div className="">
      <Navbar />
      <div className="bg-home-banner text-white text-center bg-cover pt-60 pb-32 font-NotoSans">
        <h2 className="main-text text-3xl text-shadow-wh mb-3">
          FinGarage <span className="font-NotoSans">財酷</span>
        </h2>
        <p className="text-shadow-bk">你的財經知識庫</p>
        <p className="mt-36 text-shadow-bk">
          你想知道的財經知識，盡在 FinGarage 財經知識庫
        </p>
      </div>
      {/* <img className="h-1/2" src={banner} alt="banner" /> */}
    </div>
  );
}

export default MainLayout;
