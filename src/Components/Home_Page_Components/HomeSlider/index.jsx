// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { homeSlider_Images } from "@/constants";

// IMAGES

export default function HomeSlider() {
  return (
    <>
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
              className="lg:h-[65vh] w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
