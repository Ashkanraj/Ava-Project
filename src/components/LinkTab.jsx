import React, { useState } from "react";
import LinkIcon from "../assets/icons/chain_icon";
import CustomAudioPlayer from "./AudioPlayer";
import ResultSection from "./ResultSection";
import { transcribeMedia } from "../api/api";
import useResultReset from "../hooks/useResultReset";

const LinkTab = ({ color }) => {
  const {
    audioURL, setAudioURL,
    apiResponse, setApiResponse,
    actionDone, setActionDone,
    activeResultTab, setActiveResultTab,
    extra, setExtra,
    reset,
  } = useResultReset({ linkInput: "" });

  // Use extra.linkInput and setExtra({ ...extra, linkInput: newValue })

  const handleLinkSubmit = async (e) => {
    e.preventDefault();
    if (!extra.linkInput) return;
    setAudioURL(extra.linkInput);
    setApiResponse(null);
    setActionDone(true);
    try {
      const response = await transcribeMedia([extra.linkInput]);
      setApiResponse(response);
    } catch (error) {
      setApiResponse(null);
    }
  };

  return (
    <>
      {!actionDone ? (
        <div className="flex flex-col items-center w-full">
          <form onSubmit={handleLinkSubmit} className="w-full flex flex-col items-center gap-4">
            <div className="relative w-[325px]">
              <input
                type="text"
                placeholder="example.com/sample.mp3"
                value={extra.linkInput}
                onChange={(e) => setExtra({ ...extra, linkInput: e.target.value })}
                className="w-full h-12 text-left pl-12 pr-5 border border-[#FF1654] rounded-[50px] focus:outline-none focus:ring-2 focus:ring-[#FF1654] transition"
                style={{ fontFamily: 'inherit' }}
              />
              <button
                type="submit"
                className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full hover:brightness-90 transition cursor-pointer"
                style={{ background: color, color: "#fff" }}
                tabIndex={-1}
              >
                <LinkIcon />
              </button>
            </div>
            <p className="text-[#626262] w-[350px] text-center">
              نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد و دکمه را فشار دهید
            </p>
          </form>
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

export default LinkTab;
