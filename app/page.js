import FaqSection from "@/components/Home/FaqSection";
import FeaturePropertySection from "@/components/Home/FeaturePropertySection";
import HeroSection from "@/components/Home/HeroSection";
import PackageSection from "@/components/Home/PackageSection";
import PrtnarAreaSection from "@/components/Home/PrtnarAreaSection";
import ReviewSection from "@/components/Home/ReviewSection";
import SuperEasySections from "@/components/Home/SuperEasySections";
import WeBestSection from "@/components/Home/WeBestSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <PrtnarAreaSection />

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
    </main>
  );
};

export default Home;
