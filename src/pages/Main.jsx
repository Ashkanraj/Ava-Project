import React, { useState } from "react";
import  MicIcon  from "../assets/icons/mic_icon";
import  UploadIcon  from "../assets/icons/upload_icon";
import  LinkIcon  from "../assets/icons/chain_icon";
import DropdownButton from "../components/GuestBtn";
import LangBtn from "../components/LangBtn";
import VoiceRecorder from "../components/VoiceRecorder";
import UploadTab from "../components/UploadTab";
import LinkTab from "../components/LinkTab";
 

const tabs = [
  {
    label: "ضبط صدا",
    color: "#00B5A0",
    icon: <MicIcon />,
    content: <VoiceRecorder color={"#00B5A0"} />,
  },
  {
    label: "بارگذاری فایل",
    color: "#118AD3",
    icon: <UploadIcon />,
    content: <UploadTab color={"#118AD3"} />,
  },
  {
    label: "لینک",
    color: "#FF1654",
    icon: <LinkIcon />,
    content: <LinkTab color={"#FF1654"} />,
  },
];

const Main = () => {
  const [activeTab, setActiveTab] = useState(0);
 

  return (
    <section className="flex flex-col items-center mr-[166px]">
      <div className="relative w-full flex items-center justify-center">
       {/* Dropdown Button */}
       <DropdownButton
          className="absolute left-[50px] top-[50px]"
        />
        {/* Title and Caption */}
        <div className=" flex flex-col gap-4 w-[450px]  mt-16 mb-8 items-center text-center">
          <h2 className="text-2xl text-[#00B5A0] ">تبدیل گفتار به متن</h2>
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
        <div
  className="w-[550px] h-[370px] bg-white rounded-[25px] p-6 flex justify-center items-center"
  style={
    tabs[activeTab].label === "ضبط صدا"
      ? {
          borderTopRightRadius: "0",
          border: `2px solid ${tabs[activeTab].color}`,
        }
      : { border: `2px solid ${tabs[activeTab].color}` }
  }
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