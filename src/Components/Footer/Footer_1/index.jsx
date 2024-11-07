import { useNavigate } from "react-router-dom";
import { FaCalculator } from "react-icons/fa6";

export default function Footer1() {
  const navigate = useNavigate();

  const onNavigate_Handle = () => {
    navigate("/calculator");
  };

  return (
    <div className="bg-image-with-overlay flex items-center flex-col justify-center space-y-8">
      <div className="max-w-5xl">
        <h1 className="text-3xl lg:text-[60px] leading-relaxed font-semibold text-white text-center">
          Take your audience to the next level starting today
        </h1>
      </div>
      <div>
        <button
          className="bg-secondaryColor hover:bg-secondaryColor_hover/90 transition-all duration-300 ease-linear hover:shadow-md px-6 py-3 rounded-full text-white max-md:text-sm flex items-center gap-2 "
          onClick={onNavigate_Handle}
        >
          <span>
            <FaCalculator size={20} />
          </span>
          <span className="capitalize">solar feasibility calculator</span>
        </button>
      </div>
    </div>
  );
}
