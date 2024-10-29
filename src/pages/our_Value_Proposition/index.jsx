import OurValuePropositionImage from "@/Components/OurValueProposition_Page_Components/OurValueProposition_Image";
import OurValuePropositionText from "@/Components/OurValueProposition_Page_Components/OurValueProposition_Text_intro";

export default function OurValueProposition() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 bg-bgShade py-12 max-xl:space-y-5 items-end">
      <OurValuePropositionImage />
      <OurValuePropositionText />
    </div>
  );
}
