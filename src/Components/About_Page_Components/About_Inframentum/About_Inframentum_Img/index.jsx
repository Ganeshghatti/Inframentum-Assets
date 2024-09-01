import about_Inframentum_img from "../../../../assets/images/about_Inframentum_img.png";

export default function About_Inframentum_Img() {
  return (
    <div className="max-xl:order-1 space-y-8">
      <h1 className="md:text-[56px] text-3xl  font-semibold xl:hidden">
        About INFRAMENTUM
      </h1>
      <img
        src={about_Inframentum_img}
        alt="about_Inframentum_img"
        className="w-full h-auto"
      />
    </div>
  );
}
