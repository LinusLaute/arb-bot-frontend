"use client";  // ← Add this line

import React, { useState } from 'react';
import { Menu, X, TrendingUp, Target, Shield, Award, ChevronDown, Crown, Activity, DollarSign, ExternalLink } from 'lucide-react';

// Configuration objects for easy content management
const SITE_CONFIG = {
  companyName: "Luti Capital",
  tagline: "Alternative investments in gaming cosmetics",
  year: "2024"
};

const NAVIGATION_CONFIG = {
  logo: {
    icon: Crown,
    text: SITE_CONFIG.companyName
  },
  menuItems: [
    { label: "Homepage", href: "#", active: true },
    { label: "News", href: "#" },
    { label: "About Us", href: "#" },
    {
      label: "Funds",
      href: "#",
      dropdown: [
        { label: "Overview", href: "#" },
        { label: "Riptide Fund", href: "#" },
        { label: "Case Fund", href: "#" }
      ]
    },
    { label: "Information", href: "#" },
    { label: "FAQ", href: "#" }
  ]
};

const HERO_CONFIG = {
  title: {
    highlight: "Unlock the Potential of",
    main: "Gaming Cosmetics Investments"
  },
  subtitle: "Invest in alternative markets, primarily CS:GO items, with Luti Capital's innovative investment strategies.",
  ctaButton: {
    text: "Explore Our Funds",
    href: "#"
  }
};

const CONTENT_SECTIONS = [
  {
    id: "news",
    title: "Latest News",
    icon: Activity,
    content: "We are right now in the middle of assembling a new fund which will contain so called 'Major Stickers'. What those are and how they work can be read in our news section or by clicking the link below.",
    link: {
      text: "Read more",
      href: "#"
    }
  },
  {
    id: "about",
    title: "About Luti Capital",
    icon: Shield,
    content: "Luti Capital is a leading investment firm specializing in the gaming cosmetics market. We offer multiple funds with different risk-reward ratios and a commitment to expanding into diverse markets. Our strategies aim to capitalize on the fast-growing gaming and esports industry without the need to invest in individual companies. Invest with us to unlock the potential of gaming cosmetics investments.",
    link: {
      text: "Read more",
      href: "#"
    }
  },
  {
    id: "performance",
    title: "Performance Highlights",
    icon: Award,
    content: "Our funds have demonstrated strong growth and consistent returns over time. Explore our fund performance to see the opportunities gaming cosmetics investments offer.",
    link: {
      text: "Read more",
      href: "#"
    },
    stats: [
      { value: "+18.7%", label: "Average Return", color: "green" },
      { value: "€15.4K", label: "Monthly Volume", color: "blue" },
      { value: "234", label: "Trades Executed", color: "purple" }
    ]
  },
  {
    id: "strategy",
    title: "Investment Strategy",
    icon: Target,
    subtitle: "Profiting from Gaming Cosmetics",
    content: "As with any market, there are different kinds of options when it comes to volatility. Because of that, we have developed multiple funds with different components and different volatility classes. Our strategies aim to capitalize on the fast-growing gaming and esports industry without the need to invest in individual companies.",
    link: {
      text: "Read more",
      href: "#"
    }
  }
];

const LutiCapitalApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFundsDropdownOpen, setIsFundsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFundsDropdown = () => {
    setIsFundsDropdownOpen(!isFundsDropdownOpen);
  };

  const getColorClass = (color) => {
    const colors = {
      green: "text-green-400",
      blue: "text-blue-400",
      purple: "text-purple-400",
      red: "text-red-400"
    };
    return colors[color] || "text-gray-400";
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="hidden md:flex items-center space-x-8">
      {NAVIGATION_CONFIG.menuItems.map((item, index) => (
        <div key={index} className="relative">
          {item.dropdown ? (
            <>
              <button
                onClick={toggleFundsDropdown}
                className={`flex items-center gap-1 transition-colors ${
                  item.active ? 'text-white' : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                {item.label}
                <ChevronDown className="w-4 h-4" />
              </button>
              {isFundsDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a
              href={item.href}
              className={`transition-colors ${
                item.active ? 'text-white' : 'text-gray-300 hover:text-purple-400'
              }`}
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );

  // Mobile Navigation Component
  const MobileNavigation = () => (
    <div className="md:hidden border-t border-gray-800 bg-gray-900">
      <div className="px-4 py-2 space-y-1">
        {NAVIGATION_CONFIG.menuItems.map((item, index) => (
          <div key={index}>
            {item.dropdown ? (
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">{item.label}</div>
                <div className="pl-4 space-y-1">
                  {item.dropdown.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block py-1 text-sm text-gray-400 hover:text-white"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                href={item.href}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  item.active 
                    ? 'text-white hover:bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // Hero Section Component
  const HeroSection = () => (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {HERO_CONFIG.title.highlight}
            </span>
            <br />
            <span className="text-white">{HERO_CONFIG.title.main}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {HERO_CONFIG.subtitle}
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg">
            {HERO_CONFIG.ctaButton.text}
          </button>
        </div>
      </div>
    </section>
  );

  // Content Section Component
  const ContentSection = ({ section }) => {
    const IconComponent = section.icon;
    
    return (
      <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-600 bg-opacity-20 rounded-lg">
            <IconComponent className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">{section.title}</h2>
        </div>
        
        {section.subtitle && (
          <h3 className="text-lg font-semibold text-purple-400 mb-4">{section.subtitle}</h3>
        )}
        
        <p className="text-gray-300 leading-relaxed mb-6">{section.content}</p>
        
        {section.stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {section.stats.map((stat, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 text-center">
                <div className={`text-2xl font-bold ${getColorClass(stat.color)}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {section.link && (
          <a
            href={section.link.href}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            {section.link.text}
            <TrendingUp className="w-4 h-4" />
          </a>
        )}
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <NAVIGATION_CONFIG.logo.icon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {NAVIGATION_CONFIG.logo.text}
              </h1>
            </div>

            {/* Desktop Navigation */}
            <Navigation />

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
        {isMenuOpen && <MobileNavigation />}
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {CONTENT_SECTIONS.map((section) => (
            <ContentSection key={section.id} section={section} />
          ))}
        </div>
      </main>

      {/* Footer */}
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
    </div>
  );
};

export default LutiCapitalApp;