import React, { useState } from "react";
import  MicIcon  from "../assets/icons/mic_icon";
import  UploadIcon  from "../assets/icons/upload_icon";
import  LinkIcon  from "../assets/icons/chain_icon";
import DropdownButton from "../components/GuestBtn";
import LangBtn from "../components/LangBtn";

 

const tabs = [
  {
    label: "ضبط صدا",
    color: "#00B5A0",
    icon: <MicIcon/>,
    content: (
      <div className="flex flex-col items-center text-[#00B5A0] "> 
        <span className="flex items-center justify-center w-16 h-16 rounded-[100%] bg-[#00B5A0] text-white mb-4 hover:bg-[#02816E] transition"><MicIcon/></span>
        <p className="w-[275px] text-[#626262] text-center">برای شروع به صحبت، دکمه را فشار دهید
        متن پیاده شده آن، در اینجا ظاهر شود</p>
      </div>
    ),
  },
  {
    label: "بارگذاری فایل",
    color: "#118AD3",
    icon: <UploadIcon/>,
    content: (
      <div className="flex flex-col items-center ">
<<<<<<< Updated upstream:src/pages/Dashboard.jsx
      <span className="w-16 h-16 rounded-[100%] bg-[#118AD3] mb-4"></span>
        <h3 className="text-xl font-bold mb-1"></h3>
=======
      <span className="flex items-center justify-center w-16 h-16 rounded-[100%] bg-[#118AD3] mb-4 text-white hover:brightness-80 transition"><UploadIcon/></span>
>>>>>>> Stashed changes:src/pages/Main.jsx
        <p className="text-[#626262] w-[315px] text-center">برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید
        متن پیاده شده آن، در اینجا ظاهر می شود</p>
      </div>
    ),
  },
  {
    label: "لینک",
    color: "#FF1654",
    icon: <LinkIcon/>,
    content: (
      <div className="flex flex-col items-center">
        <div className="relative flex justify-center mb-6">
            <input
             type="text"
             placeholder="example.com/sample.mp3"
             className="w-[325px] h-12 text-left pl-12 pr-5 border border-[#FF1654] rounded-[50px] focus:outline-none focus:ring-2 focus:ring-[#FF1654] transition "
             style={{ fontFamily: 'inherit' }}
             />
                   <span className="absolute left-[10px] top-[7px] flex items-center justify-center w-[35px] h-[35px] rounded-[100%] bg-[#FF1654] mb-4 text-white"><LinkIcon/></span>
        </div>
        <p className="text-[#626262] w-[350px] text-center">نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد
        و دکمه را فشار دهید</p>
      </div>
    ),
  },
];

const Main = () => {
  const [activeTab, setActiveTab] = useState(0);
 

  return (
    <section className="flex flex-col items-center w-[90%] mr-[10%]">
      <div className="relative w-full flex items-center justify-center">
       {/* Dropdown Button */}
       <DropdownButton
          className="absolute left-[50px] top-[50px]"
        />
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
              className={`flex items-center gap-2 px-6 py-2  rounded-t-lg text-sm font-medium transition
                ${activeTab === idx
                  ? "text-white"
                  : " text-gray-700 hover:bg-gray-200"}
              `}
              style={activeTab === idx ? { backgroundColor: tab.color } : {}}
            >
              {tab.icon}
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
        <LangBtn  className="w-[120px] h-[40px]" />
        </div>
    </section>
  );
};

export default Main;