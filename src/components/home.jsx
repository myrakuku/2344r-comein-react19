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
    <meta name="description" content="家中閒置的MacBook或iPhone，其實是待開發的潛在資產。Comein專注於為您的各類電子設備提供高效兌現管道，無論是親臨香港門市或選擇上門回收，我們都能確保整個變現流程安全又流暢，讓您的舊設備迅速轉為實質收益。元朗 天水圍 屯門 屯元天上門回收。" />
    
      <Nav/>
      <main className="">
            <img src={banner} width={1200} height={600} layout="responsive" className="w-full h-auto" alt="Apple高價回收/收購二手Macbook/二手iPhone/二手iPad/二手MacMini/二手MacStudio/二手Mac Pro/二手VisionPro/二手iWatch/二手AirPodsPro立即預約門市/上門回收" />
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
                    <img src={store_1} alt={"旺角回收二手Macbook星際城市/旺角先達ComeIn實體店"} width={200} height={300}></img>
                    <img src={store_2} alt={"價高二手手機收購或回收即時結數的門市圖"} width={200} height={300}></img>
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