// import { useState } from "react";
// // import "./ProductFilter.scss";

// const categories = ["Lips", "Eyes", "Face", "Brushes"];
// const priceRanges = ["Under $20", "$20 - $50", "$50 - $100", "Over $100"];

// const ProductFilter = ({ onFilterChange }) => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedPrice, setSelectedPrice] = useState("");

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     onFilterChange({ category, price: selectedPrice });
//   };

//   const handlePriceChange = (price) => {
//     setSelectedPrice(price);
//     onFilterChange({ category: selectedCategory, price });
//   };

//   return (
//     <div className="product-filter">
//       <h3>Filter by</h3>
//       <div className="filter-section">
//         <h4>Category</h4>
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             className={cat === selectedCategory ? "active" : ""}
//             onClick={() => handleCategoryChange(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>
//       <div className="filter-section">
//         <h4>Price</h4>
//         {priceRanges.map((range) => (
//           <button
//             key={range}
//             className={range === selectedPrice ? "active" : ""}
//             onClick={() => handlePriceChange(range)}
//           >
//             {range}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductFilter;