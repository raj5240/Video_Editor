from fastapi import BackgroundTasks
from app.services.renderer import render_video
from app.models.video import Video
from app.schemas.video import VideoSchema
from app.db.base import get_db
from sqlalchemy.orm import Session

def render_video_worker(video_id: int, background_tasks: BackgroundTasks):
    db: Session = next(get_db())
    video = db.query(Video).filter(Video.id == video_id).first()
    
    if video:
        background_tasks.add_task(render_video, video.file_path, video.overlays)
        return {"message": "Rendering started", "video_id": video_id}
    else:
        return {"error": "Video not found"}