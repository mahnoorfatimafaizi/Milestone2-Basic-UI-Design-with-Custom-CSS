import BenefitsSection from "./homecomponents/BenefitsSection";
import CaseSection from "./homecomponents/CaseSection";
import CTASection from "./homecomponents/CTASection";
import Hero from "./homecomponents/Hero";
import "./styles/home.css";

const HomePage = () => {
  return (
    <main>
      <Hero />

      <BenefitsSection />

      <CaseSection />

      <CTASection />
    </main>
  );
};

export default HomePage;
