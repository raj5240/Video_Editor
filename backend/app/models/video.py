from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship
from app.db.base import Base

class Video(Base):
    __tablename__ = 'videos'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text, nullable=True)
    file_path = Column(String, nullable=False)
    overlay_data = Column(Text, nullable=True)  # JSON string for overlay information
    created_at = Column(Integer)  # Timestamp for when the video was uploaded

    # Relationships can be defined here if needed
    # overlays = relationship("Overlay", back_populates="video")