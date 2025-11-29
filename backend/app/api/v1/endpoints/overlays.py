from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Overlay(BaseModel):
    id: int
    video_id: int
    type: str
    position: dict
    start_time: float
    end_time: float

overlays_db = []

@router.post("/overlays/", response_model=Overlay)
async def create_overlay(overlay: Overlay):
    overlays_db.append(overlay)
    return overlay

@router.get("/overlays/{video_id}", response_model=List[Overlay])
async def get_overlays(video_id: int):
    return [overlay for overlay in overlays_db if overlay.video_id == video_id]

@router.delete("/overlays/{overlay_id}", response_model=Overlay)
async def delete_overlay(overlay_id: int):
    global overlays_db
    overlay = next((o for o in overlays_db if o.id == overlay_id), None)
    if overlay is None:
        raise HTTPException(status_code=404, detail="Overlay not found")
    overlays_db = [o for o in overlays_db if o.id != overlay_id]
    return overlay