import React, { useState, useRef } from "react";
import newInData from "../../Mocks/newInData";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const KurzlichAngesehen = () => {
  const [activeCard, setActiveCard] = useState(null);
  const swiperRef = useRef(null);

  return (
    <section className="weAlsoRecom">
      <div className="row">
        <div className="weAlsoRecomHead">
          <h2>Kürzlich angesehen</h2>
        </div>
        <div className="paginationsIcon">
          <FaChevronLeft
            onClick={() => swiperRef.current?.slidePrev()}
            className="navigationIcon"
          />
          <FaChevronRight
            onClick={() => swiperRef.current?.slideNext()}
            className="navigationIcon"
          />
        </div>
        <div className="weAlsoRecomProducts">
          <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            slidesPerGroup={1}
            spaceBetween={30}
            speed={1500}
            centeredSlides={false}
            pagination={{ clickable: true }}
            navigation={false}
            className="mySwiper"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {newInData.slice(0, 8).map((item) => (
              <SwiperSlide key={item.id} className="swiperSlidePage">
                <div
                  className="cart"
                  key={item.id}
                  onMouseEnter={() => setActiveCard(item.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="cartText">
                    <h3>{item.title}</h3>
                    <h4>{item.color}</h4>
                    <p>{item.price}</p>
                  </div>
                  <Link>{item.btn}</Link>
                  <div
                    className={
                      activeCard === item.id && item.ttl
                        ? "hoverDiv"
                        : " hiddenDiv"
                    }
                  >
                    <div className="hoverText">
                      <p>{item.ttl}</p>
                      <span>{item.mode}</span>
                    </div>
                    <div className="hoverImages">
                      {item?.img?.map((mini, index) => (
                        <div className="hoverImgs" key={index}>
                          {typeof mini === "string" ? (
                            <img src={mini} alt={item.ttl} />
                          ) : (
                            <div
                              className="color"
                              style={{
                                backgroundColor: mini.value,
                              }}
                            ></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="type">
                    <p>{item.type}</p>
                  </div>
                  <div className="countColor">
                    {Array.isArray(item.img) && item.img.length > 3 && (
                      <div className="hoverImgsMoreCount">
                        {item.img.slice(0, 3).map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${item.title} ${index + 1}`}
                          />
                        ))}
                        <p>+{item.img.length - 3}</p>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default KurzlichAngesehen;