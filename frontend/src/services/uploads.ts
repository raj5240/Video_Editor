import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/uploads';

export const uploadVideo = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error uploading video: ' + error.message);
    }
};

export const getUploadStatus = async (uploadId: string) => {
    try {
        const response = await axios.get(`${API_URL}/${uploadId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching upload status: ' + error.message);
    }
};