import React from 'react';

export default function  Terms() {
  const terms = [
    {
      cn: "任何通訊／網上報價僅供參考；最終回收價以本店（Come In）到店檢測及當日行情為準。",
      en: "Any quote via phone/online is for reference only; final price is subject to in-store inspection and market price on the day."
    },
    {
      cn: "交付前請先備份並解除所有鎖；未能解除本店（Come In）可拒收／取消。",
      en: "Back up and remove all locks; if not removable, Come In may refuse/cancel."
    },
    {
      cn: "客戶確認貨品來源合法並有權出售／交付；如涉失竊、詐騙或違反香港法律，本店（Come In）可拒收並配合執法機關；客戶須承擔全部法律責任並賠償本公司（Come In）一切損失。",
      en: "Customer confirms legal ownership. If illegal/stolen/fraud, Come In may refuse and assist law enforcement; customer bears all liability and indemnifies Come In for all losses."
    },
    {
      cn: "回收價以檢測為準；如與申報不符，本店（Come In）可重新報價或拒收。",
      en: "Price is subject to inspection; if not as stated, Come In may re-quote or refuse."
    },
    {
      cn: "成交並收妥款項後交易完成，貨品即屬本店（Come In）所有；客戶不得取回或索償。",
      en: "After payment, ownership transfers to Come In; no reclaim/claims."
    },
    {
      cn: "所有回收貨品如需補回配件，須於【7】日內補回；逾期扣起費用不作退還，配件不作保留／退回。",
      en: "Accessories due within [7] days; deductions are non-refundable; accessories not held/returned."
    },
    {
      cn: "本店（Come In）保留最終決定權。",
      en: "Come In reserves the right of final decision."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        回收條款與條件
      </h2>
      <div className="space-y-6 text-center">
        {terms.map((term, index) => (
          <div 
            key={index}
            className="bg-white border-t-2 border-gray-100 p-5 md:p-6 mx-20"
          >
            <p className="text-gray-800 font-medium text-sm md:text-md leading-relaxed mb-2">
              {term.cn}
            </p>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed italic">
              {term.en}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}