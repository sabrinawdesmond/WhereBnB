import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, getReviews } from "../../store/reviews";
import { useEffect } from "react";
import ReviewIndexItem from "./ReviewIndexItem";
import { useParams } from "react-router-dom";


const ReviewIndex = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews)
  const { listingId } = useParams();

  useEffect(() => {
    dispatch(fetchReviews(listingId));
  }, [])

  const reviewItems = reviews.map((review) => {
    return <ReviewIndexItem review={review} listingId={listingId}/>
})
  
  return (
    <>
    <div className="review-index">
      <ul id='reviews-index-list'>
      {reviews.map((review) => {
    return <ReviewIndexItem review={review} listingId={listingId}/>
})}
      </ul>
        <h2>HelloWorld</h2>
    </div>
    </>
  )
};

export default ReviewIndex;