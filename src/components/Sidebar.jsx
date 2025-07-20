import React from "react";
<<<<<<< Updated upstream
<<<<<<< Updated upstream

const Sidebar = () => {
  return (
    <aside
      className="fixed right-0 top-0 h-screen flex flex-col gap-24 w-[166px] bg-[#00B5A0] rounded-l-[10px]"

    >
=======
import { Link } from "react-router-dom";
import  SideBarBg  from "../assets/sidebar-bg.svg";
import Icon  from "../assets/icons/icon";
import SpeechIcon from "../assets/icons/speech_icon"
import ArchiveIcon from "../assets/icons/archive_icon"


const Sidebar = () => {
  return (
=======
import { Link } from "react-router-dom";
import  SideBarBg  from "../assets/sidebar-bg.svg";
import Icon  from "../assets/icons/icon";
import SpeechIcon from "../assets/icons/speech_icon"
import ArchiveIcon from "../assets/icons/archive_icon"


const Sidebar = () => {
  return (
>>>>>>> Stashed changes
    <div>
    <div className="fixed right-0 top-0  z-1 w-[166px] h-screen"
    style={{ pointerEvents: 'none' }} ><img src={SideBarBg} alt="Sidebar background" /></div>
    <aside className="sidebar-bg fixed right-0 top-0 h-screen flex flex-col gap-24 w-[166px]  rounded-l-[10px] bg-[#00B5A0]">
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      {/* Title at the top */}
      <div className="mt-[50px] mx-auto flex gap-2"> 
        <Icon />
        <span className="text-white text-2xl font-bold">آوا</span>
       
      </div>
      {/* Sidebar items */}
      <div className="flex flex-col gap-2 items-center justify-center">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <button className="w-[155px] h-[48px] px-6 py-2 rounded-[16px]  text-white text-md font-medium hover:bg-[#02816E] transition">
         تبدیل گفتار
        </button>
        <button className="w-[155px] h-[48px] px-6 py-2 rounded-[16px]  text-white text-md font-medium hover:bg-[#02816E] transition">
          آرشیو
        </button>
=======
=======
>>>>>>> Stashed changes
        <Link
          to="/text-to-speech"
          className="flex justify-start gap-4 w-[155px] h-[48px] px-6 py-2 rounded-[16px] text-white text-sm font-medium hover:bg-[#02816E] transition flex items-center justify-center"
        >
          <SpeechIcon/>
          <span>تبدیل گفتار</span>
        </Link>
        <Link
          to="/archive"
          className="flex justify-start gap-4 w-[155px] h-[48px] px-6 py-2 rounded-[16px] text-white text-sm font-medium hover:bg-[#02816E] transition flex items-center justify-center"
        >
          <ArchiveIcon />
          <span>آرشیو</span>
        </Link>
>>>>>>> Stashed changes
      </div>
    </aside>
    </div>
  );
};

export default Sidebar;
