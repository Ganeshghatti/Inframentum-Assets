import I_RE_LifeCycle from "./I_RE_LifeCycle";
import I_Re_Moto from "./I_RE_Moto";
import I_Re_ALCM_Slides from "./I_RE_Swiper";

export default function I_RENTAL_Services() {
  return (
    <div className="">
      <div>
        <I_Re_ALCM_Slides />
      </div>
      <div className="mt-16">
        <I_Re_Moto />
      </div>
      <div className="mt-16">
        <I_RE_LifeCycle />
      </div>
    </div>
  );
}
