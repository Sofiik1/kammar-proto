import HomeHero from "./components/banner/banner";
import SaboresCarousel from "./components/sabores-carousel/sabores-carousel";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <SaboresCarousel />
      <Footer/>
    </>
  );
}
