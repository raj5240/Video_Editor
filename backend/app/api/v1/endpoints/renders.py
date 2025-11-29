from fastapi import APIRouter, HTTPException
from app.schemas.video import VideoRenderRequest, VideoRenderResponse
from app.services.renderer import render_video

router = APIRouter()

@router.post("/render", response_model=VideoRenderResponse)
async def render(video_render_request: VideoRenderRequest):
    try:
        result = await render_video(video_render_request)
        return VideoRenderResponse(result=result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))