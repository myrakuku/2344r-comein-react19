import React from 'react';
import { Nav } from "./items/Nav";
import Macbook from '../components/image/Macbook.png';
import Window from '../components/image/Window.jpeg';

export const Process = () => {
  return (
    <>
    <title>香港電子產品回收流程 3步快速賣機 | Comein 高價現金收購 iPhone、MacBook 等多種品牌及產品</title>
    <meta name="description" content="Comein重新定義電子產品回收的標準，為您提供極致便利與安心的雙重保證。我們整合了線上即時通訊的快捷與實體交易的可靠，無論您鍾愛何種方式，最終都能享受到專業檢測與即時現金付款的頂級服務，讓處理舊手機、平板成為一種輕鬆可靠的選擇。元朗 天水圍 屯門 元天屯上門回收。" />

    <Nav/>
    <main className="my-10 py-5">
            <h1 className="text-2xl md:text-3xl font-bold px-10">回收流程｜3步極速現金交收</h1>
            <h2 className="text-lg md:text-xl px-10">手機回收／高價回收服務</h2>
            <div className="">
                <div className="p-10">
                    {/* ONE */}
                    <div>
                        <p className="text-lg">1）聯絡方式</p>
                        <p className="pb-5 pl-3 text-sm">請透過WhatsApp與我們聯繫。</p>
                    </div>
                    {/* TWO */}
                    <div>
                    <p className="text-lg">2）提交設備資訊</p>
                    {/* MAC */}
                    <div>
                        <p className="pt-2 pl-3 text-sm font-bold">MacOS裝置</p>
                        <div className="pb-5 pl-3 text-sm">請提供以下資訊：
                            <br />- 品牌
                            <br />- 產品名稱
                            <br />- 尺寸
                            <br />- 年份
                            <br />- 規格（包括CPU、RAM、儲存容量）
                            <br /><br />如Macbook取得規格方式：
                            <br />路徑：屏幕左上方Apple Logo 「關於本機」並截圖
                            <div className='py-3'>
                            <img src={Macbook} width={0} height={0} sizes="100vw" alt={"MacBook回收流程顯示配置CPU/RAM/SSD/Inch/i5/i7/i9/M1/M2/M3/M4/M5/16/18/32/36/48/64/256/512/1T/2T/4T/8T"} className="w-full md:w-[90%] lg:w-[50%] h-auto"></img>
                            </div>
                        </div>
                    </div>
                    {/* WINDOW */}
                    <div>
                        <p className="pt-2 pl-3 text-sm font-bold">Window裝置</p>
                        <div className="pb-5 pl-3 text-sm">請提供以下資訊：
                            <br />- 品牌
                            <br />- 產品名稱
                            <br />- 尺寸
                            <br />- 年份
                            <br />- 規格（包括GPU、CPU、RAM、儲存容量）
                            <br /><br />如Notebook裝置 取得規格方式：
                            <br />路徑：檔案總管 {'>'} 本機 {'>'} 右鍵點選「內容」並截圖
                            <br />或左鍵點選「內容」查看「儲存空間」
                            <br />或透過：右鍵點選「內容」 {'>'}  「裝置管理員」 {'>'}  「顯示卡」以確認GPU型號
                            <div className='pt-3'>
                            <img src={Window} width={0} height={0} sizes="100vw" alt={"二手Window機配置查看CPU/RAY/SSDi3/i5/i7/i9/16/512"} className="w-full md:w-[90%] lg:w-[50%] h-auto"></img>
                            </div>
                        </div>
                    </div>    
                    </div>
                    {/* THREE */}
                    <div>
                    <p className="text-lg">3）交收地點</p>
                    <p className="pt-2 pl-3 text-sm font-bold">門市交收（旺角）</p>
                    <p className="pb-5 pl-3 text-sm">旺角山東街47-51號星際城市3樓304號鋪</p>
                    <p className="pt-2 pl-3 text-sm font-bold">上門交收</p>
                    <p className="pb-5 pl-3 text-sm">可安排專人上門回收，詳情請與我們確認。</p>   
                    </div>
                </div>

                <div>
                    <p className="text-lg font-bold px-10">如有任何疑問，歡迎隨時聯繫我們。 </p>
                </div>
            </div>
        </main>
    </>
  );
};

export default Process;