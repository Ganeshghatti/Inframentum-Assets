import partnerImage_1 from "../../../assets/images/partners-1.png";
import partnerImage_2 from "../../../assets/images/partners-2.png";
import partnerImage_3 from "../../../assets/images/partners-3.png";

export default function Partners() {
  return (
    <div className="flex flex-row items-center  justify-center max-md:flex-wrap gap-5 md:gap-20 bg-[#b9dfff2d] py-10 border border-[#B9E0FF] rounded-xl px-5">
      <div>
        <img
          src={partnerImage_1}
          alt="Partners"
          className="bg-white img_partner rounded-2xl border border-slate-100 shadow-md cursor-pointer hover:scale-105 transition duration-300"
        />
      </div>
      <div>
        <img
          src={partnerImage_2}
          alt="Partners"
          className="bg-white img_partner rounded-2xl border border-slate-100 shadow-md cursor-pointer hover:scale-105 transition duration-300"
        />
      </div>
      <div>
        <img
          src={partnerImage_3}
          alt="Partners"
          className="bg-white img_partner rounded-2xl border border-slate-100 shadow-md cursor-pointer hover:scale-105 transition duration-300"
        />
      </div>
      <div>
        <img
          src={partnerImage_1}
          alt="Partners"
          className="bg-white img_partner rounded-2xl border border-slate-100 shadow-md cursor-pointer hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
}
