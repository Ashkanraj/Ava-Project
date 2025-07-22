import axios from "axios";

const BASE_URL = "https://harf.roshan-ai.ir";
const AUTH_TOKEN = "a85d08400c622b50b18b61e239b9903645297196"; // Replace with your actual token if needed

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Token ${AUTH_TOKEN}`,
    "Content-Type": "application/json",
  },
});

// Transcribe audio & video URL
// mediaUrls: array of public URLs (e.g., ["https://example.com/audio.webm"])
export const transcribeMedia = async (mediaUrls) => {
  const response = await axiosInstance.post("/api/transcribe_files/", {
    media_urls: mediaUrls,
  });
  return response.data;
};

// List all transcription requests
export const listRequests = async () => {
  const response = await axiosInstance.get("/api/requests/");
  return response.data;
};

// Get details for a specific request by ID
export const getRequestDetail = async (id) => {
  const response = await axiosInstance.get(`/api/requests/${id}/`);
  return response.data;
};

// Delete a specific request by ID
export const deleteRequest = async (id) => {
  const response = await axiosInstance.delete(`/api/requests/${id}/`);
  return response.data;
};

// Search API (example usage: searchApi("your query"))
export const searchApi = async (query) => {
  const response = await axiosInstance.post("/api/search/", { query });
  return response.data;
};

// Get media image for a given media URL
export const getMediaImage = async (mediaUrl) => {
  const response = await axiosInstance.get(
    `/media_image/${encodeURIComponent(mediaUrl)}`
  );
  return response.data;
}; 