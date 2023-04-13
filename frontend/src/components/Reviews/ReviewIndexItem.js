import "./Reviews.css"

const ReviewIndexItem = ({ reviewProp, user }) => {
  console.log(reviewProp);
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
      </div>
    </>
  );
};

export default ReviewIndexItem;
