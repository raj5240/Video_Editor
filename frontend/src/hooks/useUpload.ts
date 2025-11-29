import { useState } from 'react';
import { uploadVideo } from '../services/uploads';

const useUpload = () => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleUpload = async (file) => {
        setUploading(true);
        setError(null);
        setProgress(0);

        try {
            const response = await uploadVideo(file, (progressEvent) => {
                const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percent);
            });
            return response.data;
        } catch (err) {
            setError(err.message);
        } finally {
            setUploading(false);
        }
    };

    return { uploading, error, progress, handleUpload };
};

export default useUpload;