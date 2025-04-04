import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import video1 from "../../Videos/video1.mp4";
import video2 from "../../Videos/video2.mp4";
import video3 from "../../Videos/video3.mp4";

const videos = [video1, video2, video3];

const AnwenSlider = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        try {
          video.play();
        } catch (error) {
          console.error( error);
        }
      }
    });
  }, []);

  return (
    <div className="anwenSlider">
      <div className="container">
        <div className="row">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            loop={false}
            speed={1000}
            className="myAnwendungSwiper"
            style={{zIndex:"0"}}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index} className="swiperSlidePagee">
                <div
                  className="anwendungSliderPage"
                  style={{
                    width: "90%",
                    margin: "0 auto",
                  }}
                >
                  <div
                    className="anwendungSliderVideo"
                    style={{
                      width: "100%",
                    }}
                  >
                    <video
                      src={video}
                      ref={(el) => (videoRefs.current[index] = el)}
                      controls
                      loop
                      autoPlay
                      muted
                      style={{
                        width: "100%",
                        // height: "500px",
                        width: window.innerWidth <= 320 ? 500 : 270,
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className="anwendungSliderAbout"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "30px",
                      marginTop: "30px",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "48px",
                        color: "#221c35",
                        marginBottom: "12px",
                        fontWeight: "200",
                        fontFamily: '"La Mango Light", Arial, sans-serif',
                      }}
                    >
                      {index + 1}
                    </h3>
                    <p style={{ fontSize: "14px" }}>
                      {index === 0
                        ? "Curl your lashes with our ZOEVA Ooh la Lash Curler for a more dramatic lengthening effect."
                        : index === 1
                        ? "Start at the base of your lashes and pull the mascara wand straight through from root to tip. One application provides an instant effect."
                        : "Add additional coats for intense length, definition, and instant lift."}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AnwenSlider;
