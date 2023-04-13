import "./Reviews.css";
import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from "../../store/reviews";
import { useHistory, useParams } from "react-router-dom";
import React from "react";

const ReviewIndexItem = ({ reviewProp, user }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const isCurrentUser = (user.id === sessionUser?.id);
  const { listingId } = useParams();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(reviewActions.deleteReview(reviewProp.id)).then(() => {
      dispatch(reviewActions.getReviews());
    });
    history.push(`/listings/${listingId}`)
  }

  return (
    <>
      <div className="review-item">
        <h3 className="username">Review by: {user.username} </h3>
        <br></br>
        <div>Overall rating: {reviewProp.overall}</div>
        <div>Cleanliness: {reviewProp.cleanliness}</div>
        <div>Communication: {reviewProp.communication}</div>
        <div>Location: {reviewProp.location}</div>
        <div>Check-In: {reviewProp.check_in}</div>
        <div>Accuracy: {reviewProp.accuracy}</div>
        <div>Value: {reviewProp.value}</div>
        <br></br>
        <div className="description">{reviewProp.body}</div>
        <br></br>
        {isCurrentUser && <button onClick={handleClick}>Delete</button>}
      </div>
    </>
  );
};

export default ReviewIndexItem;
