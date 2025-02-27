import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
} from "react-icons/md";
import excample from "../../Images/eyesPhotos/27.webp";
import deliveryIcon from "../../Images/carDeliveryIcon.avif";
import faqData from "../../Mocks/faqMenu";

const CardDetail = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="cardDetail">
      <div className="row">
        <div className="productMoreImg">
          <div className="inOutIcon">
            <MdKeyboardArrowUp />
          </div>
          <div className="moreImages">
            <img src={excample} alt="#" />
            <img src={excample} alt="#" />
            <img src={excample} alt="#" />
            <img src={excample} alt="#" />
            <img src={excample} alt="#" />
            <img src={excample} alt="#" />
          </div>
          <div className="inOutIcon">
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="mainProduct">
          <img src={excample} alt="#" />
        </div>
        <div className="mainProductDetails">
          <div className="mainProductDetailsContainer">
          <div className="detailNavigate">
            <p>Home</p>
            <MdKeyboardArrowRight />
            <p>Product</p>
            <MdKeyboardArrowRight />
            <p>product title</p>
          </div>
          <p className="productMode">Lorem, ipsum dolor.</p>
          <h2 className="productTitle">Lorem ipsum dolor sit amet.</h2>
          <div className="productRating">
            <img src="#" alt="icon" />
            <img src="#" alt="icon" />
            <img src="#" alt="icon" />
            <img src="#" alt="icon" />
            <p>4.5</p>
            <p>2348</p>
          </div>
          <p className="productColor">Black</p>
          <button>
            ADD TO CART <p>|</p> $24,00
          </button>
          <div className="delivery">
            <img src={deliveryIcon} alt="icon" />
            <Link>Free shipping</Link>
          </div>
          <h2 className="productCom">Lorem ipsum dolor sit.</h2>
          <p className="productAbout">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dignissimos vitae adipisci velit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Adipisci aperiam sit rem perferendis
            molestiae! Nulla dignissimos explicabo, nobis ipsam aperiam
            repudiandae, voluptatum inventore aspernatur, quod at laudantium
            rem? Accusantium!
          </p>
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
                {openId === item.id && <p className="answer">{item.answer}</p>}
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
