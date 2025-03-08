import React, { useState, useMemo } from "react";
import products from "../Mocks/filterCategory";
import star1 from "../Images/svg/stars/star1.svg";
import star2 from "../Images/svg/stars/star2.svg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaAngleDown, FaChevronUp } from "react-icons/fa6";

const FilterMenu = () => {
  const [filters, setFilters] = useState({
    rating: "",
    price: [],
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
  const [hovered, setHovered] = useState(null);
  const [showPencilOptions, setShowPencilOptions] = useState(false);
  const [showBrushOptions, setShowBrushOptions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const checkRating = (rating) => {
    const ratingValue = parseFloat(rating);
    const starsArray = Array(5).fill(star1);
    if (ratingValue > 4 && ratingValue < 4.8) {
      starsArray[4] = star2;
    }
    return starsArray;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "price") {
        setFilters((prev) => {
          const newPrice = checked
            ? [...prev.price, value]
            : prev.price.filter((range) => range !== value);
          return { ...prev, price: newPrice };
        });
      } else if (Array.isArray(filters[name])) {
        setFilters((prev) => ({
          ...prev,
          [name]: checked
            ? [...prev[name], value]
            : prev[name].filter((item) => item !== value),
        }));
      } else {
        setFilters((prev) => ({ ...prev, [name]: checked }));
      }
    } else if (name === "rating") {
      setFilters((prev) => ({
        ...prev,
        rating: value,
      }));
    }
  };

  const clearFilters = () => {
    setFilters({
      rating: "",
      price: [],
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

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const ratingMatch = filters.rating
        ? product.rating >= parseFloat(filters.rating)
        : true;

      const priceMatch =
        filters.price.length === 0 ||
        filters.price.some((range) => {
          switch (range) {
            case "0-20":
              return product.price <= 20;
            case "20-40":
              return product.price > 20 && product.price <= 40;
            case "40-60":
              return product.price > 40 && product.price <= 60;
            case "60-80":
              return product.price > 60 && product.price <= 80;
            case "80-100":
              return product.price > 80 && product.price <= 100;
            default:
              return false;
          }
        });

      const pencilMatch =
        filters.pencil.length === 0 ||
        filters.pencil.some((color) =>
          product.color ? product.color.toLowerCase() === color : false
        );

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
  }, [filters]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCategoryCount = (category) => {
    return products.filter((product) => product.category === category).length;
  };
  return (
    <div className="filterPage">
      <div className="filter-menu">
        <h3>Filters</h3>
        <div className="rating-container">
          <label>Rating:</label>
          <div className="stars">
            {[5, 4, 3, 2, 1].map((value) => (
              <React.Fragment key={value}>
                <input
                  type="radio"
                  id={`star${value}`}
                  name="rating"
                  value={value}
                  checked={filters.rating === String(value)}
                  onChange={handleChange}
                />
                <label
                  htmlFor={`star${value}`}
                  className="star"
                  onMouseEnter={() => setHovered(value)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    color:
                      value <= (hovered || Number(filters.rating))
                        ? "gold"
                        : "#ccc",
                  }}
                >
                  &#9733;
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <label>Price: </label>
        <div className="prices">
          {["0-20", "20-40", "40-60", "60-80", "80-100"].map((range) => (
            <div className="price" key={range}>
              <input
                type="checkbox"
                name="price"
                value={range}
                checked={filters.price.includes(range)}
                onChange={handleChange}
              />
              <label>{`$${range.replace("-", " to $")}`}</label>
            </div>
          ))}
        </div>
        <div className="category">
          <label
            onClick={() => setShowPencilOptions(!showPencilOptions)}
            className="category-title"
          >
            Pencil ({getCategoryCount("Pencil")}){" "}
            {showPencilOptions ? <FaChevronUp /> : <FaAngleDown />}
          </label>
          {showPencilOptions && (
            <div className="checkbox-group">
              {["Brown", "Purple", "Gray", "Light Brown"].map((color) => (
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
            {showBrushOptions ? <FaChevronUp /> : <FaAngleDown />}
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
        <div className="prices">
          {["corrector", "pomade", "lip", "sponge", "spray", "powder"].map(
            (item) => (
              <div key={item} className="price">
                <input
                  type="checkbox"
                  name={item}
                  checked={filters[item]}
                  onChange={handleChange}
                />
                <label htmlFor={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)} (
                  {getCategoryCount(
                    item.charAt(0).toUpperCase() + item.slice(1)
                  )}
                  )
                </label>
              </div>
            )
          )}
        </div>

        <button className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
      <div className="filteredProducts">
        <h3>Filtered Products</h3>
        <ul>
          {currentItems.map((item) => {
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
        <div className="pagination">
          <div
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <AiOutlineLeft className="icon" />
          </div>
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : "deactive"}
            >
              {index + 1}
            </div>
          ))}
          <div
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <AiOutlineRight className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
