
const ReviewIndexItem = ({ reviewProp}) => {

  return (
    <>
    <div className="review-item">
      {/* <div>{User[reviewerId].username}</div> */}
      <div>{reviewProp.body}</div>
    </div>
    </>
  )
};

export default ReviewIndexItem;