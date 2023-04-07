//action constants

export const RECEIVE_LISTINGS = '/listings/RECEIVE_LISTINGS';
export const RECEIVE_LISTING = '/listings/RECEIVE_LISTING';
export const REMOVE_LISTING = '/listings/REMOVE_LISTING';

//actions

export const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing
});

export const removeListing = (listingId) => ({
  type: REMOVE_LISTING,
  listingId
});

//selectors

export const getListings = state => {
  return state.listings ? Object.values(state.listings) : []
};

export const getListing = (listingId) => state => {
  return state.listings ? state.listings[listingId] : null
};

//thunk actions

export const fetchListings = () => async dispatch => {
  const response = await fetch (`/api/listings`)
  const data = await response.json();
  dispatch(receiveListings(data))
};

export const fetchListing = (listingId) => async dispatch => {
  const response = await fetch (`/api/listings/${listingId}`);
  const data = await response.json();
  dispatch(receiveListing(data))
};

export const createListing = (listing) => async dispatch => {
  const response = await fetch (`/api/listings`,  {
    method: "POST",
    body: JSON.stringify(listing),
    headers: {"Content-Type": "application/json"}
  });
  const data = await response.json();
  dispatch(receiveListing(data))
};

export const updateListing = (listing) => async dispatch => {
  const response = await fetch (`/api/listings/${listing.id}`, {
    method: "PUT",
    body: JSON.stringify(listing),
    headers: {"Content-Type": "application/json"}
  });
  const data = await response.json();
  dispatch(receiveListing(data))
}

export const deleteListing = (listingId) => async dispatch => {
  const response = await fetch (`/api/listings/${listingId}`, {
    method: "DELETE",
  })
  dispatch(removeListing(listingId))
};

// listings reducer

const listingsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return {...state, ...action.listings}
    case RECEIVE_LISTING:
      return {...state, [action.listing.id]: action.listing}
    case REMOVE_LISTING:
      const newState = {...state}
      delete newState[action.listingId]
      return newState
    default:
      return state
  }
};

export default listingsReducer;