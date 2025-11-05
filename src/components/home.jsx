import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "./items/Nav";
import { GoogleMap } from "./items/GoogleMap";
import { Icon } from "./items/icon";
import banner from '../components/image/banner.png';
import store_1 from '../components/image/comein_store.png';
import store_2 from '../components/image/comein_store_2.png';

export const Home = () => {
  return (
    <>  
    <title>Comein |香港專業高價回收電子產品 | 回收Apple、Lenovo、Samsung 等大量品牌</title>
    <meta name="author" content="Comein" />
    <meta name="keywords" content="Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價" />
    <meta name="description" content="Comein 專業高價回收 MacBook、iPhone、手機、電腦等各類二手電子產品，高價回收！香港門市或上門回收，安全快速交易。" />
    
      <Nav/>
      <main className="">
            <img src={banner} width={1200} height={600} layout="responsive" className="w-full h-auto" alt="Comein banner Apple product collection iphone Macbook" />
        </main>
        <div className="pb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-10">高價回收各類電子產品</h1>
            <div className="text-sm text-center">
                <p className="px-10 sm:px-20 lg:px-30">
                我們專業回收各大品牌電子產品，包括 Apple、Asus、DELL、Google、Lenovo、MSI、Microsoft、RAZER、Samsung、SONY、acer、Panasonic 等等，無論是手機、平板、筆電、電腦主機，還是其他智能裝置，我們都以 <span className="text-2xl font-bold text-blue-700">市場最高價</span> 現金收購！
                </p>
                <p className="px-10 sm:px-20 lg:px-30">
                    <br />✅ 即時估價 ── 提供型號及規格，立即報價
                    <br />✅ 專業檢測 ── 快速驗機，價格透明
                    <br />✅ 多元交收 ── 門市（旺區便利）或上門回收
                    <br />✅ 安全服務 ── 協助清除資料，保障隱私
                </p>
                <p className="px-10 sm:px-20 lg:px-30">
                    <br />閒置電子產品別浪費，交給我們 高價回收，輕鬆換現金！立即 WhatsApp 聯絡，獲取最優報價！
                    <br /><br />門市地址：旺角山東街47-51號星際城市3樓304號鋪
                    <br />📞 69291767 
                    <br />
                    
                </p>
                <div className='pt-5 flex justify-center gap-5'>
                    <img src={store_1} alt={"Comein retail store picture"} width={200} height={300}></img>
                    <img src={store_2} alt={"Comein retail store picture"} width={200} height={300}></img>
                </div>
            </div>
        </div>
        <GoogleMap/>
        <Icon/>
        <div className="p-10 sm:px-20 lg:px-30 text-center">
          <Link to="/faq" className="text-gray-400 text-sm hover:text-blue-600">FAQ</Link> 
        </div>
    </>
  );
}

export default Home;