import React from "react";
import RefreshIcon from "../assets/icons/refresh_icon";
import CopyIcon from "../assets/icons/copy_icon";
import DownloadIcon from "../assets/icons/download_icon";

const ResultBar = ({
  activeTab,
  onTabChange,
  onRestart,
  onCopy,
  onDownload,
  color = "#118AD3",
}) => {
    return(
  <div className="w-full flex items-center justify-between border-b-2 border-gray-200 py-2 px-4">
    {/* Right: Tabs */}
    <div className="flex gap-2 text-xs text-[#626262]">
      <button
        className={`px-4 py-1 rounded-t transition border-b-2 ${
          activeTab === 0
            ? "border-black text-black font-bold"
            : "border-transparent text-gray-700"
        }`}
        onClick={() => onTabChange(0)}
      >
        متن ساده
      </button>
      <button
        className={`px-4 py-1 rounded-t transition border-b-2 ${
          activeTab === 1
            ? "border-black text-black font-bold"
            : "border-transparent text-gray-700"
        }`}
        onClick={() => onTabChange(1)}
      >
        متن زمانبندی شده
      </button>
    </div>
    {/* Left: Restart button, Copy, Download */}
    <div className="flex items-center gap-2 text-xs text-[#626262]">
      <button
        className="p-2 rounded hover:bg-gray-200"
        onClick={onDownload}
        title="دانلود"
      >
        <DownloadIcon className="w-4 h-4 text-gray-600" />
      </button>
      <button
        className="p-2 rounded hover:bg-gray-200"
        onClick={onCopy}
        title="کپی"
      >
        <CopyIcon className="w-4 h-4 text-gray-600" />
      </button>
      
      <button
          className="flex items-center gap-1 text-white px-3 py-2 rounded-full hover:brightness-80 transition cursor-pointer"
          style={{ background: color }}
          onClick={onRestart}
      >
        <RefreshIcon className="w-4 h-4" />
        شروع دوباره
      </button>
      
    </div>
  </div>
)};

export default ResultBar;