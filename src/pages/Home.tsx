import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import { CONTENT_SECTIONS } from "../config/sections";

const Home = () => (
  <>
    <HeroSection />
    <div className="space-y-16">
      {CONTENT_SECTIONS.map((section) => (
        <ContentSection key={section.id} section={section} />
      ))}
    </div>
  </>
);

export default Home;
