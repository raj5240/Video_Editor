export const formatTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
};

export const formatOverlayPosition = (position: { x: number; y: number }): string => {
    return `Position: (${position.x}px, ${position.y}px)`;
};

export const formatOverlayTiming = (start: number, end: number): string => {
    return `Start: ${formatTimestamp(start)}, End: ${formatTimestamp(end)}`;
};