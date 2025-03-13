import React from "react";
import { IoMdClose } from "react-icons/io";

const CommentModul = () => {
  return (
    <div className="commentModulOverlay">
      <div className="commentModul">
        <div className="icon">
          <IoMdClose />
        </div>
        <h2>Share your thoughts with us</h2>
        <div className="addReview">
          <form>
            <label>Rate your experience *</label>
            <input type="radio" name="rating" value="1" />
            <input type="radio" name="rating" value="2" />
            <input type="radio" name="rating" value="3" />
            <input type="radio" name="rating" value="4" />
            <input type="radio" name="rating" value="5" />
            <label>Write a review *</label>
            <textarea
              rows="4"
              cols="50"
              placeholder="Tell us what you like and what you don't like"
            ></textarea>
            <label>Add a heading *</label>
            <textarea
              rows="1"
              cols="50"
              placeholder="Summarize your experize"
            ></textarea>
            <div className="userInfo">
              <div className="user">
                <label>Your name*</label>
                <input type="text" />
              </div>
              <div className="user">
                <label>Your email address**</label>
                <input type="text" />
                <p>
                  We will send you an email to confirm that this review is from
                  you.
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="btn">
          <p>*Mandatory fields</p>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default CommentModul;
