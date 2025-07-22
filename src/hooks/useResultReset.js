import { useState, useCallback } from "react";

// Accepts optional initial values for extra fields (like linkInput, isRecording)
export default function useResultReset(extraInitials = {}) {
  const [audioURL, setAudioURL] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [actionDone, setActionDone] = useState(false);
  const [activeResultTab, setActiveResultTab] = useState(0);

  // For extra fields (like linkInput, isRecording)
  const [extra, setExtra] = useState(extraInitials);

  // Resets all state to initial values
  const reset = useCallback(() => {
    setAudioURL(null);
    setApiResponse(null);
    setActionDone(false);
    setActiveResultTab(0);
    setExtra(extraInitials);
  }, [extraInitials]);

  return {
    audioURL, setAudioURL,
    apiResponse, setApiResponse,
    actionDone, setActionDone,
    activeResultTab, setActiveResultTab,
    extra, setExtra,
    reset,
  };
}
