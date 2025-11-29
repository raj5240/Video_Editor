import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { fetchRenderQueue } from '../services/uploads';

const RenderQueueScreen = () => {
  const [renderQueue, setRenderQueue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRenderQueue = async () => {
      try {
        const queue = await fetchRenderQueue();
        setRenderQueue(queue);
      } catch (error) {
        console.error('Error fetching render queue:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRenderQueue();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.videoName}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={renderQueue}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default RenderQueueScreen;