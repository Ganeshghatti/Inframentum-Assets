import Home from "@/pages/home";
import AboutUS from "@/pages/about_us";
import Partners from "@/pages/partners";
import Marquee_Animation from "./Components/Marquee_Animation";
import Services from "@/Components/Company_Services";
import Re_Alcm from "@/pages/re_alcm";
import RentalFirst from "@/pages/rentalFirst";
import ReFin from "./pages/re_Fin";
import Header from "./Components/Header";
import OurValueProposition from "./pages/our_Value_Proposition";
import OurTeam from "./pages/ourTeam";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <main className="space-y-14 md:space-y-16">
        <Home />
        <Partners />
        <AboutUS />
        <Marquee_Animation />
        <Services />
        <Re_Alcm />
        <RentalFirst />
        <ReFin />
        <OurValueProposition />
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
}
