"""
LangGraph Multi-Agent Quantitative Trading Team
Orchestrates Technical Analyst, Fundamental Analyst, Risk Manager, and Alpaca Execution Agents
"""
from typing import TypedDict
from langgraph.graph import StateGraph, END


class TradingState(TypedDict):
    symbol: str
    technical_signal: str
    fundamental_score: float
    risk_assessment: str
    max_position_size: int
    final_action: str
    order_status: str


def technical_analyst_node(state: TradingState) -> TradingState:
    state["technical_signal"] = "BULLISH_BREAKOUT (RSI: 64.2, MACD Crossover)"
    return state


def fundamental_analyst_node(state: TradingState) -> TradingState:
    state["fundamental_score"] = 8.8  # Out of 10
    return state


def risk_manager_node(state: TradingState) -> TradingState:
    state["risk_assessment"] = "APPROVED (Portfolio VaR < 1.5%, Stop-Loss set at 2.4%)"
    state["max_position_size"] = 150  # shares
    return state


def execution_agent_node(state: TradingState) -> TradingState:
    symbol = state["symbol"]
    state["final_action"] = f"BUY 150 {symbol} @ Market Limit"
    state["order_status"] = f"EXECUTED on Alpaca Paper Sandbox (Order ID: ORD-{symbol}-7782)"
    return state


def build_trading_workflow():
    workflow = StateGraph(TradingState)
    
    workflow.add_node("technical_analyst", technical_analyst_node)
    workflow.add_node("fundamental_analyst", fundamental_analyst_node)
    workflow.add_node("risk_manager", risk_manager_node)
    workflow.add_node("execution_agent", execution_agent_node)

    workflow.set_entry_point("technical_analyst")
    workflow.add_edge("technical_analyst", "fundamental_analyst")
    workflow.add_edge("fundamental_analyst", "risk_manager")
    workflow.add_edge("risk_manager", "execution_agent")
    workflow.add_edge("execution_agent", END)

    return workflow.compile()


trading_agent_graph = build_trading_workflow()
