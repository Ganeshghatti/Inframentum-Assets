import Our_Value_Proposition_img from "../../../assets/images/Our-Value-Proposition-img.png";

export default function OurValuePropositionImage() {
  return (
    <div className="max-w-4xl mx-auto space-y-0 lg:mb-[230px]">
      <div>
        <img
          src={Our_Value_Proposition_img}
          alt="Our Value Proposition"
          className="w-full max-md:p-5 h-auto  lg:scale-150 mx-auto "
        />
      </div>
    </div>
  );
}
