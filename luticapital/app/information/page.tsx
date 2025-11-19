import React from 'react';
import { Info, TrendingUp, Shield, Target } from 'lucide-react';

export default function InformationPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Information
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Overview of Luti Wealth Management and our investment strategies.
                </p>
            </div>

            {/* Overview Section */}
            <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-600 bg-opacity-20 rounded-lg">
                        <Info className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Overview</h2>
                </div>
                <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                        LWM is an investment firm specializing in alternative markets, with a primary focus on investing into gaming cosmetics, mostly CSGO (Counter-Strike: Global Offensive) items. LWM has established two distinct funds, each offering unique risk-to-reward ratios.
                    </p>
                    <p>
                        Leveraging our expertise in the ever-evolving gaming market, LWM remains committed to continuously expanding its investment horizons, exploring new and promising markets. Our innovative and dynamic approach to wealth management ensures that our clients benefit from lucrative opportunities while navigating the thrilling landscape of alternative investments.
                    </p>
                </div>
            </section>

            {/* Investment Strategy Section */}
            <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-600 bg-opacity-20 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Investment Strategy: Profiting from Gaming Cosmetics</h2>
                </div>
                <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>
                        At Luti Wealth Management (LWM), we employ a unique investment strategy that centers around the thriving world of gaming cosmetics. Gaming cosmetics refer to virtual items, such as skins and cosmetic enhancements, that enhance the visual appearance of in-game assets within popular video games like Counter-Strike: Global Offensive (CSGO).
                    </p>
                    <p>
                        As with any market, there are various options when it comes to volatility. Recognizing the diverse risk appetites of investors, LWM has tailored its investment approach to accommodate different volatility classes. We have established two distinct funds, each designed to cater to specific risk profiles:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <h3 className="text-lg font-bold text-green-400 mb-2">Case Fund - Growth</h3>
                            <p className="text-sm">
                                This fund is specially curated for investors seeking higher returns and willing to accept a higher level of volatility. Our Case Fund primarily focuses on cases out of which players have the chance to obtain rare and valuable items. Because cases get discontinued after a certain period of time, their value tends to increase over time. This fund is ideal for investors who are comfortable with a higher level of risk and are looking to capitalize on the explosive growth potential of gaming cosmetics.
                            </p>
                        </div>

                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <h3 className="text-lg font-bold text-blue-400 mb-2">Riptide Fund - Balanced</h3>
                            <p className="text-sm">
                                For investors seeking a more balanced approach with a moderate level of risk, our Riptide Fund incorporates a diversified portfolio of gaming cosmetics. This fund includes items with stable demand and long-term declining supply, offering a more tempered risk-reward profile. These items can be used to trade up to more valuable items so that their supply will be steadily decreasing over time.
                            </p>
                        </div>
                    </div>

                    <p>
                        Through meticulous market analysis and strategic risk management, LWM ensures that our investors can select the fund that aligns with their financial goals and risk tolerance. By offering distinct volatility options, we empower our clients to diversify their investment strategies and optimize potential returns while navigating the exciting and ever-changing landscape of gaming cosmetics.
                    </p>
                    <p>
                        Luti Wealth Management remains committed to staying at the forefront of the gaming industry, exploring new markets, and continually enhancing our investment strategies to deliver sustainable growth and exceptional value for our clients.
                    </p>
                </div>
            </section>

            {/* Why Gaming Cosmetics Section */}
            <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-600 bg-opacity-20 rounded-lg">
                        <Target className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Why Gaming Cosmetics (GC)?</h2>
                </div>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex gap-3">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>
                            <strong className="text-white">Explosive Growth Potential:</strong> The gaming industry, including esports and virtual item trading, has been experiencing remarkable growth year after year. By capitalizing on the surge in demand for gaming cosmetics, LWM aims to harness the substantial potential for high returns.
                        </span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>
                            <strong className="text-white">Non-Traditional Asset Class:</strong> Gaming cosmetics represent a non-traditional asset class that offers unique opportunities for generating profits. By engaging in virtual item trading, investors can access a distinct market with relatively lower barriers to entry.
                        </span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>
                            <strong className="text-white">Non-Correlation to Traditional Markets:</strong> The gaming cosmetics market exhibits a level of independence from traditional financial markets, offering a potential hedge against economic fluctuations.
                        </span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>
                            <strong className="text-white">Exclusive Market Access:</strong> Investing in gaming cosmetics enables participation in the growth of CSGO without the need to buy stocks of Valve Corporation or other gaming companies, as CSGO itself is not publicly tradeable.
                        </span>
                    </li>
                </ul>
            </section>
        </div>
    );
}
