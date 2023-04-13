import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ReviewForm.css";
import * as reviewActions from "../../store/reviews";
import closeButton from "./close-24.png";

const UpdateReviewForm = ({ onClose, reviewData }) => {
  const dispatch = useDispatch();
  const { listingId } = useParams();
  const [overall, setOverall] = useState(reviewData.overall);
  const [cleanliness, setCleanliness] = useState(reviewData.cleanliness);
  const [communication, setCommunication] = useState(reviewData.communication);
  const [location, setLocation] = useState(reviewData.location);
  const [check_in, setCheckIn] = useState(reviewData.check_in);
  const [accuracy, setAccuracy] = useState(reviewData.accuracy);
  const [value, setValue] = useState(reviewData.value);
  const [body, setBody] = useState(reviewData.body);
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);


  const [showUpdateReviewForm, setShowUpdateReviewForm] = useState(false);

  const handleUpdateReviewFormClose = () => {
    setShowUpdateReviewForm(false);
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
      dispatch(reviewActions.updateReview(reviewData))
        .then(() => {
          handleUpdateReviewFormClose();
          onClose();
        })
        .catch((response) => {
          if (response.data && response.data.errors) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <>
      <div className="updateReviewForm">
        <img
          src={closeButton}
          alt="Close-Button"
          className="close-button"
          onClick={onClose}
        />
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
                  checked={Number(overall) === value}
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
                  checked={Number(cleanliness) === value}
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
                  checked={Number(communication) === value}
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
                  checked={Number(location) === value}
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
                  checked={Number(check_in) === value}
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
                  checked={Number(accuracy) === value}
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
                  checked={Number(value) === value}
                  onChange={(e) => setValue(e.target.value)}
                />
                {value}
              </label>
            ))}
          </div>
          <br></br>
          <h2>Let others know about your experience!</h2>
          <textarea
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <br></br>

          <button className="submitReview" onClick={handleUpdateReviewFormClose}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateReviewForm;
