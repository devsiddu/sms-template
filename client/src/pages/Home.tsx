import AboutPreview from "../components/AboutPreview";
import BeliefSection from "../components/BeliefSection";
import ContactCTA from "../components/ContactCTA";
import GalleryPreview from "../components/GalleryPreview";
import HeroSection from "../components/HeroSection";
import NewsSection from "../components/NewsSection";
import StorySection from "../components/StorySection";
import ValuesSection from "../components/ValuesSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <StorySection />
      <ValuesSection />
      <BeliefSection />
      <NewsSection />
      <GalleryPreview />
      <ContactCTA />
    </>
  );
};

export default Home;
