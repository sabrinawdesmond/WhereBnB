import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import { useEffect } from "react";
import airbnb from "./airbnb.png";
import "./ListingShowPage.css";
import ListingStats from "./ListingStats";
import ReviewIndex from "../Reviews/ReviewIndex";
import { fetchReviews, resetReviews } from "../../store/reviews";

const ListingShowPage = () => {
  const dispatch = useDispatch();
  const { listingId } = useParams();
  const listing = useSelector(getListing(listingId));
  const reviews = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchListing(listingId));
    dispatch(fetchReviews(listingId));
    dispatch(resetReviews())
  }, [listingId, dispatch]);

  if (!listing) {
    return null;
  }

  return (
    <>
      <div className="listing-info">
        <h1>{listing?.title}</h1>
        <span>
          {listing.city}, {listing.country}
        </span>
      </div>
      <div className="ListingPage">
        <div className="photos">
          <div className="listing-photo">
            <img src={airbnb} alt="listingPhoto" />
            <div className="listing-small-photos">
              <img src={airbnb} alt="listingPhoto" />
              <img src={airbnb} alt="listingPhoto" />
              <img src={airbnb} alt="listingPhoto" />
              <img src={airbnb} alt="listingPhoto" />
            </div>
          </div>
        </div>
      </div>
      <div className="host-room-info">
        <h2>Entire home hosted by Patrick</h2>
      </div>
      <div className="room-info">
        <h3>
          Guests: {listing.numBeds * 2} · Beds: {listing.numBeds} · Bathrooms:{" "}
          {listing.numBathrooms}
        </h3>
      </div>
      <ListingStats />
      <div className="listing-description">
        <p>{listing.description}</p>
      </div>
      <div className="listing-reviews">
        <ReviewIndex reviews={reviews} />
      </div>
    </>
  );
};

export default ListingShowPage;
