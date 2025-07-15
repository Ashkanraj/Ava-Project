import React, { useState } from "react";

const tabs = [
  {
    label: "ضبط صدا",
    color: "#00B5A0",
    content: (
      <div className="flex flex-col items-center text-[#00B5A0] "> 
        <span className="w-16 h-16 rounded-[100%] bg-[#00B5A0] mb-4"></span>
        <p className="w-[275px] text-[#626262] text-center">برای شروع به صحبت، دکمه را فشار دهید
        متن پیاده شده آن، در اینجا ظاهر شود</p>
      </div>
    ),
  },
  {
    label: "بارگذاری فایل",
    color: "#118AD3",
    content: (
      <div className="flex flex-col items-center ">
      <span className="w-16 h-16 rounded-[100%] bg-[#118AD3] mb-4"></span>
        <h3 className="text-xl font-bold mb-1"></h3>
        <p className="text-[#626262] w-[315px] text-center">برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید
        متن پیاده شده آن، در اینجا ظاهر می شود</p>
      </div>
    ),
  },
  {
    label: "لینک",
    color: "#FF1654",
    content: (
      <div className="flex flex-col items-center">
        <div className="flex justify-center mb-6">
            <input
             type="text"
             placeholder="example.com/sample.mp3"
             className="w-[325px] h-12 text-left px-5 border border-[#FF1654] rounded-[50px] focus:outline-none focus:ring-2 focus:ring-[#FF1654] transition "
             style={{ fontFamily: 'inherit' }}
             />
        </div>
        <p className="text-[#626262] w-[350px] text-center">نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد
        و دکمه را فشار دهید</p>
      </div>
    ),
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="flex flex-col items-center w-[90%] mr-[10%]">
      <div className="relative w-full flex items-center justify-center">
        {/* Dropdown Button */}
        <div>
          <button className="absolute w-[120px] h-[40px] left-[50px] top-[50px] border-[1px] border-[#00B5A0] text-[#00B5A0] text-sm px-4 py-2 rounded-full hover:bg-[#02816E] hover:text-white transition">
            مهمان  ▼  
          </button>
        </div>
        {/* Title and Caption */}
        <div className=" flex flex-col gap-4 w-[450px]  mt-16 mb-8 items-center text-center">
          <h2 className="text-2xl text-[#00B5A0] font-bold">تبدیل گفتار به متن</h2>
          <span className="text-gray-500 text-sm mt-1 text-[969696]">آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف،
          زبان فارسی را یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد.</span>
        </div>
       </div>

      {/* Tabs Section */}
      <div className=" flex flex-col items-center">
        <div className="flex w-full">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2  rounded-t-lg font-medium transition
                ${activeTab === idx
                  ? "text-white"
                  : " text-gray-700 hover:bg-gray-200"}
              `}
              style={activeTab === idx ? { backgroundColor: tab.color } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="w-[550px] h-[370px] bg-white rounded-[25px] p-6  flex justify-center items-center"
        style={tabs[activeTab].label === "ضبط صدا" ? {
            borderTopRightRadius: "0", 
            border: `2px solid ${tabs[activeTab].color}`} : {border: `2px solid ${tabs[activeTab].color}`}}
        >
          {tabs[activeTab].content}
        </div>
      </div>
      <div className="flex justify-end items-center gap-4 mt-4 w-[550px]">
        <p className="text-[#626262] text-sm">زبان گفتار:</p>
          <button className="w-[120px] h-[40px] border-[1px] border-[#00B5A0] text-[#00B5A0] text-sm px-4 py-2 rounded-full hover:bg-[#02816E] hover:text-white transition">
            فارسی ▼  
          </button>
        </div>
    </section>
  );
};

export default Dashboard;