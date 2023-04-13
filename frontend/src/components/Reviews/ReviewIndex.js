import { useSelector } from "react-redux";
import { getReviews } from "../../store/reviews";
import ReviewIndexItem from "./ReviewIndexItem";
import { useParams } from "react-router-dom";

const ReviewIndex = ({ user }) => {
  const reviews = useSelector(getReviews);
  const { listingId } = useParams();
  const reviewers = useSelector(state => state.users ? Object.values(state.users) :[] )

  let reviewItems;
if (reviews) {
  const holder = []
  reviews.forEach((review) => {
    reviewers.forEach((reviewer) => {
      if (review.reviewerId === reviewer.id) {
        holder.push(<ReviewIndexItem
        key={review.id}
        reviewProp={review}
        listingId={listingId}
        user={reviewer}
      />)
      }
    })
  })
  reviewItems = holder
}


  return (
    <>
      <div className="review-index">
        <ul>
       {reviewItems}
          </ul>
      </div>
    </>
  );
};

export default ReviewIndex;
