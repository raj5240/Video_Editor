import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { uploadVideo } from '../services/uploads';

const VideoUploader = () => {
    const [uploading, setUploading] = useState(false);
    const [uploadMessage, setUploadMessage] = useState('');

    const handleUpload = async () => {
        setUploading(true);
        setUploadMessage('');

        const result = await DocumentPicker.getDocumentAsync({
            type: 'video/*',
        });

        if (result.type === 'success') {
            const { uri } = result;
            try {
                const response = await uploadVideo(uri);
                setUploadMessage(`Upload successful: ${response.data.message}`);
            } catch (error) {
                setUploadMessage(`Upload failed: ${error.message}`);
            }
        } else {
            setUploadMessage('Upload cancelled');
        }

        setUploading(false);
    };

    return (
        <View style={styles.container}>
            <Button title="Upload Video" onPress={handleUpload} disabled={uploading} />
            {uploadMessage ? <Text style={styles.message}>{uploadMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        marginTop: 20,
        fontSize: 16,
        color: 'red',
    },
});

export default VideoUploader;