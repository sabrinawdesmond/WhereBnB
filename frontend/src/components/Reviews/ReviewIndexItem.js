
const ReviewIndexItem = ({ reviewProp, user }) => {
  console.log(reviewProp)
  return (
    <>
    <div className="review-item">
      <div>Review by: {user.username} </div>
      <div>Overall rating: {reviewProp.overall}</div>
      <div>Cleanliness: {reviewProp.cleanliness}</div>
      <div>Communication: {reviewProp.communication}</div>
      <div>Location: {reviewProp.location}</div>
      <div>Check-In: {reviewProp.check_in}</div>
      <br></br>
        <div>{reviewProp.body}</div>
        <br></br>
      </div>
    </>
  )
};

export default ReviewIndexItem;