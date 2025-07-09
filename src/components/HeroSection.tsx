import { HERO_CONFIG } from "../config/sections";

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
  </section>
);

export default HeroSection;
