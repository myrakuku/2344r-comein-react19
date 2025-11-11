import React from 'react';
import { Nav } from "../items/Nav";
import SEOContent from "../items/SEOContent";
import Samsung1 from '../image/Brand_Collection/Samsung/Samsung_1.jpg';
import Samsung2 from '../image/Brand_Collection/Samsung/Samsung_2.jpg';
import Samsung3 from '../image/Brand_Collection/Samsung/Samsung_3.jpg';

export const SamsungCollection = () => {
  return (
    <>
    <title>透明估價 高效取酬 | Comein旺角回收Samsung電子產品 Galaxy手機/平板高價收購 | 輕鬆安全完成交易</title>
    <meta name="description" content="想輕鬆又安全地將舊電子設備變現？選擇Comein，我們讓回收變得簡單。無論是三星Galaxy設備或其他品牌手機、電腦，我們均提供專業快速的估價。香港客戶可享門市交易或預約上門回收，全程透明，即時付款。元朗 天水圍 屯門 元天屯上門回收。" />

    <Nav/>
    <div className='pt-5 flex justify-center'>
        <img src={Samsung1} alt={"Comein 放售二手Samsung電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
        <img src={Samsung2} alt={"Comein 放售二手Samsung電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
        <img src={Samsung3} alt={"Comein 放售二手Samsung電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">Samsung系列二手回收專家：香港旺角的電子產品回收服務</h1> 
            <div className="text-sm text-center">
                <p className="">
                在科技快速發展的今天，電子產品如手機、平板電腦和筆記本電腦的更新換代速度驚人。特別是Samsung的Galaxy系列產品，包括Galaxy Book、Galaxy Tab和Galaxy S手機，不僅性能強勁，而且設計優雅。不過，隨著新產品的推出，舊款設備的回收和再利用也變得越來越重要。如果您擁有Samsung系列的產品，為何不把它們交給我們進行回收？我們都能為您提供市場上最具競爭力的回收價格。
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                專業可靠：我們的團隊擁有多年的電子產品回收經驗，對市場動態及價格變化十分敏感，能確保您獲得最公平的回收價格。全系列產品回收，我們接受各類Samsung產品的回收，包括：
                </p>
                <div className="">
                    <p  className="pt-5 font-bold">Galaxy Book系列：</p>
                    <br />Galaxy Book
                    <br />Galaxy Book Pro
                    <br />Galaxy Book Pro 360
                    <br />Galaxy Book AI
                    <br />Galaxy Book Ultra
                    <br />Galaxy Book ION
                    <p  className="pt-5 font-bold">Galaxy Tab系列：</p>
                    <br />Galaxy Tab S7 / S7+ / S7 FE
                    <br />Galaxy Tab S8 / S8+ / S8 FE
                    <br />Galaxy Tab S9 / S9+ / S9 FE / S9 Ultra
                    <br />Galaxy Tab S10 / S10+ / S10 FE / S10 Ultra
                    <br />Galaxy Tab S11 / S11+ / S11 FE / S11 Ultra
                    <p  className="pt-5 font-bold">Galaxy S手機系列：</p>
                    <br />Galaxy S20 / S20+ / S20 Ultra
                    <br />Galaxy S21 / S21+ / S21 Ultra
                    <br />Galaxy S22 / S22+ / S22 Ultra
                    <br />Galaxy S23 / S23+ / S23 Ultra
                    <br />Galaxy S24 / S24+ / S24 Ultra
                    <br />Galaxy S25 / S25+ / S25 Ultra
                    <br />Galaxy Z Fold 5 / Fold 6 / Fold 7
                    <br />Galaxy Z Flip 5 / Flip 6 / Flip 7
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
    </>
  );
};

export default SamsungCollection;