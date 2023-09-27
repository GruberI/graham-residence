import Navigation from "@/components/Shop/Navigation";
import Header from "@/components/Shop/Header";
import HeroImage from "@/components/Shop/HeroImage";

export default function Shop() {
  return (
    <div className="bg-white py-1 sm:py-10 lg:py-10">
      <Header />
      <Navigation />
      <HeroImage />
    </div>
  );
}