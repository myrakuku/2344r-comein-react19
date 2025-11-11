import React from 'react';
import { Nav } from "../items/Nav";
import SEOContent from "../items/SEOContent";
import MSI1 from '../image/Brand_Collection/MSI/MSI_1.jpg';
import MSI2 from '../image/Brand_Collection/MSI/MSI_2.jpg';
import MSI3 from '../image/Brand_Collection/MSI/MSI_3.jpg';



export const MSICollection = () => {
  return (
    <>
    <title>MSI電競裝備最快變現通道 | 旺角Comein現場檢測 立即付款 | 專收高性能筆電</title>
    <meta name="description" content="釋放您MSI電競筆記本的剩餘戰力！ Comein專業高價回收MSI Vector、Stealth等高性能機種。我們精通其硬體價值，能為您的遊戲裝備提供精準估值，助您快速變現，為升級下一代神兵利器提供資金。元朗 天水圍 屯門 元天屯上門回收。" />

    <Nav/>
    <div className='pt-5 flex justify-center'>
        <img src={MSI1} alt={"Comein 放售二手MSI電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
        <img src={MSI2} alt={"Comein 放售二手MSI電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
        <img src={MSI3} alt={"Comein 放售二手MSI電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">二手電子產品回收：高價回收MSI筆電與更多選擇</h1>
            <div className="text-sm text-center pt-5">
                <p className="">
                在香港旺角地區，越來越多的消費者關注環保與可持續發展，二手電器回收成為一個熱門的選擇。如果你擁有MSI的筆記本電腦或者其他二手電子產品，隨時都可以考慮將其出售給專業的回收店。我們的商店專業提供高價回收服務，特別針對以下MSI產品系列：
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                專業可靠：我們的團隊擁有多年的電子產品回收經驗，對市場動態及價格變化十分敏感，能確保您獲得最公平的回收價格。我們接受MSI產品的回收，包括：
                </p>
                <div className="">
                    
                    <p  className="pt-5 font-bold">MSI Vector 系列</p>
                    <br />MSI Vector 16 HX
                    <br />MSI Vector 18 HX
                    <br />Vector A18
                    <p  className="pt-5 font-bold">MSI Stealth 系列</p>
                    <br />MSI Stealth 16
                    <br />MSI Stealth A16
                    <p  className="pt-5 font-bold">Summit 系列</p>
                    <br />Summit 13
                    <br />Summit A16
                    <br />Summit E13
                    <p  className="pt-5 font-bold">Crosshair 系列</p>
                    <br />Crosshair 16 HX
                    <br />Crosshair 18 HX
                    <p  className="pt-5 font-bold">Kantana 系列</p>
                    <br />Kantana 15
                    <br />Kantana A15
                    <p  className="pt-5 font-bold">MSI 其他產品 系列</p>
                    <br />MSI Raider 18 HX
                    <br />MSI Taitan 18 HX
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
    
    </>
  );
};

export default MSICollection;