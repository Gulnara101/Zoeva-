import React from "react";
import data from "../../Mocks/brushSetsData";
import { Link } from "react-router-dom";

const BrushSets = () => {
  return (
    <div className="brushSetsHover">
      <ul className="itemList">
        {data.map((item) => (
          <li key={item.id} className="items">
            <Link to="/filter"> {item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrushSets;
