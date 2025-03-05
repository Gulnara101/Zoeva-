import React from "react";
import excample from "../../Images/eyesPhotos/27.webp";

const PerfectPair = () => {
  return (
    <section className="perfectPair">
      <div className="container">
        <div className="row">
          <div className="perfectPairProductImage">
            <img src={excample} alt="#" />
          </div>
          <div className="perfectPairProductAbout">
            <div className="perfectPairHead">
              <h2>Perfect Pair</h2>
            </div>
            <div className="perfectText">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis, consectetur?
              </p>
            </div>
            <div className="perfectCards">
              <div className="perfectCard">
                <div className="img">
                  <img src={excample} alt="#" />
                </div>
                <div className="perfectTitle">
                  <h3>Card Title</h3>
                  <p>$24,00</p>
                  <span>Lorem, ipsum dolor.</span>
                  <div className="rating">
                    <div className="icons">
                      <img src="#" alt="icon" />
                      <img src="#" alt="icon" />
                      <img src="#" alt="icon" />
                      <img src="#" alt="icon" />
                    </div>
                    <p>4.5 (2348)</p>
                  </div>
                </div>
              </div>
              <div className="perfectCard">
                <div className="img">
                  <img src={excample} alt="#" />
                </div>
                <div className="perfectTitle">
                  <h3>Card Title</h3>
                  <p>$24,00</p>
                  <span>Lorem, ipsum dolor.</span>
                  <div className="rating">
                    <div className="icons">
                      <img src="#" alt="icon" />
                      <img src="#" alt="icon" />
                      <img src="#" alt="icon" />
                      <img src="#" alt="icon" />
                    </div>
                    <p>4.5 (2348)</p>
                  </div>
                </div>
              </div>
              <button>
                ADD TO CART <p>|</p> $24,00
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectPair;
