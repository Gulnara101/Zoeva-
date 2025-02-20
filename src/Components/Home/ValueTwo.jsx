import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import "swiper/css";
import "swiper/css/pagination";

const MoreTwo = () => {
  const swiperRef = useRef(null);

  return (
    <div className="valueTwoSec">
      <div className="rowValue">
        <div className="carts">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={10}
            slidesPerView={3}
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
                  src="https://zoevacosmetics.com/cdn/shop/files/zoeva-pillar-individual-beauty_710x.progressive.jpg?v=1663332399"
                  alt="Value 1"
                />
                <div className="cartText">
                  <p>
                    Everyone deserves to discover their own unique beauty and be
                    loved for it.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cart">
                <img
                  src="https://zoevacosmetics.com/cdn/shop/files/zoeva-pillar-affordable-luxury_710x.progressive.jpg?v=1663332413"
                  alt="Value 2"
                />
                <p>
                  Our products offer everyone worldwide an affordable sense of
                  luxury and elegance.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cart">
                <img
                  src="https://zoevacosmetics.com/cdn/shop/files/zoeva-pillar-sisterhood_710x.progressive.jpg?v=1663332424"
                  alt="Value 3"
                />
                <div className="cartText">
                  <p>
                    We are a sisterhood where every voice is equal, because:
                    Only together are we strong.
                  </p>
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
