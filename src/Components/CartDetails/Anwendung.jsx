import React, { useEffect, useRef, useState } from "react";
import AnwendungSlide from "../CartDetails/AnwenSlider";
import { useParams } from "react-router-dom";
import bestdatam from "../../Mocks/bestSellerData";

const Anwendung = () => {
  const { cardId } = useParams();
  const [product, setProduct] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const getProduct = (id) => {
      const selectedProduct = bestdatam.find(
        (product) => product.id === Number(id)
      );
      setProduct(selectedProduct || null);
    };
 
    getProduct(cardId);
  }, [cardId]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        try {
          video.play();
        } catch (error) {
          console.error("Error playing video:", error);
        }
      }
    });
  }, [product]);

  return (
    <section className="anwendung">
      <div className="container">
        <div className="rowA">
          {product?.video?.length > 0 && <h2>Anwendung</h2>}
          <div className="anwendungCarts">
            {product?.video?.map((video, index) => (
              <div className="anwendungCart" key={index}>
                <div className="anwendungVideo">
                  <video
                    src={video.src}
                    ref={(el) => (videoRefs.current[index] = el)}
                    controls
                    loop
                    autoPlay
                    muted
                  />
                </div>
                <div className="anwendungAbout">
                  <h3>{index + 1}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="anwendungTwo">
          <AnwendungSlide /> 
        </div>
      </div>
    </section>
  );
};

export default Anwendung;
