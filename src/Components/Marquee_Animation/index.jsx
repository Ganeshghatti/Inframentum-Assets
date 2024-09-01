import { marqueeTags } from "@/utils/marquee_Tags";
import Marquee from "react-fast-marquee";

export default function Marquee_Animation() {
  return (
    // Marquee Animation-------------------------
    <section className="bg-[#6A2D1A] text-white py-1 -rotate-0 overflow-hidden">
      <div className="bg-secondaryColor py-8  rotate-1 border border-secondaryColor_hover">
        <Marquee pauseOnHover speed={120} loop={0}>
          <ul className="flex items-center gap-20 text-2xl font-semibold list-disc">
            {marqueeTags?.map((each_Tag, index) => (
              <li key={index} className="mx-20">
                {each_Tag?.tag}
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </section>
  );
}
