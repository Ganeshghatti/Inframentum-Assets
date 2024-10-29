// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { homeSlider_Images } from "@/constants";
import { Button } from "@/Components/ui/button";

// IMAGES

// React Icons
import { FaArrowRightLong } from "react-icons/fa6";


export default function OurPartners_Slides() {
    return (
        <div className="relative">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {homeSlider_Images?.map((eachImage, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={eachImage?.src}
                            alt={eachImage?.alt}
                            className="w-full my-auto lg:h-[91svh]"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-40"></div>

            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 flex flex-col items-center justify-center gap-4">
                <div className="w-full h-full">
                    <h1 className="text-3xl text-white md:text-6xl capitalize font-semibold">Our Partners</h1>
                </div>
                <div className="">
                    <p className="text-white font-semibold text-sm text-center">Partnered with like-minded companies</p>
                </div>
                <div>
                    <Button className="bg-secondaryColor hover:bg-secondaryColor_hover/70 px-5 py-4 rounded-full text-white transition-all duration-300 ease-linear flex items-center justify-center gap-2 group">
                        <span>
                            Get Started Free
                        </span>
                        <span>
                            <FaArrowRightLong size={20} className="group-hover:translate-x-2 transition-all duration-300 ease-linear" />
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
}



