import React, { useState, useEffect, useContext } from "react";
import { MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
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

const Comments = () => {
  const [rating, setRating] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const { cardId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModul, setOpenModul] = useState(false);
  const [reviewsData, setReviewsData] = useState(() => {
    return JSON.parse(localStorage.getItem("reviews")) || [];
  });

  const [withMedia, setWithMedia] = useState(false);
  const [selectedAge, setSelectedAge] = useState("All");

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
  let reviewsPerPage = 5;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviewsData));
  }, [reviewsData]);
  const [filteredReviews, setFilteredReviews] = useState(currentReviews);

  useEffect(() => {
    setFilteredReviews((prevReviews) => {
      if (JSON.stringify(prevReviews) === JSON.stringify(currentReviews)) {
        return prevReviews; // Prevent unnecessary re-renders
      }
      return currentReviews;
    });
  }, [currentReviews]); 
  
  const handleModulClick = () => {
    setOpenModul(!openModul);
  };

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
  useEffect(() => {
    let updatedReviews = [...reviewsData]; // Orijinal diziyi bozmamak için kopyala
  
    if (rating) {
      updatedReviews = updatedReviews.filter(
        (review) => review.rating === rating
      );
    }
  
    if (withMedia) {
      updatedReviews = updatedReviews.filter(
        (review) => review.comImg !== null
      );
    }
  
    // Pagination (sayfalama)
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const paginatedReviews = updatedReviews.slice(indexOfFirstReview, indexOfLastReview);
  
    setFilteredReviews(paginatedReviews);
  
  }, [rating, withMedia, currentPage]); // `reviewsData` eklendiğinde sonsuz döngü olabilir!
  
  


  if (!product) {
    return <p>Loading...</p>;
  }

  const stars = checkRating(product.rating);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const starCounts = reviewsData.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {});
  const ratings = [5, 4, 3, 2, 1];

  const handleLike = (index) => {
    setReviewsData((prevReviews) =>
      prevReviews.map((review, i) => {
        if (i === index) {
          if (review.disliked) {
            return {
              ...review,
              likes: review.likes + 1,
              dislikes: review.dislikes - 1,
              liked: true,
              disliked: false,
            };
          } else if (!review.liked) {
            return { ...review, likes: review.likes + 1, liked: true };
          }
        }
        return review;
      })
    );
  };

  const handleDislike = (index) => {
    setReviewsData((prevReviews) =>
      prevReviews.map((review, i) => {
        if (i === index) {
          if (review.liked) {
            return {
              ...review,
              dislikes: review.dislikes + 1,
              likes: review.likes - 1,
              disliked: true,
              liked: false,
            };
          } else if (!review.disliked) {
            return { ...review, dislikes: review.dislikes + 1, disliked: true };
          }
        }
        return review;
      })
    );
  };
  const handleClearFilters = () => {
    setFilteredReviews(currentReviews);
    setRating(null);
    setWithMedia(false);
    setSelectedAge("All");
  };

  const handleRatinggClick = (selectedRating) => {
    setRating(selectedRating);
    setIsOpen(false);

    const filtered = reviewsData.filter((review) =>
      selectedRating ? review.rating === selectedRating : true
    );

    setFilteredReviews(filtered);
  };

  const handleWithMediaClick = () => {
    setWithMedia(!withMedia);

    const filtered = reviewsData.filter((review) =>
      withMedia ? true : review.comImg !== null
    );

    setFilteredReviews(filtered);
  };
  

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
                      onClick={() => handleRatinggClick(value)}
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
                <input
                  type="radio"
                  name="option"
                  onChange={handleWithMediaClick}
                />
                <span class="slider"></span>
              </label>
            </div>
          </div>
          <div className="ratingClear">
            <p>
              We found <span>{reviewsData.length}</span> matching reviews
            </p>
            <Link onClick={handleClearFilters}>Clear filters</Link>
          </div>
          <div className="reviews">
            {filteredReviews.map((review, index) => (
              <div className="review" key={index}>
                <div className="comment">
                  <div className="reviewInfo">
                    <div className="reviewer">
                      <div className="reviewerProfile">
                        <div className="reviewerInfo">
                          <h3>{review.name}</h3>
                          <span>{review.status}</span>
                        </div>
                        <div className="verifiedBadge">✔</div>
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
                            {review.selectedOptions &&
                            Object.entries(review.selectedOptions).length >
                              0 ? (
                              Object.entries(review.selectedOptions).map(
                                ([question, answer]) => (
                                  <li key={question} className="listSelectItem">
                                    {answer}
                                  </li>
                                )
                              )
                            ) : (
                              <li>-</li>
                            )}
                          </ul>
                        </div>
                      </div>
                      <div className="comentDate">
                        <time
                          dateTime={review.date || new Date().toISOString()}
                        >
                          {review.date
                            ? new Date(review.date).toLocaleDateString("tr-TR")
                            : "Tarih yok"}
                        </time>
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
                        <p>{review.heading || "No heading"}</p>
                      </div>
                      <div className="reviewerComment">
                        <p>{review.comment}</p>
                        {review.comImg && (
                          <img src={review.comImg} alt="Comment Image" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="commentDate">
                    <time dateTime={review.date || new Date().toISOString()}>
                      {review.date
                        ? new Date(review.date).toLocaleDateString("tr-TR")
                        : "Tarih yok"}
                    </time>
                  </div>
                </div>
                <div className="reviewHelpful">
                  <p>Was this review helpful?</p>
                  <AiOutlineLike
                    className="like"
                    onClick={() => handleLike(index)}
                  />
                  <p>{review.likes}</p>
                  <AiOutlineDislike
                    className="like"
                    onClick={() => handleDislike(index)}
                  />
                  <p>{review.dislikes}</p>
                </div>
              </div>
            ))}
            <div className="pagination">
              <div
                className={`pagination-button ${
                  currentPage === 1 ? "disabled" : ""
                }`}
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
              >
                <AiOutlineLeft className="icon" style={{ cursor: "pointer" }} />
              </div>
              {pageNumbers.map((number) => (
                <div
                  key={number}
                  className={`pagination-number ${
                    currentPage === number ? "active" : "deactive"
                  }`}
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
                </div>
              ))}

              <div
                className={`pagination-button ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={() =>
                  currentPage < totalPages && setCurrentPage(currentPage + 1)
                }
              >
                <AiOutlineRight
                  className="icon"
                  style={{ cursor: "pointer" }}
                />
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
