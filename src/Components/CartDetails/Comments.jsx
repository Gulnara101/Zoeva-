import React, { useState, useEffect, useContext } from "react";
import { MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown, FaChevronUp } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import {
  AiOutlineLike,
  AiOutlineDislike, 
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import bestdatam from "../../Mocks/bestSellerData";
import star1 from "../../Images/svg/stars/star1.svg";
import star2 from "../../Images/svg/stars/star2.svg";
import Modul from "../CartDetails/CommentModul";
import FormContext from "../../Context/FormContext";
import data from "../../Mocks/reviewData";

const Comments = () => {
  const [rating, setRating] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selected, setSelected] = useState("Sort by");
  const { cardId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModul, setOpenModul] = useState(false);
  const [reviewsData, setReviewsData] = useState(() => {
    return JSON.parse(localStorage.getItem("reviews")) || [];
  });
  const context = useContext(FormContext);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviewsData));
  }, [reviewsData]);

  const getProduct = (id) => {
    const selectedProduct = bestdatam.find(
      (product) => product.id === Number(id)
    );
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  };
  useEffect(() => {
    getProduct(cardId);
  }, [cardId]);

  // if (!context) {
  //   return <p>Veri yükleniyor...</p>;
  // }

  // const { formDataList } = context;

  const handleModulClick = () => {
    setOpenModul(!openModul);
  };

  const options = [
    "Highest rating",
    "Lowest rating",
    "With Media",
    "Most recent",
    "Verified purchase",
  ];

  const handleRatingClick = (value) => {
    setRating(value);
    setIsOpen(false);
  };

  const checkRating = (rating) => {
    const ratingValue = parseFloat(rating) || 0;
    const starsArray = Array(5).fill(star1);

    if (ratingValue > 4 && ratingValue < 4.8) {
      starsArray[4] = star2;
    }
    return starsArray;
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  const stars = checkRating(product.rating);
  const reviewsPerPage = 5;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(
    indexOfFirstReview,
    indexOfLastReview
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const starCounts = reviewsData.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {});
  const ratings = [5, 4, 3, 2, 1];
  return (
    <section className="comments">
      <div className="container">
        <div className="row">
          <h2 className="headSec">Customer Reviews</h2>
          <div className="reviewStars">
            <div className="starRating">
              <div className="ratingNum">
                <h2>{product?.rating?.split(" ")[0]}</h2>
              </div>
              <div className="ratingStar">
                <div className="stars">
                  {stars.map((star, index) => (
                    <img key={index} src={star} alt="star" />
                  ))}
                </div>
                <p>Based on {reviewsData.length} reviews</p>
              </div>
            </div>
            <div className="starRatingFilter">
              {ratings.map((star) => {
                const maxCount = Math.max(...Object.values(starCounts), 1);
                const value = starCounts[star] || 0;
                const percentage = (value / maxCount) * 100;
                return (
                  <div className="starFilter" key={star}>
                    <h2>{star}</h2>
                    <MdOutlineStarPurple500 className="starIcon" />
                    <input
                      type="range"
                      className="customRange"
                      min="0"
                      max={maxCount}
                      value={value}
                      readOnly
                      style={{
                        background: `linear-gradient(to right, #000 ${percentage}%, #ddd ${percentage}%)`,
                      }}
                    />
                    <h2>{value}</h2>
                  </div>
                );
              })}
            </div>
            <div className="addReview">
              <button onClick={handleModulClick}>Write A Review</button>
            </div>
          </div>
          <div className="reviewStarsFilter">
            <div className="search">
              <FiSearch className="searchIcon" />
              <input type="search" placeholder="Search reviews" />
            </div>
            <div className="ratingDropdown">
              <button
                className="dropdownButton"
                onClick={() => setIsOpen(!isOpen)}
              >
                {rating ? (
                  <>
                    {[...Array(5)].map((_, index) =>
                      index < rating ? (
                        <MdOutlineStarPurple500
                          key={index}
                          className="starIcon"
                        />
                      ) : (
                        <MdOutlineStarOutline
                          key={index}
                          className="starIcon"
                        />
                      )
                    )}
                  </>
                ) : (
                  "Rating"
                )}
              </button>

              {isOpen && (
                <ul className="dropdownList">
                  <li
                    className={`dropdownItem ${
                      rating === null ? "active" : ""
                    }`}
                    onClick={() => handleRatingClick(null)}
                  >
                    Rating
                  </li>
                  {[5, 4, 3, 2, 1].map((value) => (
                    <li
                      key={value}
                      className={`dropdownItem ${
                        rating === value ? "active" : ""
                      }`}
                      onClick={() => handleRatingClick(value)}
                    >
                      {[...Array(5)].map((_, index) =>
                        index < value ? (
                          <MdOutlineStarPurple500 key={index} />
                        ) : (
                          <MdOutlineStarOutline key={index} />
                        )
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="withMedia">
              <p>With Media</p>
              <label class="customRadio">
                <input type="radio" name="option" />
                <span class="slider"></span>
              </label>
            </div>
            <select name="select">
              <option value="option">All</option>
              <option value="option">unter 18</option>
              <option value="option">18-24</option>
              <option value="option">25-34</option>
              <option value="option">35-44</option>
              <option value="option">45-54</option>
              <option value="option">55-64</option>
              <option value="option">65+</option>
            </select>
            <select name="select">
              <option value="option">All</option>
              <option value="option">Normal Skin</option>
              <option value="option">Dry Skin</option>
              <option value="option">Oily Skin</option>
              <option value="option">Combination Skin</option>
              <option value="option">Impurites</option>
              <option value="option">High Sensitive</option>
            </select>
            <select name="select">
              <option value="option">All</option>
              <option value="option">Very pale</option>
              <option value="option">Blass</option>
              <option value="option">Hell</option>
              <option value="option">Light to Medium</option>
              <option value="option">Medium</option>
              <option value="option">Tanned</option>
              <option value="option">Browned to Dark</option>
              <option value="option">Dark</option>
              <option value="option">Very Dark</option>
            </select>
            <select name="select">
              <option value="option">All</option>
              <option value="option">Cool</option>
              <option value="option">Neutral</option>
              <option value="option">Warm</option>
            </select>
          </div>
          <div className="ratingSort">
            <div
              className="sortHeader"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              Sort by :{selected}{" "}
              {isSortOpen ? <FaChevronUp /> : <FaAngleDown />}
            </div>

            {isSortOpen && (
              <ul className="sortList">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`sortItem ${
                      selected === option ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelected(option);
                      setIsSortOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="ratingClear">
            <p>
              We found <span>5</span> matching reviews
            </p>
            <Link>Clear filters</Link>
          </div>
          <div className="reviews">
            {reviewsData.map((review, index) => (
              <div className="review" key={index}>
                <div className="comment">
                  <div className="reviewInfo">
                    <div className="reviewer">
                      <div className="reviewerProfile">
                        <img src={review.image} alt="#" />
                        <div className="reviewerInfo">
                          <h3>{review.name}</h3>
                          <span>{review.status}</span>
                        </div>
                        <div class="verifiedBadge">✔</div>
                      </div>
                      <div className="revierSelect">
                        <div className="revierSelects">
                          <ul className="listSelects">
                            <li className="listHeadSelects">Alter</li>
                            <li className="listHeadSelects">Skin type</li>
                            <li className="listHeadSelects">Skin tone</li>
                            <li className="listHeadSelects">Unterton</li>
                          </ul>
                        </div>
                        <div className="revierSelects">
                          <ul className="listSelects">
                            <li className="listSelectItem">45-54</li>
                            <li className="listSelectItem">Normal skin</li>
                            <li className="listSelectItem">Tanned</li>
                            <li className="listSelectItem">Warm</li>
                          </ul>
                        </div>
                      </div>
                      <h3>See less</h3>
                      <h3>See more</h3>
                      <div className="comentDate">
                        <time datetime="2024-02-27T14:30:00">27/02/24</time>
                      </div>
                    </div>
                    <div className="reviewerComments">
                      <div className="ratingStars">
                        {[...Array(review.rating)].map((_, index) => (
                          <MdOutlineStarPurple500
                            key={index}
                            className="starIcons"
                          />
                        ))}
                        <p>Very Good!</p>
                      </div>
                      <div className="reviewerComment">
                        <p>{review.comment}</p>
                        <span>Read more</span>
                        <span>Read less</span>
                        {review.comImg && (
                          <img src={review.comImg} alt="Comment Image" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="commentDate">
                    <time datetime="2024-02-27T14:30:00">27/02/24</time>
                  </div>
                </div>
                <div className="reviewHelpful">
                  <p>Was this review helpful?</p>
                  <AiOutlineLike className="like" />
                  <p>{review.likes}</p>
                  <AiOutlineDislike className="like" />
                  <p>{review.dislikes}</p>
                </div>
              </div>
            ))}
            <div className="pagination">
              <div
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <AiOutlineLeft className="icon" />
              </div>
              {pageNumbers.map((number) => (
                <div
                  key={number}
                  className={currentPage === number ? "active" : "deactive"}
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
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
        {openModul && <Modul setReviewsData={setReviewsData} />}
      </div>
    </section>
  );
};

export default Comments;
