import React, { useState, useRef, useEffect } from "react";
import DropIcon from "../assets/icons/drop_icon";
import UserIcon from "../assets/icons/user_icon";
import LogoutIcon from "../assets/icons/logout_icon"; // <-- Add this

const GuestBtn = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={` ${className}`} ref={ref}>
      <button
        className={`flex items-center justify-between w-[120px] h-[40px] text-[#00B5A0] text-sm px-4 py-2 border-[1px] border-[#00B5A0] transition ${open ? `border-x border-t rounded-t-lg` : `rounded-full hover:bg-[#02816E] hover:text-white`}`}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <div className="flex gap-1">
          <UserIcon />
          <p>مهمان</p>
        </div>
        <div  className={open ? `rotate-180`:`rotate-0`}> 
            <DropIcon/>
        </div>
             </button>
      {open && (
        <ul className="absolute left-0 w-full text-[#00B5A0] text-sm bg-white border-x border-b border-[#00B5A0] rounded-b-lg transition z-10">
          <li
            className="flex gap-2 items-center px-4 py-2 hover:bg-[#02816E] hover:text-white cursor-pointer flex items-center  rounded-b-lg"
            onClick={() => {
              setOpen(false);
            }}
          >
            <LogoutIcon />
            <span>خروج</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default GuestBtn;