import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import deliveryIcon from "../../Images/carDeliveryIcon.avif";
import faqData from "../../Mocks/faqMenu";
import bestdatam from "../../Mocks/bestSellerData";
import star1 from "../../Images/svg/stars/star1.svg";
import star2 from "../../Images/svg/stars/star2.svg";

const CardDetail = () => {
  const [openId, setOpenId] = useState(null);
  const { cardId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null); 

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const checkRating = (rating) => {
    const ratingValue = parseFloat(rating) || 0;
    const starsArray = Array(5).fill(star1);

    if (ratingValue > 4 && ratingValue < 4.8) {
      starsArray[4] = star2;
    }
    return starsArray;
  };

  const handleImageClick = (img) => {
    setMainImage(img); 
  };

  const getProduct = (id) => {
    const selectedProduct = bestdatam.find(
      (product) => product.id === Number(id)
    );
    if (selectedProduct) {
      setProduct(selectedProduct);
      setMainImage(selectedProduct.image); 
    }
  };

  useEffect(() => {
    getProduct(cardId);
  }, [cardId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const stars = checkRating(product.rating);

  return (
    <section className="cardDetail">
      <div className="row">
        <div className="productMore">
          <div className="productMoreImg">
            <div className="inOutIcon">
              <MdKeyboardArrowUp style={{ cursor: "pointer" }} />
            </div>
            <div className="leftRightIcon">
              <MdKeyboardArrowLeft style={{ cursor: "pointer" }} />
            </div>
            <div className="moreImages">
              {product.otherImgs.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Image ${index}`}
                  onClick={() => handleImageClick(img)} // Click event to change main image
                />
              ))}
            </div>
            <div className="inOutIcon" style={{ cursor: "pointer" }}>
              <MdKeyboardArrowDown />
            </div>
            <div className="leftRightIcon" style={{ cursor: "pointer" }}>
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className="mainProduct">
            <img src={mainImage} alt={product.title} />
          </div>
        </div>
        <div className="mainProductDetails">
          <div className="mainProductDetailsContainer">
            <div className="detailNavigate">
              <Link to="/">
                <p>Home</p>
              </Link>
              <MdKeyboardArrowRight />
              <p>{product.title}</p>
            </div>
            <p className="productMode">{product.ttl}</p>
            <h2 className="productTitle">{product.title}</h2>
            <div className="productRating">
              {stars.map((star, index) => (
                <img key={index} src={star} alt="star" />
              ))}
              <p>{product.rating}</p>
            </div>
            <p className="productColor">{product.color}</p>
            <button>
              ADD TO CART <p>|</p> {product.price}
            </button>
            <div className="delivery">
              <img src={deliveryIcon} alt="icon" />
              <Link>Free shipping</Link>
            </div>
            <h2 className="productCom">{product.shortDescription}.</h2>
            <p className="productAbout">{product.longDescription}</p>
            <div className="toggleMenu">
              {faqData.map((item) => (
                <div key={item.id} className="faq">
                  <div className="question" onClick={() => toggleFAQ(item.id)}>
                    <h3>{item.question}</h3>
                    <span
                      className={`icon ${
                        openId === item.id ? "rotate-up" : "rotate-down"
                      }`}
                    >
                      {openId === item.id ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </span>
                  </div>
                  {openId === item.id && (
                    <p className="answer">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetail;
