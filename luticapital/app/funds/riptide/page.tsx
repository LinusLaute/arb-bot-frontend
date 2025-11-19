import React from 'react';
import { RIPTIDE_FUND_DATA } from '../../lib/funds-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RiptideFundPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Riptide Fund
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Balanced fund focusing on 2021 Collections with stable demand.
                </p>
            </div>

            {/* Collections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {RIPTIDE_FUND_DATA.map((collection) => (
                    <div key={collection.id} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white">{collection.name}</h3>
                                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium">
                                    {collection.size}
                                </span>
                            </div>

                            <p className="text-gray-400 mb-6 line-clamp-3">
                                {collection.description}
                            </p>

                            <Link
                                href={`/funds/riptide/${collection.id}`}
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                            >
                                View Collection
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
