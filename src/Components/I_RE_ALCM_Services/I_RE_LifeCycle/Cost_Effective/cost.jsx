import React, { useState } from "react";
import cost from "@/assets/images/cost.png";
import cost_2 from "@/assets/images/cost_2.png";
import cost_3 from "@/assets/images/cost_3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Cost = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set the first panel as default

  const Panels = [
    {
      image: cost,
      title: "RE-ALCM",
      desc: "Renewable Energy Asset Life Cycle Management Services addressing. Management of renewable energy assets such as solar panels. Their entire life cycle, from planning & design to decommissioning & recycling.",
    },
    {
      image: cost_2,
      title: "RENTAL-FIRST",
      desc: "Invest in energy-efficient, low-emission equipment for carbon footprints. Operate battery-operated handling & electric construction equipment efficiently. Increase efficiency, productivity, financial viability with eco-friendly equipment.",
    },
    {
      image: cost_3,
      title: "RE-FIN",
      desc: "InframentumTM offers diverse financial services for industry growth & development. It supports project developers, equipment manufacturers, utility companies alike. Investors also benefit from InframentumTM's services, fostering progress.",
    },
  ];

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
      {Panels.map((panel, index) => (
        <div
          key={index}
          className={`mb-[6em] rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${
            activeIndex === index
              ? "w-full md:w-1/2 shadow-lg"
              : "w-full md:w-1/4 shadow-md"
          } relative`}
        >
          <img
            src={panel.image}
            alt={panel.title}
            className="w-full h-[600px] object-cover rounded-t-lg transition-transform duration-300 ease-in-out" // Added transition for smoothness
          />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-black/60 p-4 transition-opacity duration-300 ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="font-semibold text-white text-2xl lg:text-2xl">
              {panel.title}
            </h2>
            {activeIndex === index && (
              <p className="text-white text-lg lg:text-[16px] lg:mt-6">
                {panel.desc}
              </p>
            )}
          </div>
          {activeIndex !== index && (
            <button
              onClick={() => togglePanel(index)}
              className="absolute top-4 right-4 bg-secondaryColor hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 transition-all duration-300"
            >
              <span>View</span>
              <FaArrowRightLong size={20} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cost;
