import React from 'react';
import { Nav } from "./items/Nav";
import News_M5 from '../components/image/News/M5_202510.png';
import News_iphone17pro from '../components/image/News/iphone17pro.jpg';
import News_iphone17 from '../components/image/News/iphone17.jpg';

export const News = () => {
  return (
    <>
    <title>Comein 現高價回收 iPhone 17 Pro Macbook Pro | 專業二手手機二手電腦收購</title>
    <meta name="author" content="Comein" />
    <meta name="keywords" content="Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價" />
    <meta name="description" content="Comein 擁有15年專業經驗，提供企業與個人高價回收服務。涵蓋Apple、Samsung等品牌筆電、手機、平板，安全交易，金融/教育/工程行業客戶首選！在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！" />

    <Nav/>
    <div className="pb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-10">最新消息</h1>
            {/* news - Macbook pro m5 */}
            <div className="text-sm text-center pt-10">
                <div style={{ maxWidth: '300px', margin: '0 auto' }} >
                    <img src={News_M5} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="" />
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center py-5">高價回收Macbook Pro M5, iPad Pro M5, Version Pro M5</h1>
                <p className="text-md py-2">正在開始大量回收/收購</p>
                <p className="text-sm text-gray-300 py-2">2025/10/16</p>
            </div>
            {/* news - iPhone 17 pro */}
            <div className="text-sm text-center pt-10">
                <div style={{ maxWidth: '300px', margin: '0 auto' }} >
                    <img src={News_iphone17pro} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Comein banner Apple product collection iphone Macbook" />
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center py-5">高價回收iPhone 17 pro</h1>
                <p className="text-md py-2">正在開始大量回收/收購</p>
                <p className="text-sm text-gray-300 py-2">2025/09/30</p>
            </div>
            {/* news - iPhone 17 */}
            <div className="text-sm text-center p-10">
                <div style={{ maxWidth: '300px', margin: '0 auto' }} >
                    <img src={News_iphone17} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Comein banner Apple product collection iphone Macbook" />
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center py-5">高價回收iPhone 17</h1>
                <p className="text-md py-2">正在開始大量回收/收購</p>
                <p className="text-sm text-gray-300 py-2">2025/09/30</p>


            </div>
        </div>
    </>
  );
};

export default News;