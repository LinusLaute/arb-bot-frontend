import React from 'react';
import { RIPTIDE_FUND_DATA } from '../../../lib/funds-data';
import { notFound } from 'next/navigation';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
    params: Promise<{
        collection: string;
    }>;
}

export default async function CollectionPage({ params }: Props) {
    const { collection: collectionId } = await params;
    const collection = RIPTIDE_FUND_DATA.find(c => c.id === collectionId);

    if (!collection) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            {/* Header */}
            <div>
                <Link
                    href="/funds/riptide"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Riptide Fund
                </Link>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                {collection.name}
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl">
                            {collection.description}
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-400 mb-1">Portfolio Allocation</div>
                        <div className="text-3xl font-bold text-white">{collection.size}</div>
                    </div>
                </div>
            </div>

            {/* Skins Grid */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-8">Collection Skins</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collection.skins.map((skin, index) => (
                        <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-colors">
                            <div className="aspect-[4/3] bg-gray-900 relative p-4 flex items-center justify-center">
                                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
                                    <span className="text-sm text-center px-2">Image: {skin.name}</span>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="font-bold text-white mb-1 truncate" title={skin.name}>{skin.name}</h3>
                                <p className="text-sm text-purple-400 mb-4">{skin.rarity}</p>

                                {skin.buffLink && skin.buffLink !== "#" && (
                                    <a
                                        href={skin.buffLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                                    >
                                        View on Buff
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
