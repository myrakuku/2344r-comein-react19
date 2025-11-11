import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "./items/Nav";
// Brand Logo (Top)
import Apple from './image/Brand_logo/AppleLogo.png';
import Lenovo from './image/Brand_logo/Lenovo-Logo.png';
import Samsung from './image/Brand_logo/Samsung-Logo.png';
import Razer from './image/Brand_logo/Razer-Logo.jpg';
import Asus from './image/Brand_logo/Asus-Logo.png';
import MSI from './image/Brand_logo/MSI-Logo-present.jpg';
import Dell from './image/Brand_logo/DELL-Logo.png';
// Brand Logo (Second)
import Google from './image/Brand_logo/Google-Logo.png';
import Microsoft from './image/Brand_logo/Microsoft-logo.jpg';
import Sony from './image/Brand_logo/SONY-Logo.png';
import acer from './image/Brand_logo/acer-logo.png';
import panasonic from './image/Brand_logo/panasonic-logo.webp';
// Brand Collection
import AppleC from './image/Brand_Collection/Apple.png';
import LenovoC from './image/Brand_Collection/Lenovo.png';
import SamsungC from './image/Brand_Collection/Samsung.png';
import RazerC from './image/Brand_Collection/Razer.png';
import AsusC from './image/Brand_Collection/Asus.png';
import MSIC from './image/Brand_Collection/MSI.png';

export const Type = () => {
  return (
    <>
    <Nav/>
    <title>高價回收電子產品 Apple/Samsung/Lenovo等品牌全收 | Comein 專業二手回收門市</title>
    <meta name="description" content="Comein 高價回收 Apple iPhone、MacBook、Samsung 手機、ASUS 筆電、RAZER 電競設備等各類電子產品！全港最高收購價，即時報價，旺角門市或上門交收，免費清除資料保障隱私。在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！元朗 天水圍 屯門 元天屯上門回收。" />

    <div className="pb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-10">高價回收各類電子產品</h1>
            {/* All Brand Logo */}
            <div className="text-sm text-center">
                <p className="p-10 sm:px-20 lg:px-30">
                我們所接受的品牌於下面列出，數量繁多恕無法逐項列出，歡迎向我們查詢更多！
                </p>
                <div style={{ maxWidth: '80%', margin: '0 auto', textAlign: 'center' }} className="flex flex-wrap gap-5 justify-center overflow-x-auto">
                    <img src={Apple} style={{ width: 'auto', height: '50px' }} alt="二手回收Apple" />
                    <img src={Asus} style={{ width: 'auto', height: '50px' }} alt="二手回收Asus" />
                    <img src={Dell} style={{ width: 'auto', height: '50px' }} alt="二手回收Dell" />
                    <img src={Google} style={{ width: 'auto', height: '50px' }} alt="二手回收Google" />
                    <img src={Lenovo} style={{ width: 'auto', height: '50px' }} alt="二手回收Lenovo" />
                    <img src={MSI} style={{ width: 'auto', height: '50px' }} alt="二手回收MSI" />
                    <img src={Microsoft} style={{ width: 'auto', height: '50px' }} alt="二手回收Microsoft" />
                    <img src={Razer} style={{ width: 'auto', height: '50px' }} alt="二手回收Razer" />
                    <img src={Samsung} style={{ width: 'auto', height: '50px' }} alt="二手回收Samsung" />
                    <img src={Sony} style={{ width: 'auto', height: '50px' }} alt="二手回收Sony" />
                    <img src={acer} style={{ width: 'auto', height: '50px' }} alt="二手回收acer" />
                    <img src={panasonic} style={{ width: 'auto', height: '50px' }} alt="二手回收panasonic" />
                </div>
            </div>
            {/* 1 - Apple */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收Apple產品</h1>
                <p className="px-10 pb-2">
                二手回收iPhone 手機、iPad 平板電腦、Mac 電腦、Apple Watch 智慧手錶、AirPods 耳機以及 Apple Vision Pro 虛擬實境頭戴設備等電子產品。
                </p>
                <Link to="/type/Apple" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={AppleC} style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="Apple高價回收/收購二手Macbook/二手iPhone/二手iPad/二手MacMini/二手MacStudio/二手Mac Pro/二手VisionPro/二手iWatch/二手AirPodsPro立即預約門市/上門回收等電子產品 " />
                </div>
            </div>
            {/* 2 - Lenovo */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收Lenovo產品</h1>
                <p className="px-10 pb-2">
                二手回收ThinkPad系列、IdeaPad系列、Legion系列、Yoga系列等電子產品。
                </p>
                <Link to="/type/Lenovo" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={LenovoC} style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="Lenovo高價回收二手手機/免費估價/回收iPhone/二手/高價" />
                </div>
            </div>
            {/* 3 - Samsung */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收Samsung產品</h1>
                <p className="px-10 pb-2">
                二手回收Galaxybook系列{'('}Galaxybook Pro, Galaxybook AI, Galaxybook Ultra{')'}、Galaxy Tab平板系列等電子產品。
                </p>
                <Link to="/type/Samsung" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={SamsungC} style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="Samsung舊手機回收/高價收購手機回收/上門服務閒置手機回收/現金/損壞手機回收 唔挑成色" />
                </div>
            </div>
            {/* 4 - RAZER */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收RAZER產品</h1>
                <p className="px-10 pb-2">
                二手回收RAZER Blade 14, Blade 16, Blade 18 等電子產品。
                </p>
                <Link to="/type/Razer" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={RazerC} style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="Razer二手電腦OPPO閒置手機回收安卓二手手機回收高價換新手機舊機回收手機故障回收現金png" />
                </div>
            </div>
            {/* 5 - Asus */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收Asus產品</h1>
                <p className="px-10 pb-2">
                二手回收ASUS Vivo Book, Zenbook, ExpertBook 等電子產品。
                </p>
                <Link to="/type/Asus" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={AsusC} style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="Asus淘汰手機高價回收二手手機回收安全銷毀批量手機回收公司學生二手手機收購png" />
                </div>
            </div>
            {/* 6 - MSI */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收MSI產品</h1>
                <p className="px-10 pb-2">
                二手回收MSI Vector 18 HX, Stealth 16, Raider 18 HX, Summit 13等電子產品。
                </p>
                <Link to="/type/MSI" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={MSIC} style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="MSI中古手機回收價錢查詢旺角二手手機回收門市[屯元天] 手機回收上門 高價回收二手手機舊手機回收 現金結數" />
                </div>
            </div>
        </div>
    </>
  );
};

export default Type;