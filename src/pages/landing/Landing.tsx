import ContactSection from "./ContactSection/ContactSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import PricingSection from "./PricingSection/PricingSection";
import "./Landing.scss";

const Landing = () => {
  return (
    <>
      <Header />
      <div className="landing">
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
