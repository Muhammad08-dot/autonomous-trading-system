"""
Pydantic v2 Settings for Autonomous Financial Trading Engine
"""
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "Autonomous Financial Trading & Risk Engine"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    
    SECRET_KEY: str = "trading_engine_secret_key_11009988"
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:3008", "http://localhost:8008"]
    
    DATABASE_URL: str = "postgresql+asyncpg://trading_user:trading_secret_11@localhost:5440/trading_engine_db"
    REDIS_URL: str = "redis://localhost:6387/0"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


settings = Settings()
