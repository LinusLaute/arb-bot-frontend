'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Activity, ShoppingCart, Target, Crown, Eye, Download, Minus, RefreshCw } from 'lucide-react';

export default function Dashboard() {
  const [profitPeriod, setProfitPeriod] = useState('day');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      const now = new Date();
      if (now.getTime() - lastUpdate.getTime() > 30000) {
        setLastUpdate(now);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [lastUpdate]);

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdate(new Date());
    }, 1500);
  };

  const getTimeSinceUpdate = () => {
    const seconds = Math.floor((currentTime.getTime() - lastUpdate.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    return `${minutes}m ago`;
  };

  const kpiData = {
    dayProfit: 127.84,
    weekProfit: 892.13,
    monthProfit: 3247.92,
    volume: 15420.67,
    tradeCount: 234,
    missedTrades: 12,
    sales: 221,
    avgReturn: 18.7,
    biggestDailyProfit: 284.73,
    freeCash: 1847.29
  };

  const getProfitData = () => {
    switch(profitPeriod) {
      case 'day': return { value: kpiData.dayProfit, trend: 12.4, label: 'Day Profit' };
      case 'week': return { value: kpiData.weekProfit, trend: 8.7, label: 'Week Profit' };
      case 'month': return { value: kpiData.monthProfit, trend: 15.2, label: 'Month Profit' };
      default: return { value: kpiData.dayProfit, trend: 12.4, label: 'Day Profit' };
    }
  };

  const recentTrades = [
    { item: "AK-47 | Redline (Field-Tested)", price: 203.45, profit: 74.19, roi: 36.4, platform: "Skinbaron", time: "2 min ago" },
    { item: "AWP | Dragon Lore (Well-Worn)", price: 1847.20, profit: 312.84, roi: 20.4, platform: "Steam Market", time: "8 min ago" },
    { item: "Karambit | Fade (Factory New)", price: 945.60, profit: 127.33, roi: 15.6, platform: "CSFloat", time: "12 min ago" },
    { item: "M4A4 | Howl (Minimal Wear)", price: 1245.80, profit: 89.47, roi: 7.7, platform: "Buff163", time: "15 min ago" },
    { item: "Glock-18 | Fade (Factory New)", price: 156.90, profit: 28.92, roi: 22.6, platform: "Skinbaron", time: "18 min ago" },
    { item: "USP-S | Kill Confirmed (Minimal Wear)", price: 89.40, profit: 15.73, roi: 21.3, platform: "CSFloat", time: "22 min ago" },
    { item: "Butterfly Knife | Doppler (Factory New)", price: 1456.80, profit: 203.91, roi: 16.3, platform: "Steam Market", time: "25 min ago" },
    { item: "AK-47 | Fire Serpent (Field-Tested)", price: 678.90, profit: 97.26, roi: 16.7, platform: "Skinbaron", time: "28 min ago" }
  ];

  const marketplaceStats = [
    { name: "Steam Market", volume: "€4,521", trades: 89, status: "Active" },
    { name: "Skinbaron", volume: "€3,247", trades: 67, status: "Active" },
    { name: "CSFloat", volume: "€2,834", trades: 45, status: "Active" },
    { name: "Buff163", volume: "€1,892", trades: 33, status: "Limited" }
  ];

  const KPICard = ({ title, value, icon: Icon, trend, suffix = "€" }) => (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-600 bg-opacity-20 rounded-lg">
            <Icon className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-gray-400 text-sm font-medium">{title}</span>
        </div>
        {trend && (
          <span className={`text-sm flex items-center gap-1 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-white">
        {suffix === "€" ? `€${value.toLocaleString('en-US', {minimumFractionDigits: 2})}` : `${value.toLocaleString()}${suffix}`}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    LutiWealth
                  </h1>
                  <span className="text-sm text-gray-400">v2.3.1</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="text-right">
                <div className="text-sm text-gray-400">System Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Active</span>
                </div>
              </div>
              <div className="text-right mr-2">
                <div className="text-sm text-gray-400">Last Update</div>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm">{getTimeSinceUpdate()}</span>
                  <button
                    onClick={handleManualRefresh}
                    disabled={isRefreshing}
                    className="p-1 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-8">
        {/* Main KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Profit Card with Toggle */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600 bg-opacity-20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-gray-400 text-sm font-medium">{getProfitData().label}</span>
              </div>
              <span className="text-sm flex items-center gap-1 text-green-400">
                <TrendingUp className="w-4 h-4" />
                {getProfitData().trend}%
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-4">
              €{getProfitData().value.toLocaleString('en-US', {minimumFractionDigits: 2})}
            </div>
            <div className="flex bg-gray-700 rounded-lg p-1">
              {['day', 'week', 'month'].map((period) => (
                <button
                  key={period}
                  onClick={() => setProfitPeriod(period)}
                  className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 ${
                    profitPeriod === period
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-600'
                  }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <KPICard title="Volume" value={kpiData.volume} icon={Activity} />
          <KPICard title="Trade Count" value={kpiData.tradeCount} icon={ShoppingCart} suffix="" />
          <KPICard title="Avg. Return" value={kpiData.avgReturn} icon={TrendingUp} suffix="%" />
        </div>

        {/* Secondary KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard title="Missed Trades" value={kpiData.missedTrades} icon={Eye} suffix="" />
          <KPICard title="Sales" value={kpiData.sales} icon={Target} suffix="" />
          <KPICard title="Biggest Daily" value={kpiData.biggestDailyProfit} icon={Crown} />
          {/* Free Cash */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-6 h-6" />
              <span className="font-medium text-sm">Free Cash</span>
            </div>
            <div className="text-2xl font-bold">€{kpiData.freeCash.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
            <div className="text-sm opacity-90 mt-1">Withdrawable</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Get Liquidity Button */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Get Liquidity
            </button>
          </div>

          {/* Withdraw Amount */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300">Withdraw Amount</label>
              <input
                type="number"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Minus className="w-4 h-4" />
                Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Dashboard Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Marketplace Stats */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold">Marketplace Stats</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {marketplaceStats.map((marketplace, index) => (
                    <div key={index} className="p-4 bg-gray-700 rounded-lg">
                      <div className="text-center">
                        <div className="font-medium text-white">{marketplace.name}</div>
                        <div className="text-2xl font-bold text-white mt-2">{marketplace.volume}</div>
                        <div className="text-sm text-gray-400">{marketplace.trades} trades</div>
                        <div className={`text-xs px-2 py-1 rounded mt-2 inline-block ${
                          marketplace.status === 'Active' ? 'bg-green-600 text-green-100' : 'bg-yellow-600 text-yellow-100'
                        }`}>
                          {marketplace.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Future Enhancement Areas - Placeholder Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 border-dashed">
                <h3 className="font-bold text-gray-400 mb-2">Performance Analytics</h3>
                <p className="text-sm text-gray-500">Historical performance charts, profit trends, win rate analysis</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 border-dashed">
                <h3 className="font-bold text-gray-400 mb-2">Risk Management</h3>
                <p className="text-sm text-gray-500">Position sizing, risk metrics, portfolio exposure</p>
              </div>
            </div>
          </div>

          {/* Live Trade Feed - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 border border-gray-700 rounded-xl sticky top-24">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="font-bold text-white">Live Feed</h3>
                </div>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                <div className="p-2 space-y-2">
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <div className="text-xs text-gray-400 mb-1">{trade.time}</div>
                      <div className="text-sm font-medium text-white mb-1 line-clamp-2">{trade.item}</div>
                      <div className="text-xs text-gray-400 mb-2">€{trade.price.toLocaleString()} • {trade.platform}</div>
                      <div className="flex justify-between items-center">
                        <div className="text-green-400 font-bold text-sm">+€{trade.profit}</div>
                        <div className="text-xs text-gray-400">{trade.roi}% ROI</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}