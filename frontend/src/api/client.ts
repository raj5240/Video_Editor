import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadVideo = (formData) => {
  return apiClient.post('/uploads', formData);
};

export const getOverlays = () => {
  return apiClient.get('/overlays');
};

export const renderVideo = (videoId) => {
  return apiClient.post(`/renders`, { videoId });
};