import OurValuePropositionImage from "@/Components/OurValueProposition_Page_Components/OurValueProposition_Image";
import OurValuePropositionText from "@/Components/OurValueProposition_Page_Components/OurValueProposition_Text_intro";

export default function OurValueProposition() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 items-start bg-background_Color_4 py-20 max-xl:space-y-9">
      <OurValuePropositionImage />
      <OurValuePropositionText />
    </div>
  );
}
