import React from 'react';
import { Nav } from "../items/Nav";
import SEOContent from "../items/SEOContent";
import Lenovo1 from '../image/Brand_Collection/Lenovo/Lenovo_1.jpg';
import Lenovo2 from '../image/Brand_Collection/Lenovo/Lenovo_2.jpg';
import Lenovo3 from '../image/Brand_Collection/Lenovo/Lenovo_3.jpg';


export const LenovoCollection = () => {
  return (
    <>
    <title>商務筆電資產變現專家 | Comein旺角高價收購Lenovo ThinkPad全系列 | X1 Carbon/X1 Yoga專收</title>
    <meta name="description" content="您的ThinkPad不僅是工具，更是可靠的商業資產。Comein深刻理解ThinkPad X1 Carbon、X1 Yoga等系列的堅固品質與市場需求，我們提供專業的價值評估，助您高效處理閒置的商務筆電，實現資產的最佳變現。元朗 天水圍 屯門 元天屯上門回收。" />

    <Nav/>
    <div className='pt-5 flex justify-center'>
        <img src={Lenovo1} alt={"Comein 放售二手Lenovo電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
        <img src={Lenovo2} alt={"Comein 放售二手Lenovo電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
        <img src={Lenovo3} alt={"Comein 放售二手Lenovo電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">Lenovo系列二手回收專家：香港旺角的電子產品回收服務</h1>
            <div className="text-sm text-center pt-5">
                <p className="">
                隨著科技的迅速演變，閒置的電子產品往往會貶值。如果您擁有Lenovo系列的產品，為何不把它們交給我們進行回收，讓它們煥發新的生命？無論是 Thinkpad、Thinkpad X1 Carbon、Thinkpad X1 Yoga、Thinkbook、ideapad Slim、ideapad Flex、Yoga、Legion，還是Lenovo Gaming系列，我們都能為您提供市場上最具競爭力的回收價格。
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                專業可靠：我們的團隊擁有多年的電子產品回收經驗，對市場動態及價格變化十分敏感，能確保您獲得最公平的回收價格。全系列產品回收，我們接受各類Lenovo產品的回收，包括：
                </p>
                <div className="">
                    <p  className="pt-5 font-bold">Thinkpad系列</p>
                    <br />Thinkpad X1 Carbon
                    <br />Thinkpad X1 Yoga
                    <p  className="pt-5 font-bold">Thinkbook系列</p>
                    <p  className="pt-5 font-bold">ideapad系列</p>
                    <br />ideapad Standard
                    <br />ideapad Slim
                    <br />ideapad Flex
                    <p  className="pt-5 font-bold">Yoga系列</p>
                    <p  className="pt-5 font-bold">Legion系列</p>
                    <p  className="pt-5 font-bold">Lenovo Gaming系列</p>
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
    
    </>
  );
};

export default LenovoCollection;