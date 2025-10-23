import CompanyStats from "@/components/CompanyStats";
import GolestanBrandIntro from "@/components/GolestanBrandIntro";
import GolestanPistachio from "@/components/GolestanPistachio";
import GolestanPistachioDescription from "@/components/GolestanPistachioDescription";
import GolestanTea from "@/components/GolestanTea";
import GolestanTeaDescription from "@/components/GolestanTeaDescription";
import HeroSection from "@/components/HeroSection";
import MagazineSection from "@/components/MagazineSection";
import ProductDescription from "@/components/ProductDescription";
import ProductIntro from "@/components/ProductIntro";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <GolestanBrandIntro />
      <CompanyStats />
      <ProductIntro />
      <ProductDescription />
      <GolestanTea />
      <GolestanTeaDescription />
      <GolestanPistachio />
      <GolestanPistachioDescription />
      <MagazineSection />
    </div>
  );
}
