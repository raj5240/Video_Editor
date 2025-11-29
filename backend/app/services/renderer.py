from typing import List
import subprocess
import os

def render_video(input_file: str, output_file: str, overlays: List[str]) -> None:
    overlay_filters = []
    for i, overlay in enumerate(overlays):
        overlay_filters.append(f"movie={overlay}[ov{i}]; [in][ov{i}] overlay=0:0 [out]")

    filter_complex = "; ".join(overlay_filters)
    command = [
        "ffmpeg",
        "-i", input_file,
        "-filter_complex", filter_complex,
        "-y",  # Overwrite output files without asking
        output_file
    ]

    subprocess.run(command, check=True)

def check_ffmpeg_installed() -> None:
    if not shutil.which("ffmpeg"):
        raise RuntimeError("ffmpeg is not installed or not found in PATH")