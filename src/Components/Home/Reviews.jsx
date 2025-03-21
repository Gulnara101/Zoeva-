import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { MdStar } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import comments from "../../Mocks/commentData";

const Reviews = () => {
  const swiperRef = useRef(null);

  return (
    <section className="realReviews">
      <div className="container">
        <div className="row">
          <div className="reviewText">
            <h4>Real reviews</h4>
            <h2>Our sisterhood says</h2>
            <div className="sisterhoods">
              {[...Array(5)].map((_, index) => (
                <MdStar className="starIcon" key={index} />
              ))}
              <p>696 Bewertungen</p>
              <FaChevronLeft
                onClick={() => swiperRef.current?.slidePrev()}
                className="navigationIcon"
              />
              <FaChevronRight
                onClick={() => swiperRef.current?.slideNext()}
                className="navigationIcon"
              />
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              630: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              990: {
                slidesPerView: 3,
              },
            }}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1500}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={false}
            className="mySwiper"
          >
            {comments.map((item) => (
              <SwiperSlide key={item.id} className="swiperSlidePage">
                <div className="slidePage">
                  {[...Array(5)].map((_, index) => (
                    <MdStar className="starIcon" key={index} />
                  ))}
                  <div className="slideText">
                    <h3>{item.title}</h3>
                    <p>{item.com}</p>
                    <h6>{item.name}</h6>
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

export default Reviews;
