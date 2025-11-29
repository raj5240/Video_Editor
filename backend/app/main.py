from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints import uploads, overlays, renders

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(uploads.router, prefix="/api/v1/uploads", tags=["uploads"])
app.include_router(overlays.router, prefix="/api/v1/overlays", tags=["overlays"])
app.include_router(renders.router, prefix="/api/v1/renders", tags=["renders"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Video Editing API"}