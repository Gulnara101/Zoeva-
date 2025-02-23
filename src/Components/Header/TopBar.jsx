import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topBar">
      <Link to="https://uk.trustpilot.com/review/www.zoevacosmetics.com?sort=recency">
        Free EU-wide Delivery | Rated EXCELLENT on Trustpilot
      </Link>
    </div>
  );
};

export default TopBar;
