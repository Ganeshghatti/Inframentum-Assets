import { Button } from "@/Components/ui/button";
import p_logo_1 from "../../../../assets/images/partner-6.png";

// REACT ICON
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurPartner_6() {
  return (
    <div className="bg-gray-600 text-white rounded-3xl px-1 md:px-10 py-5 md:py-10 flex max-md:flex-col flex-row items-center justify-between">
      <div className="md:w-[30%] max-md:order-1">
        <img
          src={p_logo_1}
          alt="p_logo_1"
          className="max-md:w-[150px] max-md:h-[150px] md:w-[250px] md:h-[250px] object-contain 2xl:mr-48"
        />
      </div>
      <div className="space-y-6  md:w-[70%] px-4">
        <div>
          <h1 className="text-3xl font-semibold">Quark Marketing</h1>
        </div>
        <div>
          <p className="max-md:text-sm">
          Quark Marketing is a dynamic full-service digital marketing agency specializing in ad management, social media strategies, and creative content solutions. Based in Mumbai, Quark Marketing delivers tailored campaigns to drive engagement, brand awareness, and ROI for diverse industries. With a state-of-the-art studio, expert strategists, and a focus on innovation, Quark Marketing offers services ranging from aesthetic branding to performance-driven ad campaigns. Partnering with leading brands, Quark Marketing provides end-to-end solutions, ensuring businesses stay ahead in a competitive digital landscape.
          </p>
        </div>
        <div>
          <Button className="flex items-center gap-2 group bg-secondaryColor_hover hover:bg-secondaryColor/50 transition-all duration-300 ease-linear rounded-full px-5 py-2">
            <a
              href="https://quarkmarketing.in/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <span>Learn More</span>
              <span>
                <FaArrowRightLong
                  size={20}
                  className="group-hover:translate-x-1 transition-all duration-300 ease-linear"
                />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
