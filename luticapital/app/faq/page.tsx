import React from 'react';
import { HelpCircle, Info, TrendingUp, Database } from 'lucide-react';

export default function FAQPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Learn more about Counter-Strike, Gaming Cosmetics, and how our market differs from traditional ones.
                </p>
            </div>

            <div className="space-y-8">
                {/* What is Counter-Strike */}
                <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <HelpCircle className="w-6 h-6 text-purple-400" />
                        <h2 className="text-2xl font-bold text-white">What is Counter-Strike?</h2>
                    </div>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Counter-Strike is a series of multiplayer first-person shooter video games published by Valve. Each player needs to have a Steam account to be able to play the game. In this account, the items will be stored. In the game teams of terrorists battle to perpetrate an act of terror while counter-terrorists try to prevent it.
                        </p>
                        <p>
                            The series began on Windows in 1999 with the release of the first game, Counter-Strike. The most recent installment in the series, Counter-Strike: Global Offensive (CS:GO) and now CS2, are free-to-play games played by millions worldwide. This is also where our investments take place.
                        </p>
                    </div>
                </section>

                {/* What are Gaming Cosmetics */}
                <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Info className="w-6 h-6 text-blue-400" />
                        <h2 className="text-2xl font-bold text-white">What are Gaming Cosmetics (GC)?</h2>
                    </div>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Gaming cosmetics in CS:GO are items that can be used to customize the appearance of a player's weapons, characters, and other in-game items. Cosmetic items do not affect gameplay in any way; they are purely for aesthetic purposes. However, some players choose to collect cosmetic items as a way to show off their status or support their favorite teams.
                        </p>
                        <p>Cosmetics can be obtained in different ways:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Opening Loot crates which contain specific skins of different rarity and value.</li>
                            <li>Weapon skins can also be traded up to. This works by using skins of lower rarity of the same collection or case.</li>
                            <li>Cosmetics can also be obtained as drops while playing the game or after attending or playing an official Valve event.</li>
                        </ul>
                    </div>
                </section>

                {/* Market Differences */}
                <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-6 h-6 text-green-400" />
                        <h2 className="text-2xl font-bold text-white">Market Differences</h2>
                    </div>
                    <div className="text-gray-300 leading-relaxed space-y-6">
                        <p>
                            There are some key differences between traditional markets and the market for Counter-Strike cosmetics:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-700/50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-purple-400 mb-2">Trade Hold</h3>
                                <p className="text-sm">
                                    Every item which gets to a new inventory gets a 7-8 Day trade hold. That means items can't be traded back and forth in reasonable time. This is why a long term view is essential for a profitable strategy in this market.
                                </p>
                            </div>

                            <div className="bg-gray-700/50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-blue-400 mb-2">Volume & Liquidity</h3>
                                <p className="text-sm">
                                    Because of the small size of this market, the volume is tiny. Except for a handful of items, the volume and liquidity are rather small and therefore cashing out is a demanding process.
                                </p>
                            </div>

                            <div className="bg-gray-700/50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-green-400 mb-2">Storage</h3>
                                <p className="text-sm">
                                    A normal Counter-Strike account gets a storage space of 1000 items. Storage Units can be bought to increase this, but moving items is manual. This creates an entry barrier which plays as an advantage for us.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
