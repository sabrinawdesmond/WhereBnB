import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./ReviewForm.css";
import * as reviewActions from "../../store/reviews";
import closeButton from "./close-24.png";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";
import React from "react";

const ReviewForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { listingId } = useParams();
  const history = useHistory()

  const [overall, setOverall] = useState();
  const [cleanliness, setCleanliness] = useState();
  const [communication, setCommunication] = useState();
  const [location, setLocation] = useState();
  const [check_in, setCheckIn] = useState();
  const [accuracy, setAccuracy] = useState();
  const [value, setValue] = useState();
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);
  const [showLoginFormModal, setShowLoginFormModal] = useState(false)
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleReviewFormClose = () => {
    setShowReviewForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sessionUser) {
      const reviewData = {
        overall,
        cleanliness,
        communication,
        location,
        check_in,
        accuracy,
        value,
        body,
        reviewer_id: sessionUser.id,
        listing_id: listingId,
      };
      dispatch(reviewActions.createReview(reviewData))
        .then(() => {
          handleReviewFormClose();
          onClose();
          history.push(`/listings/${listingId}`)
        })
        .catch((errors) => {
          setErrors(errors.message);
        });
    } else {
      setErrors("You must be logged in to leave a review");
  }};

  return (
    <>
      <div className="reviewForm">
        <div className="closeButton">
        <img
          src={closeButton}
          alt="Close-Button"
          className="close-button"
          onClick={onClose}
        />
        </div>
        {errors.length > 0 && (
  <div className="error">{errors}</div>
)}
        <form className="form" onSubmit={handleSubmit}>
          <h2>How was your stay?</h2>
          <br></br>
          <div>
            Overall:
            <br></br>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="overall"
                  value={value}
                  onChange={(e) => setOverall(e.target.value)}
                />
                {value}
              </label>
            ))}
          </div>

          <div>
            Cleanliness:
            <br></br>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="cleanliness"
                  value={value}
                  onChange={(e) => setCleanliness(e.target.value)}
                />
                {value}
              </label>
            ))}
          </div>

          <div>
            Communication:
            <br></br>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="communication"
                  value={value}
                  onChange={(e) => setCommunication(e.target.value)}
                />
                {value}
              </label>
            ))}
          </div>

          <div>
            Location:
            <br></br>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="location"
                  value={value}
                  onChange={(e) => setLocation(e.target.value)}
                />
                {value}
              </label>
            ))}
          </div>

          <div>
            Check-In:
            <br></br>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="check-in"
                  value={value}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
                {value}
              </label>
            ))}
          </div>
          <div>
            Accuracy:
            <br></br>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="accuracy"
                  value={value}
                  onChange={(e) => setAccuracy(e.target.value)}
                />
                {value}
              </label>
            ))}
          </div>
          <div>
            Value:
            <br></br>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                {value}
              </label>
            ))}
          </div>
          <div>
          <br></br>
          <h2>Let others know about your experience!</h2>
          </div>
          <div className="text-area">
          <textarea
          className="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          </div>
          <br></br>

          <button className="submitReview" onClick={handleReviewFormClose}>
            Submit
          </button>
        </form>
      </div>
      {showLoginFormModal && (
      <Modal>
        <LoginForm />
      </Modal>
    )}
    </>
  );
};

export default ReviewForm;
