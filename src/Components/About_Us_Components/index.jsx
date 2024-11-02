import About_Us_Content from "./About_Us_Content";
import About_Us_Slides from "./About_Us_Slider";
import Founder_Intro from "./Founder_Intro";
import Our_Mission_Container from "./Our_Mission_Container";

export default function About_Us_Components() {
  return (
    <div className="">
      <About_Us_Slides />
      <div className="">
        <About_Us_Content />
      </div>
      <div className="w-[90%] mx-auto mt-20">
        <Our_Mission_Container />
      </div>
      <div className="w-[90%]  mx-auto max-md:mt-20 mt-28">
        <Founder_Intro />
      </div>
    </div>
  );
}
