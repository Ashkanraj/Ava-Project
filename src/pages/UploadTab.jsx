import React, { useState } from "react";
import UploadIcon from "../assets/icons/upload_icon";
import CustomAudioPlayer from "../components/AudioPlayer";
import { transcribeMedia } from "../api/api";

const TEST_AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const UploadTab = () => {
  const [audioURL, setAudioURL] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show the selected file in the audio player
    setAudioURL(URL.createObjectURL(file));
    setApiResponse(null);

    // For now, use the test audio URL for the API call
    try {
      const response = await transcribeMedia([TEST_AUDIO_URL]);
      setApiResponse(response);
    } catch (error) {
      console.error(error);
      setApiResponse(null);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="flex items-center justify-center w-16 h-16 rounded-[100%] bg-[#118AD3] mb-4 text-white hover:brightness-80 transition cursor-pointer">
        <UploadIcon />
        <input
          type="file"
          accept="audio/*,video/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      <p className="text-[#626262] w-[315px] text-center">
        برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید
        متن پیاده شده آن، در اینجا ظاهر می شود
      </p>
      {audioURL && (
        <>
          <CustomAudioPlayer src={audioURL} color={color} />
          {apiResponse && (
            <pre className="mt-4 text-xs text-gray-700 bg-gray-100 p-2 rounded">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
          )}
        </>
      )}
    </div>
  );
};

export default UploadTab; 