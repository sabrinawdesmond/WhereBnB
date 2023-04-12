
const ReviewIndexItem = ({ reviewProp}) => {

  return (
    <>
    <div className="review-item">
      <div>{reviewProp.body}</div>
    </div>
    </>
  )
};

export default ReviewIndexItem;