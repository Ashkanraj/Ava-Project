import React from "react";
import ResultBar from "./ResultBar";

const ResultSection = ({
  actionDone,
  resultContent,      // main content (transcript, etc.)
  audioPlayer,        // pass the audio player as a prop
  activeResultTab,
  setActiveResultTab,
  onRestart,
  onCopy,
  onDownload,
  color,
}) => {
  if (!actionDone) return null;
  return (
    <div className="w-full h-[370px] px-2 py-4 flex flex-col gap-2">
      <ResultBar
        activeTab={activeResultTab}
        onTabChange={setActiveResultTab}
        onRestart={onRestart}
        onCopy={onCopy}
        onDownload={onDownload}
        color={color}
      />
      <div className="flex-1 w-full overflow-auto p-4">
        {resultContent}
      </div>
      <div>
        {audioPlayer}
      </div>
    </div>
  );
};

export default ResultSection;
