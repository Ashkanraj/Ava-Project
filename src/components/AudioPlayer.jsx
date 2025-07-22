import React, { useRef, useState, useEffect } from "react";
import PauseIcon from "../assets/icons/pause_icon";
import StopIcon from "../assets/icons/stop_icon";
import SpeakerIcon from "../assets/icons/speaker_icon";
import ProgressBar from "./ProgressBar";
import PlayIcon from "../assets/icons/play_icon";

function toPersianDigits(str) {
  const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  return String(str).replace(/\d/g, d => persianDigits[d]);
}

const CustomAudioPlayer = ({ src, color }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(null);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    setProgress(0);
    setPlaying(false);
    setDuration(null);
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [src]);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    const updateProgress = () => setProgress(audio.currentTime);

    const handleLoadedMetadata = () => {
      if (!isFinite(audio.duration) || isNaN(audio.duration) || audio.duration === 0) {
        audio.currentTime = 1e10;
      } else {
        setDuration(audio.duration);
      }
    };

    const handleDurationChange = () => {
      if (isFinite(audio.duration) && !isNaN(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
        audio.currentTime = 0;
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("durationchange", handleDurationChange);

    if (audio.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("durationchange", handleDurationChange);
    };
  }, [src]);

  // Volume control
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleProgressChange = (e) => {
    const value = Number(e.target.value);
    audioRef.current.currentTime = value;
    setProgress(value);
  };

  const handleStop = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlaying(false);
    setProgress(0);
  };

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value));
  };

  const formatTime = (time) => {
    if (!isFinite(time) || isNaN(time)) return "۰۰:۰۰";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    // Convert to Persian digits
    return toPersianDigits(`${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`);
  };

  if (!src) return null;

  return (
    <div className="w-full flex flex-col items-center">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onEnded={() => {
          setPlaying(false);
          setProgress(audioRef.current?.duration || 0);
        }}
      />
      <div className="flex flex-row items-center w-full gap-4">
        {/* Volume */}
        <div className="flex items-center gap-1 mr-2 w-[200px]">
            <ProgressBar
                value={volume}
                max={1}
                onChange={e => setVolume(Number(e.target.value))}
                barHeight={4}
                thumbSize={0}
                barBg="#e5e7eb"
                color={color}
             />
          <SpeakerIcon size={20} color="#626262" />
         
        </div>
        {/* Time */}
        <span dir="ltr" className="text-xs text-gray-600 w-32 text-left">
          {duration
            ? `${formatTime(progress)}`
            : "در حال بارگذاری..."}
        </span>
        {/* Progress Bar */}
        <ProgressBar
          value={progress}
          max={duration || 0}
          onChange={handleProgressChange}
          disabled={!duration}
          color={color}
        />
        {/* Stop */}
        <button
          onClick={handleStop}
          className="text-[#626262] cursor-pointer hover:brightness-80 transition"
        >
          <StopIcon size={20}/>
        </button>
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="text-[#626262] rounded-full cursor-pointer hover:brightness-80 transition"
        >
          {playing ? <PauseIcon size={20} /> : (
            <PlayIcon size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default CustomAudioPlayer;