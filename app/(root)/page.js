import FaqSection from "./_components/Home/FaqSection";
import FeaturePropertySection from "./_components/Home/FeaturePropertySection";
import HeroSection from "./_components/Home/HeroSection";
import PackageSection from "./_components/Home/PackageSection";
import PrtnarAreaSection from "./_components/Home/PrtnarAreaSection";
import ReviewSection from "./_components/Home/ReviewSection";
import SuperEasySections from "./_components/Home/SuperEasySections";
import WeBestSection from "./_components/Home/WeBestSection";

const Home = () => {
  return (
    <>
      <div className="bg-main-hero-bg bg-cover bg-no-repeat lg:h-[calc(90vh)]">
        <div className="lg:pt-24">
          <HeroSection />
        </div>
        <PrtnarAreaSection />
      </div>

      <div className="bg-nm-green-100 bg-super-easy bg-no-repeat bg-bottom">
        <SuperEasySections />
      </div>
      <WeBestSection />
      <div className="bg-black bg-package-building bg-no-repeat bg-bottom bg-fixed">
        <PackageSection />
      </div>
      <ReviewSection />
      <FeaturePropertySection />
      <FaqSection />
    </>
  );
};

export default Home;
