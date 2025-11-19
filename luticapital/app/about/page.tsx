import React from 'react';
import { Shield, Target, History } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        About Us
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Welcome to Luti Wealth Management. We're passionate about gaming cosmetics and esports.
                </p>
            </div>

            {/* Welcome Section */}
            <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-600 bg-opacity-20 rounded-lg">
                        <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Who We Are</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                    At LWM, we're passionate about gaming cosmetics and esports. What sets us apart is our unique knowledge and history in those markets. We believe in taking purely rational and logic actions, and it drives everything we do. Our journey began in 2019, and since then, we've been committed to providing access to alternative investment opportunities to our valued customers. Explore our website to discover our funds and expand our knowledge. We're thrilled to have you on board!
                </p>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-600 bg-opacity-20 rounded-lg">
                        <Target className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Mission & Vision</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                    As a young company our vision is to become a major player in the rising markets of gaming and esports. We also thrive to be the connection between the traditional markets and this new field full of possibility and potential. Our mission is to give our customers access and guidance with our knowledge to invest into new opportunities in said markets and to grow with the gaming scene as a whole.
                </p>
            </section>

            {/* History Section */}
            <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-600 bg-opacity-20 rounded-lg">
                        <History className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Our History</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                    The idea of Luti Wealth Management (LWM) first came up in 2019 when I first stepped into the world of gaming cosmetics in Counter-Strike. At first I thought it was just another niche market. But with the start of the Pandemic, I started to use my time to look deeper into said market. And parallel with my rising interest in traditional financial markets, I discovered major differences in this new market. From this point onwards, I redirected most of my time and capital into it.
                </p>
            </section>
        </div>
    );
}
