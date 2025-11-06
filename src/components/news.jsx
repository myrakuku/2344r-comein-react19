import React from 'react';
import { Nav } from "./items/Nav";

export const News = () => {

  const samsung_date = '更新至：2025-10-01';
  const huawei_date = '更新至：2025-01-01';
  const apple_date = '更新至：2025-11-01';

  const Samsung_products = [
    { name: 'Samsung 三星 Galaxy S25 5G (12+256GB)', price: '$3200' },
    { name: 'Samsung 三星 Galaxy S25 5G (12+512GB)', price: '$3600' },
    { name: 'Samsung 三星 Galaxy S25 Edge 5G (12+256GB)', price: '$4600' },
    { name: 'Samsung 三星 Galaxy S25 Edge 5G (12+512GB)', price: '$5000' },
    { name: 'Samsung 三星 Galaxy S25+ 5G (12+256GB)', price: '$4400' },
    { name: 'Samsung 三星 Galaxy S25+ 5G (12+512GB)', price: '$5000' },
    { name: 'Samsung 三星 Galaxy S25 Ultra 5G (12+256GB)', price: '$5200' },
    { name: 'Samsung 三星 Galaxy S25 Ultra 5G (12+512GB)', price: '$6100' },
    { name: 'Samsung 三星 Galaxy S25 Ultra 5G (16+1TBGB)', price: '$7200' },
    { name: 'Samsung 三星 Galaxy S24 5G (8+256GB)', price: '$2200' },
    { name: 'Samsung 三星 Galaxy S24 5G (8+512GB)', price: '$2400' },
    { name: 'Samsung 三星 Galaxy S24+ 5G (12+256GB)', price: '$3000' },
    { name: 'Samsung 三星 Galaxy S24+ 5G (12+512GB)', price: '$3200' },
    { name: 'Samsung 三星 Galaxy S24 Ultra 5G (12+256GB)', price: '$4000' },
    { name: 'Samsung 三星 Galaxy S24 Ultra 5G (12+512GB)', price: '$4400' },
    { name: 'Samsung 三星 Galaxy S24 Ultra 5G (12+1TBGB)', price: '$4800' },
    { name: 'Samsung 三星 Galaxy Z Fold6 5G (12+256GB)', price: '$5000' },
    { name: 'Samsung 三星 Galaxy Z Fold6 5G (12+512GB)', price: '$5400' },
    { name: 'Samsung 三星 Galaxy Z Fold6 5G (12+1TB)', price: '$5800' },
    { name: 'Samsung 三星 Galaxy Z Flip6 5G (12+256GB)', price: '$2400' },
    { name: 'Samsung 三星 Galaxy Z Flip6 5G (12+512GB)', price: '$2800' },
    { name: 'Samsung 三星 Galaxy Z Fold5 5G (12+256GB)', price: '$3000' },
    { name: 'Samsung 三星 Galaxy Z Fold5 5G (12+512GB)', price: '$3300' },
    { name: 'Samsung 三星 Galaxy Z Flip5 5G (8+256GB)', price: '$1600' },
    { name: 'Samsung 三星 Galaxy Z Flip5 5G (8+512GB)', price: '$1800' },
    { name: 'Galaxy S23 Ultra 5G 12+256GB', price: '$3000' },
    { name: 'Galaxy S23 Ultra 5G 12+512GB', price: '$3300' },
    { name: 'Galaxy S23 Ultra 5G 12+1TBGB', price: '$3600' },
    { name: 'Galaxy S23+ 5G 12+256GB', price: '$2000' },
    { name: 'Galaxy S23+ 5G 12+512GB', price: '$2300' },
    { name: 'Galaxy S23 5G 8+128GB', price: '$1300' },
    { name: 'Galaxy S23 5G 8+256GB', price: '$1500' },
    { name: 'Samsung Galaxy Z Fold4 5G (12+256GB)', price: '$2000' },
    { name: 'Samsung Galaxy Z Fold4 5G (12+512GB)', price: '$2200' },
    { name: 'Samsung Galaxy Z Flip4 5G (8+256GB)', price: '$1000' },
    { name: 'Samsung Galaxy Z Flip4 5G (8+512GB)', price: '$1200' },
    { name: 'Galaxy S22 5G (8+128GB)', price: '$800' },
    { name: 'Galaxy S22 5G (8+256GB)', price: '$1000' },
    { name: 'Galaxy S22+ 5G (8+256GB)', price: '$1200' },
    { name: 'Galaxy S22 Ultra 5G (12+256GB)', price: '$2000' },
    { name: 'Galaxy S22 Ultra 5G (12+512GB)', price: '$2200' },
    { name: 'Galaxy S22 Ultra 5G (12+1TBGB)', price: '$2500' },
    { name: 'Galaxy Z Fold3 5G (12+256GB)', price: '$1200' },
    { name: 'Galaxy Z Fold3 5G (12+512GB)', price: '$1400' },
    { name: 'Galaxy Z Flip3 5G (8+256GB)', price: '$600' },
    { name: 'Galaxy S21 ultra 16+512g', price: '$1400' },
    { name: 'Galaxy S21 ultra 12+256g', price: '$1200' },
    { name: 'Galaxy S21 plus 8+256g', price: '$800' },
    { name: 'Galaxy S21 plus 8+128g', price: '$600' },
    { name: 'Galaxy S21 8+256g', price: '$600' },
    { name: 'Galaxy S21 8+128g', price: '$500' },
    { name: 'Galaxy S20 ultra 16+512g', price: '$1000' },
    { name: 'Galaxy S20 ultra 12+256g', price: '$800' },
    { name: 'Galaxy S20 plus 8+128g', price: '$500' },
    { name: 'Galaxy S20 8+128g', price: '$500' },
    { name: 'Galaxy S20 FE 128g', price: '$400' },
    { name: 'Galaxy S20 FE 256g', price: '$500' },
    { name: 'Galaxy Note 20 ultra 512gb', price: '$1400' },
    { name: 'Galaxy Note 20 ultra 256gb', price: '$1200' },
    { name: 'Galaxy Note 20 5G 256gb', price: '$700' },
    { name: 'Galaxy A53 5G (8+256GB)', price: '$700' },
    { name: 'Samsung 三星 Galaxy A54 5G (8+256GB)', price: '$1000' },
    { name: 'Samsung 三星 Galaxy A55 5G (12+256GB)', price: '$1200' },
    { name: 'Samsung 三星 Galaxy A56 5G (12+256GB)', price: '$1800' },
    { name: 'Samsung 三星 Galaxy A36 5G (8+256GB)', price: '$1300' },
    { name: 'Galaxy Note 10 plus 512gb', price: '$600' },
    { name: 'Galaxy Note 10 plus 256gb', price: '$500' },
    { name: 'Galaxy Note 10 256gb', price: '$400' },
    { name: 'Galaxy Note 10 lite 128gb', price: '$400' },
    { name: 'Galaxy Fold2 512g', price: '$900' },
    { name: 'Galaxy Fold 512g', price: '$500' },
    { name: 'Galaxy S10+ 1TB', price: '$600' },
    { name: 'Galaxy S10+ 512g', price: '$500' },
    { name: 'Galaxy S10+ 128g', price: '$400' },
    { name: 'Galaxy S10 512g', price: '$350' },
    { name: 'Galaxy S10 128g', price: '$300' },
    { name: 'Galaxy S10e', price: '$300' },
    { name: 'Galaxy Note 9 512gb', price: '$300' },
    { name: 'Galaxy Note 9 128gb', price: '$300' },
    { name: 'SAMSUNG GALAXY A31', price: '$250' },
    { name: 'SAMSUNG GALAXY A40', price: '$300' },
    { name: 'SAMSUNG GALAXY A40S', price: '$300' },
    { name: 'SAMSUNG GALAXY A50S', price: '$300' },
    { name: 'SAMSUNG GALAXY A60', price: '$200' },
    { name: 'SAMSUNG GALAXY A70 6GB', price: '$250' },
    { name: 'SAMSUNG GALAXY A70 8GB', price: '$300' },
    { name: 'SAMSUNG GALAXY A80', price: '$300' },
    { name: 'SAMSUNG GALAXY A51 (6GB+128GB)', price: '$250' },
    { name: 'SAMSUNG GALAXY A71 (8GB+128GB)', price: '$300' },
    { name: 'SAMSUNG GALAXY A8S', price: '$300' },
    { name: 'SAMSUNG A9 6GB (2018)', price: '$300' },
    { name: 'SAMSUNG A9 8GB (2018)', price: '$300' },
  ];

  const Huawei_products = [
    { name: 'Huawei 華為 Pura X (12+256GB)', price: '$4600' },
    { name: 'Huawei 華為 Pura X (12+512GB)', price: '$5200' },
    { name: 'Huawei 華為 Pura 70 Ultra (16+512GB)', price: '$4000' },
    { name: 'Huawei 華為 Pura 70 Pro+ (16+512GB)', price: '$3500' },
    { name: 'Huawei 華為 Pura 70 Pro (12+512GB)', price: '$3200' },
    { name: 'Huawei 華為 Pura 70 (12+256GB)', price: '$2100' },
    { name: 'Huawei P60 Pro (8+256GB)', price: '$1500' },
    { name: 'Huawei P60 Pro (12+512GB)', price: '$1700' },
    { name: 'HUAWEI P50 PRO 4G 8+256GB', price: '$1000' },
    { name: 'HUAWEI P50 PRO 4G 8+512GB', price: '$1200' },
    { name: 'HUAWEI MATE 40', price: '$1000' },
    { name: 'HUAWEI MATE 40 PRO', price: '$1500' },
    { name: 'HUAWEI MATE 40 PRO PLUS', price: '$1700' },
    { name: 'HUAWEI MATE 40 RS', price: '$3000' },
    { name: 'HUAWEI MATE 20 X (6GB+128GB)', price: '$500' },
    { name: 'HUAWEI MATE 20 X (8GB+256GB)', price: '$600' },
    { name: 'HUAWEI MATE 20', price: '$200' },
    { name: 'HUAWEI MATE 20 PRO', price: '$300' },
    { name: 'P20 128GB', price: '$200' },
    { name: 'P20 PRO 128GB', price: '$400' },
    { name: 'Huawei P30 Pro (8GB+512GB)', price: '$700' },
    { name: 'Huawei P30 Pro (8GB+256GB)', price: '$600' },
    { name: 'Huawei P30 (8GB+128GB)', price: '$400' },
    { name: 'Huawei P30 Lite (6GB+128GB)', price: '$300' },
    { name: 'HUAWEI P40 (8GB+128GB)', price: '$700' },
    { name: 'HUAWEI P40 PRO (8GB+256GB)', price: '$1000' },
    { name: 'Honor 榮耀 Magic V2 5G (16+512GB)', price: '$3000' },
    { name: 'Honor 榮耀 Magic V3 5G (16+512GB)', price: '$5000' },
    { name: 'Honor 榮耀 Magic 7 Pro 5G (16+512GB)', price: '$3800' },
    { name: 'Honor 榮耀 Magic 7 Pro 5G (16GB+1TB)', price: '$4200' },
    { name: 'Honor 榮耀 Magic 6 Pro 5G (12+512GB)', price: '$2600' },
    { name: 'Honor 榮耀 Magic5 Pro 5G (12+512GB)', price: '$1500' },
    { name: 'Honor 榮耀 X9c 5G (12+256GB)', price: '$1100' },
  ];
  
  const Apple_products = [
    { name: 'iPhone 16e 128GB', price: '$2600' },
    { name: 'iPhone 16e 256GB', price: '$3000' },
    { name: 'iPhone 16e 512GB', price: '$3300' },
    { name: 'iPhone 16 128GB', price: '$3500' },
    { name: 'iPhone 16 256GB', price: '$3800' },
    { name: 'iPhone 16 512GB', price: '$4200' },
    { name: 'iPhone 16 Plus 128GB', price: '$4200' },
    { name: 'iPhone 16 Plus 256GB', price: '$4600' },
    { name: 'iPhone 16 Plus 512GB', price: '$5000' },
    { name: 'iPhone 16 Pro 256GB', price: '$5200' },
    { name: 'iPhone 16 Pro 512GB', price: '$5500' },
    { name: 'iPhone 16 Pro 1TB', price: '$6000' },
    { name: 'iPhone 16 Pro Max 256GB', price: '$6000' },
    { name: 'iPhone 16 Pro Max 512GB', price: '$6400' },
    { name: 'iPhone 16 Pro Max 1TB', price: '$7100' },
    { name: 'iPhone 15 128GB', price: '$2600' },
    { name: 'iPhone 15 256GB', price: '$3000' },
    { name: 'iPhone 15 512GB', price: '$3200' },
    { name: 'iPhone 15 Plus 128GB', price: '$3000' },
    { name: 'iPhone 15 Plus 256GB', price: '$3200' },
    { name: 'iPhone 15 Plus 512GB', price: '$3400' },
    { name: 'iPhone 15 Pro 128GB', price: '$3400' },
    { name: 'iPhone 15 Pro 256GB', price: '$3800' },
    { name: 'iPhone 15 Pro 512GB', price: '$4000' },
    { name: 'iPhone 15 Pro 1TB', price: '$4300' },
    { name: 'iPhone 15 Pro Max 256GB', price: '$4800' },
    { name: 'iPhone 15 Pro Max 512GB', price: '$5000' },
    { name: 'iPhone 15 Pro Max 1TB', price: '$5300' },
    { name: 'iPhone 14 128GB', price: '$2000' },
    { name: 'iPhone 14 256GB', price: '$2200' },
    { name: 'iPhone 14 512GB', price: '$2400' },
    { name: 'iPhone 14 Plus 128GB', price: '$2400' },
    { name: 'iPhone 14 Plus 256GB', price: '$2600' },
    { name: 'iPhone 14 Plus 512GB', price: '$2800' },
    { name: 'iPhone 14 Pro 128GB', price: '$2600' },
    { name: 'iPhone 14 Pro 256GB', price: '$3000' },
    { name: 'iPhone 14 Pro 512GB', price: '$3200' },
    { name: 'iPhone 14 Pro 1TB', price: '$3400' },
    { name: 'iPhone 14 Pro Max 128GB', price: '$3400' },
    { name: 'iPhone 14 Pro Max 256GB', price: '$3800' },
    { name: 'iPhone 14 Pro Max 512GB', price: '$4000' },
    { name: 'iPhone 14 Pro Max 1TB', price: '$4300' },
    { name: 'iPhone 13 Mini 128GB', price: '$1200' },
    { name: 'iPhone 13 Mini 256GB', price: '$1400' },
    { name: 'iPhone 13 Mini 512GB', price: '$1600' },
    { name: 'iPhone 13 128GB', price: '$1400' },
    { name: 'iPhone 13 256GB', price: '$1600' },
    { name: 'iPhone 13 512GB', price: '$1800' },
    { name: 'iPhone 13 Pro 128GB', price: '$2100' },
    { name: 'iPhone 13 Pro 256GB', price: '$2400' },
    { name: 'iPhone 13 Pro 512GB', price: '$2600' },
    { name: 'iPhone 13 Pro 1TB', price: '$2800' },
    { name: 'iPhone 13 Pro Max 128GB', price: '$2400' },
    { name: 'iPhone 13 Pro Max 256GB', price: '$3000' },
    { name: 'iPhone 13 Pro Max 512GB', price: '$3200' },
    { name: 'iPhone 13 Pro Max 1TB', price: '$3400' },
    { name: 'iPhone X 64GB', price: '$500' },
    { name: 'iPhone X 256GB', price: '$700' },
    { name: 'iPhone 11 64GB', price: '$900' },
    { name: 'iPhone 11 128GB', price: '$1100' },
    { name: 'iPhone 11 256GB', price: '$1200' },
    { name: 'iPhone 11 Pro 64GB', price: '$900' },
    { name: 'iPhone 11 Pro 256GB', price: '$1200' },
    { name: 'iPhone 11 Pro 512GB', price: '$1300' },
    { name: 'iPhone 11 Pro Max 64GB', price: '$1000' },
    { name: 'iPhone 11 Pro Max 256GB', price: '$1400' },
    { name: 'iPhone 11 Pro Max 512GB', price: '$1500' },
    { name: 'iPhone 12 64GB', price: '$1000' },
    { name: 'iPhone 12 128GB', price: '$1200' },
    { name: 'iPhone 12 256GB', price: '$1400' },
    { name: 'iPhone 12 Mini 64GB', price: '$1000' },
    { name: 'iPhone 12 Mini 128GB', price: '$1200' },
    { name: 'iPhone 12 Mini 256GB', price: '$1300' },
    { name: 'iPhone 12 Pro 128GB', price: '$1400' },
    { name: 'iPhone 12 Pro 256GB', price: '$1600' },
    { name: 'iPhone 12 Pro 512GB', price: '$1700' },
    { name: 'iPhone 12 Pro Max 128GB', price: '$2000' },
    { name: 'iPhone 12 Pro Max 256GB', price: '$2200' },
    { name: 'iPhone 12 Pro Max 512GB', price: '$2400' },
    { name: 'iPhone XR 64GB (A1984)', price: '$500' },
    { name: 'iPhone XR 128GB (A1984)', price: '$700' },
    { name: 'iPhone XR 256GB (A1984)', price: '$800' },
    { name: 'iPhone XS 64GB (A1920)', price: '$600' },
    { name: 'iPhone XS 256GB (A1920)', price: '$800' },
    { name: 'iPhone XS 512GB (A1920)', price: '$900' },
    { name: 'iPhone XS Max 64GB (A1921)', price: '$500' },
    { name: 'iPhone XS Max 256GB (A1921)', price: '$800' },
    { name: 'iPhone XS Max 512GB (A1921)', price: '$900' },
    { name: 'iPhone 7 32GB', price: '$150' },
    { name: 'iPhone 7 128GB', price: '$200' },
    { name: 'iPhone 7 256GB', price: '$250' },
    { name: 'iPhone 7 Plus 32GB', price: '$200' },
    { name: 'iPhone 7 Plus 128GB', price: '$300' },
    { name: 'iPhone 7 Plus 256GB', price: '$400' },
    { name: 'iPhone 8 64GB', price: '$250' },
    { name: 'iPhone 8 128GB', price: '$300' },
    { name: 'iPhone 8 256GB', price: '$350' },
    { name: 'iPhone 8 Plus 64GB', price: '$300' },
    { name: 'iPhone 8 Plus 128GB', price: '$400' },
    { name: 'iPhone 8 Plus 256GB', price: '$450' },
    { name: 'iPhone SE 64GB 2020', price: '$300' },
    { name: 'iPhone SE 128GB 2020', price: '$400' },
    { name: 'iPhone SE 256GB 2020', price: '$500' },
  ];


  return (
    <>
    <title>Comein 二手回收價目表｜ Apple蘋果 Huawei華為 Samsung三星 最新機型回收價格即時查詢</title>
    <meta name="author" content="Comein" />
    <meta name="keywords" content="Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價, iPhone二手回收價,華為二手回收價格,Samsung回收價目表,二手手機回收,蘋果華為三星估價,舊機回收行情,手機回收平台,二手3C回收" />
    <meta name="description" content="提供最新Apple蘋果、Huawei華為、Samsung三星全系列二手回收價格參考，涵蓋iPhone 15 Pro、Mate 60、Galaxy S24等熱門機型價格對比，快速估價，安心回收，立即查詢！" />

    <Nav/>
    <div className="pb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-10">最新回收報價</h1>
            <div className="min-h-screen bg-white text-black">

                {/* Samsung */}
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-xl  text-yellow-500 font-bold text-center">三星Samsung 回收價</h2>
                    <p className="text-sm text-gray-500 text-center mb-8">{samsung_date}</p>
                    
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {Samsung_products.map((product, index) => (
                        <div 
                        key={index} 
                        className="bg-white border border-gray-200 rounded-lg p-2 text-center hover:shadow-md transition-shadow"
                        >
                        <div className="text-sm font-medium mb-1">{product.name}</div>
                        <div className="text-md font-bold text-blue-600">{product.price}</div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Huawei */}
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-xl  text-yellow-500 font-bold text-center">華為Huawei 回收價</h2>
                    <p className="text-sm  text-gray-500 text-center mb-8">{huawei_date}</p>
                    
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {Huawei_products.map((product, index) => (
                        <div 
                        key={index} 
                        className="bg-white border border-gray-200 rounded-lg p-2 text-center hover:shadow-md transition-shadow"
                        >
                        <div className="text-sm font-medium mb-1">{product.name}</div>
                        <div className="text-md font-bold text-blue-600">{product.price}</div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Apple */}
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-xl  text-yellow-500 font-bold text-center">蘋果Apple 回收價</h2>
                    <p className="text-sm  text-gray-500 text-center mb-8">{apple_date}</p>
                    
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {Apple_products.map((product, index) => (
                        <div 
                        key={index} 
                        className="bg-white border border-gray-200 rounded-lg p-2 text-center hover:shadow-md transition-shadow"
                        >
                        <div className="text-sm font-medium mb-1">{product.name}</div>
                        <div className="text-md font-bold text-blue-600">{product.price}</div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
        </div>
    </>
  );
};

export default News;