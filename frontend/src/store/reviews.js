import csrfFetch from "./csrf";

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  payload: reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  payload: review
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  payload: reviewId
});

export const getReviews = state => {
  return state?.reviews ? Object.values(state.reviews) : []
};

export const getReview = (reviewId) => state => {
  return state?.reviews ? state.reviews[reviewId] : null
};

export const fetchReviews = () => async dispatch => {
  const response = await csrfFetch (`/api/reviews`);
  const data = await response.json();
  dispatch(receiveReviews(data))
}

export const fetchReview = (reviewId) => async dispatch => {
  const response = await csrfFetch (`/api/reviews/${reviewId}`);
  const data = await response.json();
  dispatch(receiveReview(data))
};

export const createReview = (review) => async dispatch => {
  const response = await csrfFetch (`/api/reviews`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: {"Content-Type": "application/json"}
  });
  const data = await response.json();
  dispatch(receiveReview(data))
};

export const updateReview = (review) => async dispatch => {
  const response = await csrfFetch (`/api/reviews/${review.id}`, {
    method: "PUT",
    body: JSON.stringify(review),
    headers: {"Content-Type": "application/json"}
  })
  const data = await response.json();
  dispatch(receiveReview(data))
};

export const deleteReview = (reviewId) => async dispatch => {
  const response = await csrfFetch (`/api/listings/${listingId}`, {
    method: "DELETE"
  })
  dispatch(removeReview(reviewId))
};

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return {...state, ...action.payload.reviews}
    case RECEIVE_REVIEW:
      return {...state, [action.payload.id]: action.payload}
    case REMOVE_REVIEW: 
      const newState = {...state}
      delete newState[action.reviewId]
      return newState
    default:
      return state
  }
};

export default reviewsReducer