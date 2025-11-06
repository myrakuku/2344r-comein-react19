import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function WhatsAppButton() {

  const handleClick = () => {
        // 觸發 Google Analytics 的事件跟蹤
        window.gtag('event', 'click', {
            event_category: 'Button',
            event_label: 'Contact Us via WhatsApp',
            value: 1 // 您可以根據需要定義該值
        });
    };

  return (
    <>
      <Link
        to="https://wa.me/69291767"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center space-x-2"
        aria-label="Contact us on WhatsApp"
        onClick={handleClick} // 在這裡添加 onClick 事件
      >
        <FaWhatsapp className="text-2xl" />
        <span className="font-medium">即時報價</span>
      </Link>
    </>
  );
}
