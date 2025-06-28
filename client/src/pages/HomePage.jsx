import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TrailerSection from "../components/TrailerSection";

const HomePage = () => {
  return (
    <div className="bg-primary text-white min-h-screen pt-20">
      <HeroSection />
      <TrailerSection />
      <Footer />
    </div>
  );
};
export default HomePage;
