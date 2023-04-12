import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReview } from "../../store/reviews";
import { useEffect } from "react";
import { fetchReview } from "../../store/reviews";

const ReviewIndexItem = () => {
  const dispatch = useDispatch();
  const { reviewId } = useParams();
  const review = useSelector(getReview(reviewId));

  useEffect(() => {
    dispatch(fetchReview(reviewId))
  })

  return (
    <>
    <div className="review-item">
      <div>Hello World</div>
    </div>
    </>
  )
};

export default ReviewIndexItem;