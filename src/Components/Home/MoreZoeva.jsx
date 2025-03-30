import React from "react";
import { Link } from "react-router-dom";
import MoreTwo from "../Home/MoreTwo";

const MoreZoeva = () => {
  return (
    <section className="moreOfZoevaSec">
      <div className="container">
        <div className="row">
          <h2>More of Zoeva</h2>
          <div className="carts">
            <div className="cart">
              <img
                src="https://zoevacosmetics.com/cdn/shop/files/zoeva-velvet-love-eyeliner-pencil-campaign_550x.jpg?v=1676987705"
                alt="#"
              />
              <div className="cartText">
                <h3>Eye-Make-Up</h3>
                <p>
                  Create unforgettable moments with our eye makeup, perfect for
                  natural looks or dramatic smoky effects.
                </p>
                <Link to="/filter">DISCOVER NOW</Link>
              </div>
            </div>
            <div className="cart">
              <img
                src="https://zoevacosmetics.com/cdn/shop/files/zoeva-velvet-love-matte-hyaluronic-lipstick-campaign-01_710x.progressive.jpg?v=1677509355"
                alt="#"
              />
              <div className="cartText">
                <h3>Lip-Make-Up</h3>
                <p>
                  Our lip products perfect your look with matte, creamy, and
                  glossy finishes.
                </p>
                <Link to="/filter">DISCOVER NOW</Link>
              </div>
            </div>
            <div className="cart">
              <img
                src="https://zoevacosmetics.com/cdn/shop/files/zoeva-bright-eye-mask-2222-2500_710x.progressive.jpg?v=1655459436"
                alt="#"
              />
              <div className="cartText">
                <h3>Skincare</h3>
                <p>
                  Fresh, healthy, and radiant skin thanks to our innovative and
                  vegan skincare products.
                </p>
                <Link to="/filter">DISCOVER NOW</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="moreeTwo">
          <MoreTwo />
        </div>
      </div>
    </section>
  );
};

export default MoreZoeva;
