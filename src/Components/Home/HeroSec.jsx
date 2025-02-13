import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import slide1 from "../../Images/heroSlider1.webp";
import slide11 from "../../Images/slider11.webp";
import slide2 from "../../Images/DUMPLING-EU-banner_1780x.jpg";
import slide22 from "../../Images/slide22.webp";
import slide3 from "../../Images/RM_DESKTOP_UK_1780x.jpg";
import slide33 from "../../Images/slide 33.webp"; 

const HeroSec = () => {
  return (
    <Swiper
      cssMode={true}
      loop={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="hero-swiper"
    >
      <SwiperSlide className="slides">
        <img src={slide1} alt="Slide 1" className="desktopImg" />
        <img src={slide11} alt="Slide 1" className="mobileImg" />
        <Link>SHOP NOW</Link>
      </SwiperSlide>
      <SwiperSlide className="slides">
        <img src={slide2} alt="Slide 2" className="desktopImg" />
        <img src={slide22} alt="Slide 2" className="mobileImg" />
        <Link>SHOP NOW</Link>
      </SwiperSlide>
      <SwiperSlide className="slides">
        <img src={slide3} alt="Slide 3" className="desktopImg" />
        <img src={slide33} alt="Slide 3" className="mobileImg" />
        <Link>SHOP NOW</Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSec;
