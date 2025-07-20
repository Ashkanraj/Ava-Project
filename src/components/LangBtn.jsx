import React, { useState } from "react";
import DropIcon from "../assets/icons/drop_icon";
 // <-- Add this

const LangBtn = ({ className = "" }) => {
  const [openBtn, setOpenBtn] = useState(false);
 

  
  return (
    <div className={`relative ${className}`} >
      <button
        className={`flex items-center justify-between w-full text-[#00B5A0] text-sm px-4 py-2 border-[1px] border-[#00B5A0] transition ${openBtn ? `border-x border-t rounded-t-lg` : `rounded-full hover:bg-[#02816E] hover:text-white`}`}
        onClick={() => setOpenBtn((prev) => !prev)}
        type="button"
      >
        <div className="flex gap-1">

          <p>فارسی</p>
        </div>
        <div  className={openBtn ? `rotate-180`:`rotate-0`}> 
            <DropIcon/>
        </div>
             </button>
      {openBtn && (
        <ul className="absolute left-0 w-full text-[#00B5A0] text-sm bg-white border-x border-b border-[#00B5A0] rounded-b-lg transition z-10">
          <li
            className="flex gap-2 items-center px-4 py-2 hover:bg-[#02816E] hover:text-white cursor-pointer flex items-center  rounded-b-lg"
            onClick={() => {
              setOpenBtn(false);
            }}
          >
            <span>انگلیسی</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LangBtn;