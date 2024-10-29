import RE_ALCM_Image from "@/Components/Re-Alcm_Page_Components/RE-ALCM_Img";
import RE_ALCM_Intro from "@/Components/Re-Alcm_Page_Components/RE-ALCM_Intro";

export default function Re_Alcm() {
  return (
    <section
      id="i-re-alcm"
      className=" container mx-auto  bg-bgShade flex flex-col  scroll-mt-36 md:flex-row items-center justify-around gap-10 md:gap-5 p-8 rounded-3xl"
    >
      <RE_ALCM_Intro />
      <RE_ALCM_Image />
    </section>
  );
}
