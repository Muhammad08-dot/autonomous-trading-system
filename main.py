"""
Root Execution Entrypoint for 📈 Autonomous Financial Trading & Risk Engine
Runs FastAPI Uvicorn Server
"""
import uvicorn

if __name__ == "__main__":
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8008, reload=True)
