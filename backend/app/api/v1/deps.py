from fastapi import Depends, UploadFile, File
from sqlalchemy.orm import Session
from app.db.base import get_db

def get_video_file(file: UploadFile = File(...)):
    return file

def get_db_session():
    db = get_db()
    try:
        yield db
    finally:
        db.close()