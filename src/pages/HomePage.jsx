import ContactBlock from "../components/blocks/ContactBlock";
import HeroBlock from "../components/blocks/HeroBlock";
import HomeAboutTeaserBlock from "../components/blocks/HomeAboutTeaserBlock";
import HomeCtaStripBlock from "../components/blocks/HomeCtaStripBlock";
import ServicesBlock from "../components/blocks/ServicesBlock";
import ServicesBlock2 from "../components/blocks/ServicesBlock2";
import TestimonialsBlock from "../components/blocks/TestimonialsBlock";

function HomePage() {
  return (
    <main>
      <HeroBlock />
      <ServicesBlock2 showAllServicesLink={false} />
      <ServicesBlock />
      <HomeAboutTeaserBlock ctaTo="/#contact" />
      <HomeCtaStripBlock />
      <TestimonialsBlock />
      <ContactBlock />
    </main>
  );
}

export default HomePage;
