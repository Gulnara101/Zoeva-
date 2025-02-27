import React, { useEffect, useRef } from "react";
import video1 from "../../Videos/video1.mp4";
import video2 from "../../Videos/video2.mp4";
import video3 from "../../Videos/video3.mp4";

const videos = [video1, video2, video3];

const Anwendung = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        try {
          video.play();
        } catch (error) {
          console.error("error");
        }
      }
    });
  }, []);

  return (
    <section className="anwendung">
      <div className="container">
        <div className="row">
          <h2>Anwendung</h2>
          <div className="anwendungCarts">
            {videos.map((video, index) => (
              <div className="anwendungCart" key={index}>
                <div className="anwendungVideo">
                  <video
                    src={video}
                    ref={(el) => (videoRefs.current[index] = el)}
                    controls
                    loop
                    autoPlay
                    muted
                  />
                </div>
                <div className="anwendungAbout">
                  <h3>{index + 1}</h3>
                  <p>
                    {index === 0
                      ? "Curl your lashes with our ZOEVA Ooh la Lash Curler for a more dramatic lengthening effect."
                      : index === 1
                      ? "Start at the base of your lashes and pull the mascara wand straight through from root to tip. One application provides an instant effect."
                      : "Add additional coats for intense length, definition, and instant lift."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anwendung;
