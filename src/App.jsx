import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Partners from "./pages/partners";
import AboutUS from "./pages/about_us";
import Marquee_Animation from "./Components/Marquee_Animation";
import Services from "./Components/Company_Services";
import Re_Alcm from "./pages/re_alcm";
import RentalFirst from "./pages/rentalFirst";
import ReFin from "./pages/re_Fin";
import OurValueProposition from "./pages/our_Value_Proposition";
import OurTeam from "./pages/ourTeam";
import ContactUS from "./pages/contact_us";
import Layout from "./Layout";
import Privacy_Policy from "./Components/privacy-policy";
import OurFuturePlan from "./pages/ourFuture_Plan";
import OurPartners_Components from "./Components/OurPartners_Components";
import About_Us_Components from "./Components/About_Us_Components";
import Calculator from "@/pages/calculator";
import I_RE_ALCM_Services from "./Components/I_RE_ALCM_Services";
import I_RENTAL_Services from "./Components/I_RENTAL_Services";
import I_RE_FIN_Services from "./Components/I_RE_FIN_Services";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
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
              <OurFuturePlan />
              <OurTeam />
            </main>
          ),
        },
        {
          path: "/contact",
          element: <ContactUS />,
        },
        {
          path: "/privacy-policy",
          element: <Privacy_Policy />,
        },
        {
          path: "/our-partners",
          element: <OurPartners_Components />,
        },
        {
          path: "/about-us",
          element: <About_Us_Components />,
        },
        {
          path: "/calculator",
          element: <Calculator />,
        },
        {
          path: "/I_RE_ALCM_Services",
          element: <I_RE_ALCM_Services />,
        },
        {
          path: "/I_RENTAL_Services",
          element: <I_RENTAL_Services />,
        },
        {
          path: "/I_RE_FIN_Services",
          element: <I_RE_FIN_Services />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
