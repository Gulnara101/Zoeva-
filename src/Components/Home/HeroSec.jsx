import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import slide1 from "../../Images/heroSlider1.webp";
import slide2 from "../../Images/DUMPLING-EU-banner_1780x.jpg";
import slide3 from "../../Images/RM_DESKTOP_UK_1780x.jpg";

const HeroSec = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        loop={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="#" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSec;
