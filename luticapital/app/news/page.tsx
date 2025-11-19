import React from 'react';
import { Bot, Box, ExternalLink } from 'lucide-react';

export default function NewsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Latest News
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Stay updated with our latest developments, funds, and technology.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Arbitrage Bot */}
                <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-600 bg-opacity-20 rounded-lg">
                            <Bot className="w-6 h-6 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Arbitrage Bot</h2>
                    </div>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                        <p>
                            We are currently making great progress on building our own arbitrage bot. This bot will be able to profit from short term price differences between different markets. As of now we are experimenting on connecting two marketplaces, one located in Germany and one in China.
                        </p>
                        <p>
                            The strategy is as follows: We buy a skin on the German marketplace and sell it on the Chinese marketplace with a profit. More specifically, we constantly scan the German marketplace for skins which have at least a 15% price difference to the Chinese marketplace.
                        </p>
                        <p>
                            If a skin is found, we buy it and after the trade hold of 8 days is past, we sell it on the Chinese marketplace. This strategy is very low risk, because we are nearly guaranteed to make a profit, as long as the prices don't encounter a major shift.
                        </p>
                        <div className="mt-6">
                            <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                                Watch the bot output here
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Capsule Fund */}
                <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-600 bg-opacity-20 rounded-lg">
                            <Box className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Capsule Fund</h2>
                    </div>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                        <p>
                            We are right now in the middle of assembling a new fund which will contain so called 'Major Capsules'. These Capsules are only available during the Major tournaments and get discontinued after.
                        </p>
                        <p>
                            They contain stickers of the participating teams which can be unboxed and applied onto the weapon skins. Because of the limited supply and in most cases steady demand, these capsules can present a good investment opportunity with a low risk factor.
                        </p>
                        <p>
                            The return on the other hand can vary very much depending on game internal factors like sticker application rate and rare animations of stickers contained in such capsules, as well as external factors like the disbanding of a team.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
