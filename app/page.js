import FaqSection from "@/components/home/FaqSection";
import FeaturePropertySection from "@/components/home/FeaturePropertySection";
import HeroSection from "@/components/home/HeroSection";
import PackageSection from "@/components/home/PackageSection";
import PrtnarAreaSection from "@/components/home/PrtnarAreaSection";
import ReviewSection from "@/components/home/ReviewSection";
import SuperEasySections from "@/components/home/SuperEasySections";
import WeBestSection from "@/components/home/WeBestSection";

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
