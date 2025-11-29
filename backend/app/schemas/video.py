from pydantic import BaseModel
from typing import List, Optional

class VideoUpload(BaseModel):
    title: str
    description: Optional[str] = None
    file_path: str

class VideoOverlay(BaseModel):
    overlay_type: str
    position: str
    start_time: float
    duration: float

class VideoRenderRequest(BaseModel):
    video_id: int
    overlays: List[VideoOverlay] = []