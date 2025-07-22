import React, { useState } from "react";
import MicIcon from "../assets/icons/mic_icon";
import StopIcon from "../assets/icons/stop_icon";
import CustomAudioPlayer from "./AudioPlayer";
import ResultSection from "./ResultSection";
import { transcribeMedia } from "../api/api";
import useResultReset from "../hooks/useResultReset";

const VoiceRecorderTab = ({ color }) => {
  const {
    audioURL, setAudioURL,
    apiResponse, setApiResponse,
    actionDone, setActionDone,
    activeResultTab, setActiveResultTab,
    extra, setExtra,
    reset,
  } = useResultReset({ isRecording: false });

  // Use extra.isRecording and setExtra({ ...extra, isRecording: true/false })

  // Start recording
  const startRecording = () => {
    setExtra({ ...extra, isRecording: true });
  };

  // Call this when recording is finished
  const handleRecordingDone = async (recordedAudioUrl) => {
    setExtra({ ...extra, isRecording: false });
    setAudioURL(recordedAudioUrl);
    setApiResponse(null);
    setActionDone(true);
    try {
      const response = await transcribeMedia([recordedAudioUrl]);
      setApiResponse(response);
    } catch (error) {
      setApiResponse(null);
    }
  };

  return (
    <>
      {!actionDone ? (
        <div className="flex flex-col items-center w-full">
          {/* Caption and mic icon before recording */}
          {!extra.isRecording && (
            <>
              <button
                className="flex items-center justify-center w-20 h-20 rounded-full mb-4 text-white transition hover:scale-105 hover:brightness-80 cursor-pointer"
                style={{ background: color, fontSize: 48 }}
                onClick={startRecording}
                aria-label="شروع ضبط"
              >
                <MicIcon style={{ width: 48, height: 48 }} />
              </button>
              <p className="text-[#626262] w-[315px] text-center mb-4">
                برای ضبط صدا، دکمه میکروفون را فشار دهید و پس از پایان، نتیجه را مشاهده کنید
              </p>
            </>
          )}
          {/* Pulsing stop icon while recording */}
          {extra.isRecording && (
            <>
            <button
              className="flex items-center justify-center w-20 h-20 rounded-full  text-white animate-pulse cursor-pointer mb-4"
              style={{ background: color , fontSize: 48 }}
              onClick={() => {
                handleRecordingDone("https://i.ganjoor.net/a2/41417.mp3");
              }}
              aria-label="پایان ضبط"
            >
              <StopIcon style={{ width: 48, height: 48 }} />
            </button>
            <p className="text-[#626262]">برای توقف دکمه را فشار بدهید</p>
            </>
          )}
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

export default VoiceRecorderTab;