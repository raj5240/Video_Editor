# Video Editing App

## Overview
This project is a full-stack video editing application built with React Native for the frontend and FastAPI for the backend. It allows users to upload videos, manage overlays, and render edited videos.

## Features
- Video upload functionality
- Overlay management for video editing
- Video rendering and queue management

## Technologies Used
- **Frontend**: React Native, TypeScript
- **Backend**: FastAPI, Python
- **Database**: SQLite (or any other database as per configuration)
- **Containerization**: Docker

## Project Structure
```
video-editing-app
├── frontend          # React Native frontend
│   ├── src          # Source files for the frontend
│   └── ...          # Other frontend configuration files
├── backend           # FastAPI backend
│   ├── app          # Application source files
│   └── ...          # Other backend configuration files
├── docker-compose.yml # Docker configuration for services
├── scripts          # Scripts for development and deployment
├── .env.example     # Example environment configuration
├── LICENSE          # Licensing information
└── README.md        # Project documentation
```

## Getting Started

### Prerequisites
- Node.js and npm installed for the frontend
- Python and pip installed for the backend
- Docker and Docker Compose installed for containerization

### Installation

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd video-editing-app
   ```

2. **Frontend Setup**
   - Navigate to the frontend directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```

3. **Backend Setup**
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     pip install -r requirements.txt
     ```


- **Without Docker**
  - Start the backend server:
    ```
    uvicorn app.main:app --reload
    ```
  - Start the frontend application:
    ```
    npm start
    ```

### Usage
- Access the frontend application at `http://localhost:3000`.
- Use the video upload feature to add videos, manage overlays, and render your edited videos.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.