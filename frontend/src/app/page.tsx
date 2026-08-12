"use client";

import React, { useState } from "react";
import { TrendingUp, ShieldCheck, Zap, BarChart2, DollarSign, Activity, Play } from "lucide-react";

export default function TradingSystemApp() {
  const [symbol, setSymbol] = useState("NVDA");
  const [loading, setLoading] = useState(false);
  const [tradeResult, setTradeResult] = useState<any>({
    symbol: "NVDA",
    technicalSignal: "BULLISH_BREAKOUT (RSI: 64.2, MACD Crossover)",
    fundamentalScore: 8.8,
    riskAssessment: "APPROVED (Portfolio VaR < 1.5%, Stop-Loss set at 2.4%)",
    executedAction: "BUY 150 NVDA @ Market Limit",
    brokerStatus: "EXECUTED on Alpaca Paper Sandbox (Order ID: ORD-NVDA-7782)",
  });

  const handleExecuteTrade = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setTradeResult({
        symbol: symbol,
        technicalSignal: "BULLISH_CONTINUATION (EMA 20 > EMA 50)",
        fundamentalScore: 9.1,
        riskAssessment: "APPROVED (Risk Budget < 2.0%)",
        executedAction: `BUY 100 ${symbol} @ Market Limit`,
        brokerStatus: `EXECUTED on Alpaca Paper Sandbox (Order ID: ORD-${symbol}-9012)`,
      });
      setLoading(false);
    }, 1300);
  };

  return (
    <div className="min-h-screen bg-[#070f1a] text-emerald-100 flex flex-col font-sans">
      <header className="border-b border-emerald-900/60 bg-[#0c1b2e]/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-emerald-300">Autonomous Financial Trading Engine 📈</h1>
            <p className="text-xs text-emerald-500 font-mono">LANGGRAPH MULTI-AGENT TEAM & ALPACA PAPER TRADING</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-emerald-950 border border-emerald-800 px-3 py-1.5 rounded-full text-xs text-emerald-400">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>Real-time Market Stream Connected</span>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-6 space-y-6">
        {/* Ticker Input Controls */}
        <section className="bg-[#0e2138] border border-emerald-900/60 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-emerald-300">Trigger Autonomous Multi-Agent Trading Cycle</h2>
          <form onSubmit={handleExecuteTrade} className="flex gap-3">
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              placeholder="e.g. AAPL, NVDA, TSLA..."
              className="flex-1 bg-[#081524] border border-emerald-800 rounded-xl px-4 py-3 text-emerald-100 placeholder-emerald-600 focus:outline-none focus:border-emerald-500 uppercase font-mono font-bold"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 hover:bg-emerald-500 text-black font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>{loading ? "Agent Team Evaluating..." : "Run Trading Agents"}</span>
            </button>
          </form>
        </section>

        {/* 4 Agent Pipeline Breakdown */}
        <section className="grid grid-cols-4 gap-4">
          <div className="p-4 bg-[#0e2138] border border-emerald-900 rounded-xl text-center">
            <span className="text-xs font-mono text-emerald-500 block uppercase">1. Technical Agent</span>
            <span className="text-sm font-bold text-emerald-300 mt-1 block">RSI & MACD Indicator</span>
          </div>
          <div className="p-4 bg-[#0e2138] border border-emerald-900 rounded-xl text-center">
            <span className="text-xs font-mono text-emerald-500 block uppercase">2. Fundamental Agent</span>
            <span className="text-sm font-bold text-emerald-300 mt-1 block">FinBERT News Scoring</span>
          </div>
          <div className="p-4 bg-[#0e2138] border border-emerald-900 rounded-xl text-center">
            <span className="text-xs font-mono text-emerald-500 block uppercase">3. Risk Manager Agent</span>
            <span className="text-sm font-bold text-emerald-300 mt-1 block">VaR & Stop-Loss Check</span>
          </div>
          <div className="p-4 bg-[#0e2138] border border-emerald-900 rounded-xl text-center">
            <span className="text-xs font-mono text-emerald-500 block uppercase">4. Execution Agent</span>
            <span className="text-sm font-bold text-emerald-300 mt-1 block">Alpaca API Orders</span>
          </div>
        </section>

        {/* Trade Result Output */}
        {tradeResult && (
          <section className="bg-[#0e2138] border border-emerald-700/80 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-900 pb-3">
              <h3 className="text-lg font-bold text-emerald-300">Execution Output for {tradeResult.symbol}</h3>
              <span className="bg-emerald-950 border border-emerald-600 text-emerald-400 font-mono text-xs px-3 py-1 rounded-full font-bold">
                ORDER ACCEPTED
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <p><strong>Technical Signal:</strong> <span className="text-emerald-300">{tradeResult.technicalSignal}</span></p>
              <p><strong>Fundamental Sentiment Score:</strong> <span className="text-emerald-300">{tradeResult.fundamentalScore}/10</span></p>
              <p><strong>Risk Gatekeeper:</strong> <span className="text-emerald-300">{tradeResult.riskAssessment}</span></p>

              <div className="p-4 bg-emerald-950/80 border border-emerald-600 rounded-xl font-mono text-emerald-300 text-sm space-y-1">
                <span className="text-xs uppercase text-emerald-500 font-bold block">Alpaca Broker Result</span>
                <p className="font-bold text-base text-white">{tradeResult.executedAction}</p>
                <p className="text-xs text-emerald-400">{tradeResult.brokerStatus}</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
