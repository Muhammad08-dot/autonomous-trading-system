# 📈 Autonomous Financial Trading & Risk Engine

Production-Grade Quantitative Trading System featuring Multi-Agent Trading Teams (Technical, Fundamental, Risk & Execution Agents), FinBERT Sentiment Pipeline, Reinforcement Learning Strategy, and Alpaca Paper Trading Execution.

## Architecture

- **Backend:** FastAPI (Python 3.11+) + LangGraph Multi-Agent Trading Team + FinBERT Model + TimescaleDB / Postgres
- **Frontend:** Next.js 15 + TypeScript + TailwindCSS
- **Infrastructure:** Docker Compose

## Quick Start

```bash
cd autonomous_trading_system
docker compose -f infrastructure/docker/docker-compose.dev.yml up --build
```
