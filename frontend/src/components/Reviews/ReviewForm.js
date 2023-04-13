import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ReviewForm.css"
import * as reviewActions from "../../store/reviews"
import { Modal } from "../../context/Modal";

const ReviewForm = () => {
  // const { listingId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const { listingId } = useParams();
 
  const [overall, setOverall] = useState();
  const [cleanliness, setCleanliness] = useState();
  const [communication, setCommunication] = useState();
  const [location, setLocation] = useState();
  const [checkIn, setCheckIn] = useState();
  const [accuracy, setAccuracy] = useState();
  const [value, setValue] = useState();
  const [body, setBody] = useState("")
  const [errors, setErrors] = useState([]);

  const [showReviewForm, setShowReviewForm] = useState(false)

  const handleReviewFormClose = () => {
    setShowReviewForm(false)
  }

  const handleSubmit = () => {
      const reviewData = {
      overall,
      cleanliness,
      communication,
      location,
      checkIn,
      accuracy,
      value,
      body,
      reviewerId: sessionUser.id,
    };
    dispatch(reviewActions.createReview(reviewData))
      .then(() => {
        history.push(`/listings/${listingId}`);
        handleReviewFormClose()
      })
      .catch((response) => {
        if (response.data && response.data.errors) {
          setErrors(response.data.errors);
        }
      });
  };
  

  return (
    <>
    <div className="reviewForm">
      <form className='form' onSubmit={handleSubmit}>
        <h2>How was your stay?</h2>
        <br></br>
         <div>Overall: 
          <br></br>
        {[1, 2, 3, 4, 5].map(value => (
          <label key={value}>
            <input type="radio" name="overall" value={value} onChange={e => setOverall(e.target.value)} />
            {value}
          </label>
        ))}
      </div>

      <div>Cleanliness: 
      <br></br>
        {[1, 2, 3, 4, 5].map(value => (
          <label key={value}>
            <input type="radio" name="cleanliness" value={value} onChange={e => setCleanliness(e.target.value)} />
            {value}
          </label>
        ))}
      </div>
   
      <div>Communication: 
      <br></br>
        {[1, 2, 3, 4, 5].map(value => (
          <label key={value}>
            <input type="radio" name="communication" value={value} onChange={e => setCommunication(e.target.value)} />
            {value}
          </label>
        ))}
      </div> 
      
      <div>Location: 
      <br></br>
        {[1, 2, 3, 4, 5].map(value => (
          <label key={value}>
            <input type="radio" name="location" value={value} onChange={e => setLocation(e.target.value)} />
            {value}
          </label>
        ))}
      </div>
  
      <div>Check-In: 
      <br></br>
        {[1, 2, 3, 4, 5].map(value => (
          <label key={value}>
            <input type="radio" name="check-in" value={value} onChange={e => setCheckIn(e.target.value)} />
            {value}
          </label>
        ))}
      </div>
      <div>Accuracy: 
      <br></br>
        {[1, 2, 3, 4, 5].map(value => (
          <label key={value}>
            <input type="radio" name="accuracy" value={value} onChange={e => setAccuracy(e.target.value)} />
            {value}
          </label>
        ))}
      </div>
         <div>Value: 
      <br></br>
        {[1, 2, 3, 4, 5].map(value => (
          <label key={value}>
            <input type="radio" name="value" value={value} onChange={e => setValue(e.target.value)} />
            {value}
          </label>
        ))}
      </div>
      <br></br>
        <h2>Let others know about your experience!</h2>
        <textarea name="body" value={body} onChange={e => setBody(e.target.value)} ></textarea>
      <br></br>
    
      <button className="submitReview">Submit</button>
      </form>
      {showReviewForm && (
          <Modal onClose={handleReviewFormClose}>
            <ReviewForm onClose={handleReviewFormClose} />
          </Modal>
        )}
    </div>
    </>
  )

};

export default ReviewForm;