import Our_Future_Plan_Components from "@/Components/Our_Future_Plan_Components";
import futureWave from "@/assets/images/futureWave.svg";

export default function OurFuturePlan() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${futureWave})`,
        backgroundSize: "cover",
      }}
    >
      <Our_Future_Plan_Components />
    </div>
  );
}
