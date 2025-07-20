import React from "react";
import { Link } from "react-router-dom";
import SideBarBg from "../assets/sidebar-bg.svg";
import Icon from "../assets/icons/icon";
import SpeechIcon from "../assets/icons/speech_icon";
import ArchiveIcon from "../assets/icons/archive_icon";

const Sidebar = () => {
  return (
    <div>
      <div
        className="fixed right-0 top-0  z-1 w-[166px] h-screen"
        style={{ pointerEvents: "none" }}
      >
        <img src={SideBarBg} alt="Sidebar background" />
      </div>
      <aside className="sidebar-bg fixed right-0 top-0 h-screen flex flex-col gap-24 w-[166px]  rounded-l-[10px] bg-[#00B5A0]">
        {/* Title at the top */}
        <div className="mt-[50px] mx-auto flex gap-2">
          <Icon />
          <span className="text-white text-2xl font-bold">آوا</span>
        </div>
        {/* Sidebar items */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            to="/text-to-speech"
            className="flex justify-start gap-4 w-[155px] h-[48px] px-6 py-2 rounded-[16px] text-white text-sm font-medium hover:bg-[#02816E] transition flex items-center justify-center"
          >
            <SpeechIcon />
            <span>تبدیل گفتار</span>
          </Link>
          <Link
            to="/archive"
            className="flex justify-start gap-4 w-[155px] h-[48px] px-6 py-2 rounded-[16px] text-white text-sm font-medium hover:bg-[#02816E] transition flex items-center justify-center"
          >
            <ArchiveIcon />
            <span>آرشیو</span>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
