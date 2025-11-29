import React from 'react';
import { View, Text, Button } from 'react-native';
import VideoUploader from '../components/VideoUploader';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const navigateToEditor = () => {
        navigation.navigate('Editor');
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to the Video Editing App!</Text>
            <VideoUploader />
            <Button title="Go to Editor" onPress={navigateToEditor} />
        </View>
    );
};

export default HomeScreen;