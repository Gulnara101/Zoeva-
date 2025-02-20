import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

const MoreTwo = () => {
  const swiperRef = useRef(null);

  return (
    <div className="moreTwoSec">
      <div className="rowMore">
        <h2>More of Zoeva</h2>
        <div className="carts">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={10}
            slidesPerView={3}
            //   navigation
            pagination={{
              type: "fraction",
            }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              750: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="cart">
                <img
                  src="https://zoevacosmetics.com/cdn/shop/files/zoeva-velvet-love-eyeliner-pencil-campaign_550x.jpg?v=1676987705"
                  alt="#"
                />
                <div className="cartText">
                  <h3>Eye-Make-Up</h3>
                  <p>Create unforgettable moments with our eye makeup.</p>
                  <Link>DISCOVER NOW</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cart">
                <img
                  src="https://zoevacosmetics.com/cdn/shop/files/zoeva-velvet-love-matte-hyaluronic-lipstick-campaign-01_710x.progressive.jpg?v=1677509355"
                  alt="#"
                />
                <div className="cartText">
                  <h3>Lip-Make-Up</h3>
                  <p>Our lip products perfect your look.</p>
                  <Link>DISCOVER NOW</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cart">
                <img
                  src="https://zoevacosmetics.com/cdn/shop/files/zoeva-bright-eye-mask-2222-2500_710x.progressive.jpg?v=1655459436"
                  alt="#"
                />
                <div className="cartText">
                  <h3>Skincare</h3>
                  <p>Fresh, healthy, and radiant skin with our skincare.</p>
                  <Link>DISCOVER NOW</Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="paginations">
            <RiArrowLeftSLine
              className="leftArrow"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <RiArrowRightSLine
              className="rightArrow"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreTwo;
