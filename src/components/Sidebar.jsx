import React from "react";

const Sidebar = () => {
  return (
    <aside
      className="fixed right-0 top-0 h-screen flex flex-col gap-24 w-[166px] bg-[#00B5A0] rounded-l-[10px]"

    >
      {/* Title at the top */}
      <div className="mt-[50px] mx-auto">
        <span className="text-white text-2xl font-bold">آوا</span>
      </div>
      {/* Sidebar items */}
      <div className="flex flex-col gap-2 items-center justify-center">
        <button className="w-[155px] h-[48px] px-6 py-2 rounded-[16px]  text-white text-md font-medium hover:bg-[#02816E] transition">
         تبدیل گفتار
        </button>
        <button className="w-[155px] h-[48px] px-6 py-2 rounded-[16px]  text-white text-md font-medium hover:bg-[#02816E] transition">
          آرشیو
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;