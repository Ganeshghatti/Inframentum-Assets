import { teamImages } from "@/constants";

export default function Our_Team() {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="font-bold text-center text-4xl md:text-[56px]">
          Our Team
        </h1>
      </div>
      <div className="flex max-md:flex-col items-center md:gap-10 justify-between space-y-8">
        {teamImages?.map((each_Info, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center space-y-2"
          >
            <div>
              <img src={each_Info?.src} alt={each_Info?.alt} />
            </div>
            <div>
              <span className="font-semibold">{each_Info?.name}</span>
            </div>
            <div>
              <span>{each_Info?.designation}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
