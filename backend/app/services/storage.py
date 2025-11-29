from fastapi import UploadFile
import os
from typing import List

UPLOAD_DIRECTORY = "uploads"

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)

def save_uploaded_file(uploaded_file: UploadFile) -> str:
    file_location = os.path.join(UPLOAD_DIRECTORY, uploaded_file.filename)
    with open(file_location, "wb") as file:
        file.write(uploaded_file.file.read())
    return file_location

def list_uploaded_files() -> List[str]:
    return os.listdir(UPLOAD_DIRECTORY)