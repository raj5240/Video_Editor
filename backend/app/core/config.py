from pydantic import BaseSettings

class Settings(BaseSettings):
    # Application settings
    APP_NAME: str = "Video Editing App"
    APP_VERSION: str = "1.0.0"
    
    # Database settings
    DATABASE_URL: str = "sqlite:///./test.db"
    
    # Upload settings
    UPLOAD_FOLDER: str = "./uploads"
    MAX_UPLOAD_SIZE: int = 10 * 1024 * 1024  # 10 MB

    class Config:
        env_file = ".env"

settings = Settings()