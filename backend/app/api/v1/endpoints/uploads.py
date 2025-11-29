from fastapi import APIRouter, UploadFile, File, HTTPException
from app.schemas.video import VideoUpload
from app.services.storage import save_video
from app.models.video import Video

router = APIRouter()

@router.post("/upload", response_model=Video)
async def upload_video(file: UploadFile = File(...)):
    if not file.content_type.startswith('video/'):
        raise HTTPException(status_code=400, detail="File type not supported")
    
    video_path = await save_video(file)
    video = Video(path=video_path)
    return video