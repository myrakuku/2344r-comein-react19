import React from 'react';
import { Nav } from "../items/Nav";
import SEOContent from "../items/SEOContent";
import Asus1 from "../image/Brand_Collection/Asus/Asus_1.jpeg"
import Asus2 from "../image/Brand_Collection/Asus/Asus_2.jpeg"
import Asus3 from "../image/Brand_Collection/Asus/Asus_3.jpeg"

export const AsusCollection = () => {
  return (
    <>
    <title>旺角ASUS筆電變現首選 | Comein極速估價 現場付款 | 專收香港各型號華碩筆電</title>
    <meta name="description" content="閒置的華碩筆電無需在角落積灰，它們是待盤活的資產。Comein提供最流暢的回收體驗，針對Vivobook、Zenbook等系列，我們提供快速估價與即刻付款服務，是您輕鬆變現、騰出空間的高效途徑。元朗 天水圍 屯門 元天屯上門回收。" />

    <Nav/>
    <div className='pt-5 flex justify-center'>
        <img src={Asus2} alt={"Comein 放售二手Asus電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
        <img src={Asus1} alt={"Comein 放售二手Asus電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
        <img src={Asus3} alt={"Comein 放售二手Asus電腦產品"} style={{ objectFit: 'scale-down', width:'30%' }}></img>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">Asus系列二手電子產品回收：專業與高價的選擇</h1>
            <div className="text-sm text-center pt-5">
                <p className="">
                我們以市場上競爭力強的價格回收二手電子產品。特別是像 Asus 這樣受歡迎的品牌，無論是工作用的 Expert Book、輕薄的 Vivo Book，還是高效能的 ROG 系列，我們都能提供更具吸引力的回收價格，讓您輕鬆變現。
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                我們的回收團隊經驗豐富，對於不同品牌和型號的電子產品都有深入了解。無論是 Asus 系列的戶型，如 Vivo Book、Zenbook、ExpertBook，還是 ROG 系列的強性能產品，如 ALY、ALLY X、X13 Flow、Z13 Flow、TUF、Strix 和 Zephyrus，我們都能提供專業鑑定，並保證合理的回收價格。
                </p>
                <div className="">
                    <p  className="pt-5 font-bold">筆記型電腦</p>
                    <p  className="pt-5">
                    包括 Asus 的各種型號，從 zenbook 與 Vivo Book，到為專業人士而設的 ExpertBook，無論您有哪一款，只要是功能正常的二手產品，我們都非常歡迎。
                    </p>
                    <p  className="pt-5 font-bold">遊戲設備</p>
                    <p  className="pt-5">
                    對於遊戲愛好者，我們提供 ROG 和 TUF 系列的高價回收服務，無論是 ALY、X13 Flow 還是 Zephyrus，這些都能在我們這裡得到合理的回收價。
                    </p>
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
    </>
  );
};

export default AsusCollection;