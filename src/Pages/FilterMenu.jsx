import React, { useState } from "react";
import products from "../Mocks/filterCategory";
import star1 from "../Images/svg/stars/star1.svg";
import star2 from "../Images/svg/stars/star2.svg";

const FilterMenu = () => {
  const [filters, setFilters] = useState({
    rating: "",
    price: 0,
    pencil: [],
    blush: false,
    brush: [],
    corrector: false,
    pomade: false,
    lip: false,
    sponge: false,
    spray: false,
    powder: false,
  });

  const [showPencilOptions, setShowPencilOptions] = useState(false);
  const [showBrushOptions, setShowBrushOptions] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (Array.isArray(filters[name])) {
        setFilters((prev) => ({
          ...prev,
          [name]: checked
            ? [...prev[name], value]
            : prev[name].filter((item) => item !== value),
        }));
      } else {
        setFilters((prev) => ({ ...prev, [name]: checked }));
      }
    } else if (name === "price") {
      setFilters((prev) => ({
        ...prev,
        price: value,
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const clearFilters = () => {
    setFilters({
      rating: "",
      price: 0,
      pencil: [],
      blush: false,
      brush: [],
      corrector: false,
      pomade: false,
      lip: false,
      sponge: false,
      spray: false,
      powder: false,
    });
  };

  const filterProducts = () => {
    return products.filter((product) => {
      // Rating filter
      const ratingMatch = filters.rating
        ? product.rating >= parseFloat(filters.rating)
        : true;

      // Price filter
      const priceMatch = product.price <= filters.price;

      // Category filters
      const pencilMatch =
        filters.pencil.length === 0 ||
        filters.pencil.includes(product.color.toLowerCase());

      const blushMatch = filters.blush ? product.category === "Blush" : true;
      const brushMatch =
        filters.brush.length === 0 ||
        filters.brush.includes(product.brushNumber?.toString());

      const correctorMatch = filters.corrector
        ? product.category === "Corrector"
        : true;
      const pomadeMatch = filters.pomade ? product.category === "Pomade" : true;
      const lipMatch = filters.lip ? product.category === "Lip" : true;
      const spongeMatch = filters.sponge ? product.category === "Sponge" : true;
      const sprayMatch = filters.spray ? product.category === "Spray" : true;
      const powderMatch = filters.powder ? product.category === "Powder" : true;

      return (
        ratingMatch &&
        priceMatch &&
        pencilMatch &&
        blushMatch &&
        brushMatch &&
        correctorMatch &&
        pomadeMatch &&
        lipMatch &&
        spongeMatch &&
        sprayMatch &&
        powderMatch
      );
    });
  };

  const checkRating = (rating) => {
    const ratingValue = parseFloat(rating);
    const starsArray = Array(5).fill(star1);
    if (ratingValue > 4 && ratingValue < 4.8) {
      starsArray[4] = star2;
    }
    return starsArray;
  };

  // Count products in each category
  const getCategoryCount = (category) => {
    return products.filter((product) => product.category === category).length;
  };

  return (
    <div className="filterPage">
      <div className="filter-menu">
        <h3>Filters</h3>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          step="1"
          value={filters.rating}
          onChange={handleChange}
          className="rating-input"
        />

        <label>Price: ${filters.price}</label>
        <input
          type="range"
          name="price"
          min="0"
          max="100"
          value={filters.price}
          onChange={handleChange}
          className="zoeva-range"
        />

        <div className="category">
          <label
            onClick={() => setShowPencilOptions(!showPencilOptions)}
            className="category-title"
          >
            Pencil ({getCategoryCount("Pencil")}){" "}
            {showPencilOptions ? "▼" : "►"}
          </label>
          {showPencilOptions && (
            <div className="checkbox-group">
              {["brown", "purple", "gray", "light brown"].map((color) => (
                <div key={color}>
                  <input
                    type="checkbox"
                    name="pencil"
                    value={color}
                    checked={filters.pencil.includes(color)}
                    onChange={handleChange}
                  />
                  {color}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="category">
          <label
            onClick={() => setShowBrushOptions(!showBrushOptions)}
            className="category-title"
          >
            Brush Number ({getCategoryCount("Brush")}){" "}
            {showBrushOptions ? "▼" : "►"}
          </label>
          {showBrushOptions && (
            <div className="checkbox-group">
              {[5, 10, 15, 20, 25].map((num) => (
                <div key={num}>
                  <input
                    type="checkbox"
                    name="brush"
                    value={num}
                    checked={filters.brush.includes(num.toString())}
                    onChange={handleChange}
                  />
                  {num}
                </div>
              ))}
            </div>
          )}
        </div>

        {["corrector", "pomade", "lip", "sponge", "spray", "powder"].map(
          (item) => (
            <label key={item}>
              <input
                type="checkbox"
                name={item}
                checked={filters[item]}
                onChange={handleChange}
              />{" "}
              {item} (
              {getCategoryCount(item.charAt(0).toUpperCase() + item.slice(1))})
            </label>
          )
        )}

        <button className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
      <div className="filteredProducts">
        <h3>{filterProducts.length === 0 ? "Empty" : "Filtered Products"}</h3>
        <ul>
          {filterProducts().map((item) => {
            const starsArray = checkRating(item.rating);
            return (
              <li key={item.id}>
                <div className="cart">
                  <img src={item.image} alt={item.title} />
                  <div className="rating">
                    {starsArray.map((star, index) => (
                      <img key={index} src={star} alt="star" />
                    ))}
                    <span>{item.rating}</span>
                  </div>
                  <div className="cartText">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <button>ADD TO CART</button>
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterMenu;
