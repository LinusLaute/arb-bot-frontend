import React from 'react';
import { SITE_CONFIG, NAVIGATION_CONFIG } from '../lib/constants';

const Footer = () => {
    return (
        <footer className="bg-gray-800 border-t border-gray-700 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                            <NAVIGATION_CONFIG.logo.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {SITE_CONFIG.companyName}
                        </span>
                    </div>
                    <p className="text-gray-400">
                        © {SITE_CONFIG.year} {SITE_CONFIG.companyName}. {SITE_CONFIG.tagline}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
