import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import VideoUploader from '../components/VideoUploader';
import OverlayEditor from '../components/OverlayEditor';

const EditorScreen = () => {
  const [videoUri, setVideoUri] = useState(null);
  const [overlays, setOverlays] = useState([]);

  const handleVideoUpload = (uri) => {
    setVideoUri(uri);
  };

  const handleOverlayChange = (newOverlays) => {
    setOverlays(newOverlays);
  };

  return (
    <View style={styles.container}>
      <VideoUploader onUpload={handleVideoUpload} />
      {videoUri && (
        <>
          <VideoPlayer uri={videoUri} overlays={overlays} />
          <OverlayEditor overlays={overlays} onChange={handleOverlayChange} />
        </>
      )}
      <Button title="Render Video" onPress={() => {/* Add render logic here */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditorScreen;