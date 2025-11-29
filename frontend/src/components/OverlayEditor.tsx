import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OverlayEditor = () => {
    const [overlays, setOverlays] = useState([]);

    const addOverlay = () => {
        const newOverlay = { id: overlays.length, text: `Overlay ${overlays.length + 1}`, position: { x: 0, y: 0 }, duration: 5 };
        setOverlays([...overlays, newOverlay]);
    };

    const updateOverlayPosition = (id, newPosition) => {
        setOverlays(overlays.map(overlay => overlay.id === id ? { ...overlay, position: newPosition } : overlay));
    };

    const removeOverlay = (id) => {
        setOverlays(overlays.filter(overlay => overlay.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Overlay Editor</Text>
            {overlays.map(overlay => (
                <View key={overlay.id} style={styles.overlay}>
                    <Text>{overlay.text}</Text>
                    <Button title="Move" onPress={() => updateOverlayPosition(overlay.id, { x: overlay.position.x + 10, y: overlay.position.y })} />
                    <Button title="Remove" onPress={() => removeOverlay(overlay.id)} />
                </View>
            ))}
            <Button title="Add Overlay" onPress={addOverlay} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    overlay: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});

export default OverlayEditor;