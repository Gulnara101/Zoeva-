import React, { useState, useEffect } from "react";
import { IoMdClose, IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar, MdOutlineFileUpload } from "react-icons/md";
import { Link } from "react-router-dom";

const CommentModul = ({ required = false, setReviewsData }) => {
  const [reviewsData, setLocalReviewsData] = useState(() => {
    return JSON.parse(localStorage.getItem("reviews")) || [];
  });
  const [hoverIndex, setHoverIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [error, setError] = useState({});
  const [images, setImages] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({
    "Do you want to tell us your age?": "",
    "What skin type do you have?": "",
    "What is your skin tone?": "",
    "What undertone do you have?": "",
  });

  const [isValid, setIsValid] = useState(true);
  const [heading, setHeading] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    headline: "",
  });
  const formDatam = [
    {
      label: "Do you want to tell us your age?",
      options: ["under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
    },
    {
      label: "What skin type do you have?",
      options: [
        "Normal",
        "Dry",
        "Oily",
        "Combination",
        "Impurities",
        "Highly Sensitive",
      ],
    },
    {
      label: "What is your skin tone?",
      options: [
        "Very pale",
        "Fair",
        "Light",
        "Light to medium",
        "Medium",
        "Tanned",
        "Dark",
        "Very dark",
      ],
    },
    {
      label: "What undertone do you have?",
      options: ["Cool", "Neutral", "Warm"],
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const messages = ["Very poor!", "Poor!", "Average!", "Good!", "Great!"];

  useEffect(() => {
    if (reviewsData.length > 0) {
      localStorage.setItem("reviews", JSON.stringify(reviewsData));
    }
  }, [reviewsData]);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviewsData(savedReviews);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelect = (question, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [question]: option,
    }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages].slice(0, 10));
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
    if (required) setError("");
  };

  if (!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name: formData.name,
      email: formData.email,
      comment: formData.review,
      rating: selectedIndex + 1,
      image: "",
      comImg: images.length > 0 ? images[0] : null,
      likes: 0,
      dislikes: 0,
      status: "Verified Buyer",
      date: new Date().toISOString(),
      selectedOptions,
      heading: heading,
    };
    console.log(newReview);
    const updatedReviews = [newReview, ...reviewsData];
    setReviewsData(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    setIsSubmitted(true);
  };

  return (
    <div className="commentModulOverlay" onClick={handleClose}>
      <div className="commentModul" onClick={(e) => e.stopPropagation()}>
        <div className="icon" onClick={handleClose}>
          <IoMdClose />
        </div>
        {isSubmitted ? (
          <div className="succesfull">
            <h2>Thanks, rvw!</h2>
            <p>Your feedback helps other shoppers make better decisions.</p>
            <Link to="/">
              <button>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <div className="addReview">
            <h2>Share your thoughts with us</h2>
            <form>
              <div className="formDatas">
                <label>Rate your experience *</label>
                <div className="starsContainer">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => handleClick(i)}
                      >
                        {i <= (selectedIndex ?? hoverIndex) ? (
                          <MdOutlineStar
                            className="star filled"
                            style={{
                              width: "50px",
                              height: "50px",
                              cursor: "pointer",
                              color: "black",
                            }}
                          />
                        ) : (
                          <IoMdStarOutline
                            className="star"
                            style={{
                              width: "50px",
                              height: "50px",
                              cursor: "pointer",
                              color: "black",
                            }}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                  {(selectedIndex !== null || hoverIndex !== null) &&
                    messages[selectedIndex ?? hoverIndex] !== undefined && (
                      <p className="message">
                        {messages[selectedIndex ?? hoverIndex]}
                      </p>
                    )}
                </div>

                <label>Write a review *</label>
                <textarea
                  rows="5"
                  cols="72"
                  placeholder="Tell us what you like and what you don't like"
                  required
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                />
                {error.comment && (
                  <p className="error-message">{error.comment}</p>
                )}

                <label>Add a heading *</label>
                <textarea
                  placeholder="Summarize your experience"
                  required
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
                <div className="userInfo">
                  <div className="user">
                    <label>Your name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {error.userName && (
                      <p className="error-message">{error.userName}</p>
                    )}
                  </div>
                  <div className="user">
                    <label>Your email address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {error.email && (
                      <p className="error-message">{error.email}</p>
                    )}
                    <p style={{ color: isValid ? "black" : "red" }}>
                      {isValid
                        ? "We will send you an email to confirm this review."
                        : "A valid email address is required"}
                    </p>
                  </div>
                </div>

                <div className="addMedia">
                  <label>Add media</label>
                  <div className="upload-container">
                    <input
                      type="file"
                      accept="image/*"
                      id="fileUpload"
                      multiple
                      hidden
                      onChange={handleFileUpload}
                    />
                    <label htmlFor="fileUpload" className="upload-button">
                      <MdOutlineFileUpload className="upload-icon" />
                      Upload
                    </label>
                  </div>
                  <p>Upload up to 10 images and 3 videos (max. 2 GB)</p>
                  <div className="img-container">
                    {images.map((img, index) => (
                      <div key={index} className="img">
                        <img src={img} alt={`Uploaded preview ${index + 1}`} />
                        <div
                          className="imgHover"
                          onClick={() =>
                            setImages(images.filter((_, i) => i !== index))
                          }
                        >
                          Delete
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {formDatam.map(({ label, options }) => (
                  <div className="addChoose" key={label}>
                    <label>{label} Choose 1</label>
                    <ul>
                      {options.map((opt) => (
                        <li
                          key={opt}
                          className={
                            selectedOptions[label] === opt ? "selected" : ""
                          }
                          onClick={() => handleSelect(label, opt)}
                        >
                          {opt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="btn">
                <p>*Mandatory fields</p>
                <button onClick={handleSubmit}>Send</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentModul;
