// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// IMAGES
import img_1 from "../../../assets/images/image-1.jpg";
import img_2 from "../../../assets/images/image-2.jpg";
import img_3 from "../../../assets/images/image-3.jpg";

export default function HomeSlider() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img_2} alt="slide-1" className="md:h-[50vh] w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_1} alt="slide-1" className="md:h-[50vh] w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_3} alt="slide-1" className="md:h-[50vh] w-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
