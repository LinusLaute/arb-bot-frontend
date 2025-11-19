"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION_CONFIG } from '../lib/constants';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFundsDropdownOpen, setIsFundsDropdownOpen] = useState(false);

    if (pathname === '/dashboard') return null;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleFundsDropdown = () => {
        setIsFundsDropdownOpen(!isFundsDropdownOpen);
    };

    return (
        <header className="border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                            <NAVIGATION_CONFIG.logo.icon className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {NAVIGATION_CONFIG.logo.text}
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAVIGATION_CONFIG.menuItems.map((item, index) => (
                            <div key={index} className="relative">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={toggleFundsDropdown}
                                            className={`flex items-center gap-1 transition-colors ${item.active ? 'text-white' : 'text-gray-300 hover:text-purple-400'
                                                }`}
                                        >
                                            {item.label}
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                        {isFundsDropdownOpen && (
                                            <div className="absolute top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2">
                                                {item.dropdown.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`transition-colors ${item.active ? 'text-white' : 'text-gray-300 hover:text-purple-400'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-800 bg-gray-900">
                    <div className="px-4 py-2 space-y-1">
                        {NAVIGATION_CONFIG.menuItems.map((item, index) => (
                            <div key={index}>
                                {item.dropdown ? (
                                    <div className="px-3 py-2">
                                        <div className="text-gray-300 font-medium mb-2">{item.label}</div>
                                        <div className="pl-4 space-y-1">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={subItem.href}
                                                    className="block py-1 text-sm text-gray-400 hover:text-white"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block px-3 py-2 rounded-lg transition-colors ${item.active
                                            ? 'text-white hover:bg-gray-800'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navigation;
