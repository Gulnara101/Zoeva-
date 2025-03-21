import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import slide1 from "../../Videos/sliderLong.mp4";
import slide11 from "../../Videos/sliderShort.mp4";

const HeroSec = () => {
  return (
    <Swiper
      cssMode={true}
      loop={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="hero-swiper"
    >
      <SwiperSlide className="slides">
        <video
          src={slide1}
          alt="Slide 1"
          className="desktopImg"
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          src={slide11}
          alt="Slide 1"
          className="mobileImg"
          autoPlay
          loop
          muted
          playsInline
        />
        <Link>SHOP NOW</Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSec;
