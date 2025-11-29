def run_ffmpeg_command(command: str) -> None:
    import subprocess

    try:
        subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error occurred while running ffmpeg command: {e}")

def overlay_video(input_video: str, overlay_image: str, output_video: str, position: str) -> None:
    command = f"ffmpeg -i {input_video} -i {overlay_image} -filter_complex \"overlay={position}\" -codec:a copy {output_video}"
    run_ffmpeg_command(command)

def render_video(input_video: str, output_video: str) -> None:
    command = f"ffmpeg -i {input_video} -preset fast {output_video}"
    run_ffmpeg_command(command)