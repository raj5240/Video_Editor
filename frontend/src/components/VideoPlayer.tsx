import React, { useEffect, useRef } from 'react';
import { Video } from 'expo-av';
import { View, StyleSheet } from 'react-native';

interface VideoPlayerProps {
  videoUri: string;
  overlays: Array<{ start: number; end: number; text: string }>;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUri, overlays }) => {
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, [videoUri]);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: videoUri }}
        style={styles.video}
        resizeMode="contain"
        shouldPlay
        isLooping
      />
      {overlays.map((overlay, index) => (
        <View
          key={index}
          style={[
            styles.overlay,
            {
              opacity: overlay.start <= videoRef.current?.getStatusAsync().positionMillis && 
                       overlay.end >= videoRef.current?.getStatusAsync().positionMillis ? 1 : 0,
            },
          ]}
        >
          <Text style={styles.overlayText}>{overlay.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  overlayText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default VideoPlayer;