import React from "react";
import { Link } from "react-router-dom";
import DiscoverTwo from "../Home/DiscoverTwo";

const Discover = () => {
  return (
    <section className="discoverSec">
      <div className="row">
        <div className="cart">
          <img
            src="https://zoevacosmetics.com/cdn/shop/files/zoeva-104-foundation-buffer-02-new_550x.jpg?v=1678365463"
            alt="#"
          />
          <h3>Make-up Brushes</h3>
          <p>
            Discover our complete range of make-up brushes. Whether for your
            foundation, favorite eyeshadow, or a bold brow look, we have the
            perfect brush for every beauty need.
          </p>
          <Link to="/filter"> DISCOVER NOW</Link>
        </div>
        <div className="cart">
          <img
            src="https://zoevacosmetics.com/cdn/shop/files/zoeva-vegan-brush-set-the-artist-and-clutch_82a52b46-54d1-477d-9efb-da3dd49a776f_710x.progressive.jpg?v=1676987634"
            alt="#"
          />
          <h3>Make-up Brush Sets</h3>
          <p>
            ZOEVA brush sets are the perfect addition to your makeup kit.
            Uniquely stylish and available in various shapes, sizes, and
            functions, they are designed to make all your beauty dreams come
            true.
          </p>
          <Link to="/filter"> DISCOVER NOW</Link>
        </div>
        <div className="cart">
          <img
            src="https://zoevacosmetics.com/cdn/shop/files/zoeva-the-everyday-essentials-kit-brushes-black_710x.progressive.jpg?v=1682510961"
            alt="#"
          />
          <h3>Make-up Brush Kits</h3>
          <p>
            Only the best for you! Discover our popular brush kits at a special
            price, featuring iconic brushes we have curated for you.
            Additionally, each kit comes with a stylish ZOEVA Clear Pouch Bag.
          </p>
          <Link to="/filter"> DISCOVER NOW</Link>
        </div>
      </div>
      <div className="discoverTwo">
        <DiscoverTwo />
      </div>
    </section>
  );
};

export default Discover;
