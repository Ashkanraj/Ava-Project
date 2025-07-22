import React, { useState } from "react";
import UploadIcon from "../assets/icons/upload_icon";
import CustomAudioPlayer from "./AudioPlayer";
import ResultSection from "./ResultSection";
import { transcribeMedia } from "../api/api";
import useResultReset from "../hooks/useResultReset";

const UploadTab = ({ color }) => {
  const {
    audioURL, setAudioURL,
    apiResponse, setApiResponse,
    actionDone, setActionDone,
    activeResultTab, setActiveResultTab,
    reset,
  } = useResultReset();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAudioURL(url);
    setApiResponse(null);
    setActionDone(true);
    try {
      const response = await transcribeMedia([url]);
      setApiResponse(response);
    } catch (error) {
      setApiResponse(null);
    }
  };

  return (
    <>
      {!actionDone ? (
        <div className="flex flex-col items-center w-full">
          <label className="flex items-center justify-center w-20 h-20 rounded-full mb-4 text-white hover:brightness-80 hover:scale-105 transition cursor-pointer"
                 style={{ background: color }}>
            <UploadIcon />
            <input
              type="file"
              accept="audio/*,video/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <p className="text-[#626262] w-[315px] text-center">
            برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید متن پیاده شده آن، در اینجا ظاهر می شود
          </p>
        </div>
      ) : (
        <ResultSection
          actionDone={actionDone}
          color={color}
          activeResultTab={activeResultTab}
          setActiveResultTab={setActiveResultTab}
          onRestart={reset}
          resultContent={
            <>
              {apiResponse && (
                <pre className="mt-4 text-xs text-gray-700 bg-gray-100 p-2 rounded">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              )}
            </>
          }
          audioPlayer={<CustomAudioPlayer src={audioURL} color={color} />}
        />
      )}
    </>
  );
};

export default UploadTab;
