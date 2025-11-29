export interface Video {
    id: string;
    title: string;
    url: string;
    createdAt: Date;
}

export interface Overlay {
    id: string;
    videoId: string;
    type: string; // e.g., 'text', 'image'
    content: string; // URL for images or text for text overlays
    position: { x: number; y: number };
    startTime: number; // in seconds
    endTime: number; // in seconds
}

export interface UploadResponse {
    success: boolean;
    message: string;
    video?: Video;
}

export interface RenderResponse {
    success: boolean;
    message: string;
    renderedVideoUrl?: string;
}