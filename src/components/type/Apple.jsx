import React from 'react';
import { Nav } from "../items/Nav";
import SEOContent from "../items/SEOContent";
import Apple1 from '../image/Brand_Collection/Apple/Apple_1.jpg';
import Apple2 from '../image/Brand_Collection/Apple/Apple_2.jpg';
import Apple3 from '../image/Brand_Collection/Apple/Apple_3.jpg';

export const AppleCollection = () => {
  return (
    <>
    <title>Comein | Apple產品極速變現 | 一站式回收您所有的MacBook, iPhone, iPad, Vision Pro等裝置</title>
    <meta name="description" content="為您的Apple設備安排一場優雅的退場。Comein專精於MacBook、iPhone等產品的價值評估，提供極簡、快速且安全的回收流程，助您即刻釋放閒置產品的剩餘價值，實現無縫升級。元朗 天水圍 屯門 元天屯上門回收。" />

    <Nav/>
    <div className='pt-5 flex justify-center'>
        <img src={Apple1} width={0} height={0} sizes="100vw" alt={"Comein 放售二手Macbook"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
        <img src={Apple2} width={0} height={0} sizes="100vw" alt={"Comein 放售二手Macbook"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
        <img src={Apple3} width={0} height={0} sizes="100vw" alt={"Comein 放售二手Macbook"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">Apple二手回收專家：香港旺角的電子產品回收服務</h1>
            <div className="text-sm text-center pt-5">
                <p className="">
                在科技快速更新的時代，閒置的產品與其放著貶值，不如交給我們高價回收變現！無論是iPhone、MacBook、iPad、Apple Watch還是其他Apple設備，我們都以市場頂尖價格現金收購，讓您的舊機發揮最大剩餘價值！
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                專業可靠：我們的團隊擁有多年的電子產品回收經驗，對市場動態及價格變化十分敏感，能確保您獲得最公平的回收價格。全系列產品回收：我們接受各式蘋果產品的回收，例如：
                </p>
                <div className="">
                    <p  className="pt-5 font-bold">MacBook Pro 系列：</p>
                    <br />MacBook Pro 13 (i5, i7, M1, M2)
                    <br />MacBook Pro 14 (M1 Pro, M1 Max, M2 Pro, M2 Max, M3 Pro, M3 Max, M4 Pro, M4 Max)
                    <br />MacBook Pro 15 (i7, i9)
                    <br />MacBook Pro 16 (i7, i9, M1 Pro, M1 Max, M2 Pro, M2 Max, M3 Pro, M3 Max, M4 Pro, M4 Max)
                    <p  className="pt-5 font-bold">MacBook Air 系列：</p>
                    <br />MacBook Air 13 (i3, i5, i7, M1, M2, M3, M4)
                    <br />MacBook Air 15 (M2, M3, M4)
                    <p  className="pt-5 font-bold">其他蘋果產品：</p>
                    <br />Mac Pro、iMac、Mac Mini、Mac Studio等
                    <br />iPhone 系列（如 iPhone 7、8、X、11、12、13、14、15 等各型號）
                    <br />AirPods、iPad（Air及Pro系列）等
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
    
    </>
  );
};

export default AppleCollection;