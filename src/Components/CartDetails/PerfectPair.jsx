import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bestdatam from "../../Mocks/bestSellerData";
import star1 from "../../Images/svg/stars/star1.svg";
import star2 from "../../Images/svg/stars/star2.svg";

const PerfectPair = () => {
  const { cardId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = (id) => {
      const selectedProduct = bestdatam.find(
        (product) => product.id === Number(id)
      ); 
      setProduct(selectedProduct || null);
    };

    getProduct(cardId);
  }, [cardId]);

  const checkRating = (rating) => {
    const ratingValue = parseFloat(rating) || 0;
    const starsArray = Array(5).fill(star1);

    if (ratingValue > 4 && ratingValue < 4.8) {
      starsArray[4] = star2;
    }
    return starsArray;
  };
  if (!product) {
    return <p>Loading...</p>;
  }

  const stars = checkRating(product.rating);

  return (
    <section className="perfectPair">
      <div className="container">
        <div className="row">
          <div className="perfectPairProductImage">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="perfectPairProductAbout">
            <div className="perfectPairHead">
              <h2>Perfect Pair</h2>
            </div>
            <div className="perfectText">
              <p>
               {product.shortDescription}
              </p>
            </div>
            <div className="perfectCards">
              {[1, 2].map((_, index) => (
                <div className="perfectCard" key={index}>
                  <div className="img">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="perfectTitle">
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <span>Lorem, ipsum dolor.</span>
                    <div className="rating">
                      {stars.map((star, index) => (
                        <img key={index} src={star} alt="star" />
                      ))}
                      <p>{product.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
              <button>
                ADD TO CART <span>|</span> {product.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectPair;
