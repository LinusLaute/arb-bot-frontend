import React from 'react';
import { Activity, Shield, Award, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';

// Configuration objects
const HERO_CONFIG = {
  title: {
    highlight: "Unlock the Potential of",
    main: "Gaming Cosmetics Investments"
  },
  subtitle: "Invest in alternative markets, primarily CS:GO items, with Luti Capital's innovative investment strategies.",
  ctaButton: {
    text: "Explore Our Funds",
    href: "/funds/riptide"
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
      href: "/news"
    }
  },
  {
    id: "about",
    title: "About Luti Capital",
    icon: Shield,
    content: "Luti Capital is a leading investment firm specializing in the gaming cosmetics market. We offer multiple funds with different risk-reward ratios and a commitment to expanding into diverse markets. Our strategies aim to capitalize on the fast-growing gaming and esports industry without the need to invest in individual companies.",
    link: {
      text: "Read more",
      href: "/about"
    }
  },
  {
    id: "performance",
    title: "Performance Highlights",
    icon: Award,
    content: "Our funds have demonstrated strong growth and consistent returns over time. Explore our fund performance to see the opportunities gaming cosmetics investments offer.",
    link: {
      text: "Read more",
      href: "/dashboard"
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
      href: "/faq"
    }
  }
];

const getColorClass = (color: string) => {
  const colors: { [key: string]: string } = {
    green: "text-green-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
    red: "text-red-400"
  };
  return colors[color] || "text-gray-400";
};

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
const ContentSection = ({ section }: { section: any }) => {
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
          {section.stats.map((stat: any, index: number) => (
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
        <Link
          href={section.link.href}
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          {section.link.text}
          <TrendingUp className="w-4 h-4" />
        </Link>
      )}
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
    </div>
  );
}