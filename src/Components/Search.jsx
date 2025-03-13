import React, { useState, useRef, useEffect } from "react";
import { IoMdClose, IoIosSearch } from "react-icons/io";
import seller from "../Mocks/bestSellerData";

const Search = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  const filteredProducts =
    seller?.filter((product) =>
      product?.title?.toLowerCase().includes(query.toLowerCase())
    ) || [];

  // Dışarı tıklamayı algılamak için useEffect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    isOpen && (
      <div className="searchModule">
        <div className="search" ref={searchRef}>
          <p>Search for products, category, content</p>
          <div className="sinput">
            <IoIosSearch className="searchIcon" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IoMdClose className="icon" onClick={() => setIsOpen(false)} />
          </div>
        </div>
        {query && (
          <div className="searchedProduct">
            {filteredProducts.length > 0 && <h4>Products</h4>}
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 4).map((product) => (
                <div className="searched" key={product?.id}>
                  <div className="productImg">
                    <img src={product?.image} alt={product?.title} />
                  </div>
                  <div className="productDetails">
                    <h3>{product?.title}</h3>
                    <span>${product?.price}</span>
                  </div>
                </div>
              ))
            ) : null}
            <div className="searchValue">
              <h3>Search for "{query}"</h3>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Search;
