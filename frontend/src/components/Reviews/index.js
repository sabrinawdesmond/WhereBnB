import { useState } from "react";
import ReviewForm from "./ReviewForm";

function ReviewFormModal() {
  const [showReviewForm, setShowReviewForm] = useState(false)

  const handleReviewFormClose = () => {
    setShowReviewForm(false)
  }

  return (
    <>
    {showReviewForm && (
      <Modal onClose={handleReviewFormClose}>
        <ReviewForm onClose={handleReviewFormClose} />
      </Modal>
    )}
    </>
  );
};

export default ReviewFormModal;