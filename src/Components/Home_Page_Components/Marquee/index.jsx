import { marqueeTags } from "@/utils/marquee_Tags";
import Marquee from "react-fast-marquee";

export default function Marquee_Animation() {
  return (
    <Marquee pauseOnHover speed={120} loop={0}>
      <ul className="flex items-center gap-20 text-2xl font-semibold list-disc">
        {marqueeTags?.map((each_Tag, index) => (
          <li key={index} className="mx-20">
            {each_Tag?.tag}
          </li>
        ))}
      </ul>
    </Marquee>
  );
}
