import React from 'react';
import { Nav } from "./items/Nav";
import discount from '../components/image/discount.png';

// import { Meta } from 'react-dom';

export const Discount = () => {

  return (
    <>
    <Nav/>
    <div className="min-h-screen bg-white text-gray-800 font-sans">
        {/* SEO Meta */}
        <title>【獨家優惠】購買二手電子產品 即送 OpenClaw AI 工作坊半價優惠！</title>
        <meta name="description" content="ComeIn推出智能辦公室升級套裝，購買指定二手電子產品即AI工作坊半價優惠，提升效率高達50%！" />
        <meta name="keywords" content="二手電子產品,AI工作坊,智能辦公室,OpenClaw AI,辦公效率,AI自動化,工作效率,AI入門課程,二手電子優惠,香港優惠" />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <main className="">
            <img src={discount} width={2400} height={1200} layout="responsive" className="w-full h-auto" alt="Apple高價回收/收購二手Macbook/二手iPhone/二手iPad/二手MacMini/二手MacStudio/二手Mac Pro/二手VisionPro/二手iWatch/二手AirPodsPro立即預約門市/上門回收" />
        </main>
        <header className="my-12 md:my-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-6">
            【獨家優惠】購買二手電子產品  即送 OpenClaw AI 工作坊半價優惠！
            </h1>
            <div className="h-0.5 w-16 bg-gray-300"></div>
        </header>

        <div className="prose prose-slate max-w-none text-lg md:text-xl font-light leading-relaxed text-gray-700">
            <p className="mb-8">
            在如今快節奏的商業環境中，提升工作效率成為每位企業家和創業者的首要任務。今天，我們為您帶來一個不容錯過的優惠！ComeIn 推出的「智能辦公室升級套裝」，不僅讓您的二手電子產品硬體升級，還免費贈送 OpenClaw AI 工作坊半價優惠，幫助您掌握最新的技術趨勢，提升競爭力。
            </p>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                💻 什麼是「智能辦公室升級套裝」？
            </h2>
            <p className="mb-0">
                即日起，凡在 ComeIn 購買指定二手電子產品，即可享有 3 個月的保養服務；同時報名參加 OpenClaw AI 安裝流程 Workshop（3 小時），將額外獲贈一堂課程！這不僅僅是一個購物優惠，更是一個全面升級您工作環境的機會。
            </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mt-10 mb-5">
            🐲 龍蝦安裝及入門班｜3小時課程由淺入深
            </h2>
            <p className="mb-6">
            這個課程專為希望從零開始掌握 AI 技術的朋友設計。無論您是初學者還是想進一步提升的專業人士，這裡都有適合您的內容：
            </p>

            <ul className="space-y-3 mb-9 list-none pl-0">
            <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>即時應用：學完即刻應用於工作中，提升效率高達 50%！</span>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>親手實戰：由專業導師一對一指導，幫助您搭建專屬 AI 助手。</span>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>終身受用：涵蓋安裝、API Key 串接、Skills 安裝、安全加固及版本更新等內容，讓您在任何時候都掌握最新知識。</span>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>升級現有設備：只需一堂課程，即可讓您的二手電子產品效能大幅提升！</span>
            </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mt-10 mb-5">
            📲 如何報名？
            </h2>
            <ul className="space-y-3 mb-8 list-none pl-0">
            <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>私訊我們：隨時通訊與我們聯絡，了解更多課程及優惠詳情。</span>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>親臨門市：直接到 ComeIn 門市查詢 OpenClaw AI 工作坊及相關優惠！</span>
            </li>
            </ul>

            <p className="font-medium text-gray-800 mt-8">
            這是一個不容錯過的機會，讓您的工作流程邁向智能化，提升團隊效率，攀登商業高峰！立即行動，抓住這個限時優惠，免費領取高價值 AI 課程！
            </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-sm text-gray-500">
            <p>ComeIn 保留最終所有權利。</p>
        </div>
        </div>
    </div>

    </>
  );
};