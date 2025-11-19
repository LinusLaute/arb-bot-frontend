import React from 'react';
import { CASE_FUND_DATA } from '../../lib/funds-data';
import { TrendingUp, ExternalLink } from 'lucide-react';

export default function CaseFundPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Case Fund
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Growth-focused fund investing in discontinued cases with high potential.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {CASE_FUND_DATA.map((item, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-colors group">
                        <div className="aspect-video bg-gray-900 relative p-4 flex items-center justify-center">
                            {/* Placeholder for image if not available, or use next/image if we had real images */}
                            <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
                                {/* In a real app, use <Image /> here */}
                                <span className="text-sm">Image: {item.name}</span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                            <div className="space-y-2 text-sm text-gray-400 mb-4">
                                <div className="flex justify-between">
                                    <span>Year:</span>
                                    <span className="text-white">{item.year}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Portfolio Size:</span>
                                    <span className="text-purple-400 font-bold">{item.size}</span>
                                </div>
                            </div>

                            <a
                                href={item.buffLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                View on Buff
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
