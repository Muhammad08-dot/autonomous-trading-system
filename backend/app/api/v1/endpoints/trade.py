"""
Autonomous Trading & Order Execution API Endpoints
"""
from fastapi import APIRouter
from pydantic import BaseModel
from app.agents.trading_multi_agent import trading_agent_graph

router = APIRouter()


class TradeRequest(BaseModel):
    symbol: str = "NVDA"


@router.post("/execute")
async def execute_trading_cycle(payload: TradeRequest):
    initial_state = {
        "symbol": payload.symbol,
        "technical_signal": "",
        "fundamental_score": 0.0,
        "risk_assessment": "",
        "max_position_size": 0,
        "final_action": "",
        "order_status": ""
    }

    result = trading_agent_graph.invoke(initial_state)

    return {
        "symbol": payload.symbol,
        "technical_signal": result["technical_signal"],
        "fundamental_score": result["fundamental_score"],
        "risk_assessment": result["risk_assessment"],
        "executed_action": result["final_action"],
        "broker_status": result["order_status"]
    }
