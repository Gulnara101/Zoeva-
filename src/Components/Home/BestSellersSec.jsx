import React, { useState } from "react";
import sellerData from "../../Mocks/bestSellerData";
import star1 from "../../Images/svg/stars/star1.svg";
import star2 from "../../Images/svg/stars/star2.svg";
import { Link } from "react-router-dom";

const BestSellersSec = () => {
  const [activeCard, setActiveCard] = useState(null);

  const checkRating = (rating) => {
    const ratingValue = parseFloat(rating);
    const starsArray = Array(5).fill(star1);
    if (ratingValue > 4 && ratingValue < 4.8) {
      starsArray[4] = star2;
    }
    return starsArray;
  };

  return (
    <section className="bestSeller">
      <div className="container">
        <div className="row">
          <h3>Our bestsellers</h3>
          <div className="carts">
            {sellerData.slice(0, 8).map((item) => {
              const starsArray = checkRating(item.rating);
              return (
                <div
                  className="cart"
                  key={item.id}
                  onMouseEnter={() => setActiveCard(item.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="rating">
                    {starsArray.map((star, index) => (
                      <img key={index} src={star} alt="star" />
                    ))}
                    <span>{item.rating}</span>
                  </div>
                  <div className="cartText">
                    <h3>{item.title}</h3>
                    <h4>{item.color}</h4>
                    <p>{item.price}</p>
                  </div>
                  <Link>{item.btn}</Link>
                  {activeCard === item.id && item.ttl && (
                    <div className="hoverDiv">
                      <p>{item.ttl}</p>
                      <span>{item.mode}</span>
                      <div className="hoverImages">
                        {item.img.map((mini, index) => (
                          <div className="hoverImgs" key={index}>
                            {typeof mini === "string" ? (
                              <img src={mini} alt={item.ttl} />
                            ) : (
                              <div
                                className="color"
                                style={{
                                  backgroundColor: mini.value,
                                  width: 50,
                                  height: 16,
                                }}
                              ></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
              );
            })}
          </div>
          <div className="seeAll">
            <Link>View All</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSec;
