import First_Founder from "./First_Founder";
import Second_Founder from "./Second_Founder";
import Third_Founder from "./Thrid_Founder";

export default function Founder_Intro() {
  return (
    <div className="space-y-20">
      <h1 className="flex  items-center justify-center gap-3 max-lg:text-3xl text-5xl capitalize font-semibold">
        <span className="text-secondaryColor">Our</span>
        <span>Founders</span>
      </h1>
      <First_Founder />
      <Second_Founder />
      <Third_Founder />
    </div>
  );
}
