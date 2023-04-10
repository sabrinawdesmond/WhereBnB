import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import { useEffect } from "react";
import airbnb from "./airbnb.png";
import "./ListingShowPage.css";

const ListingShowPage = () => {
  const dispatch = useDispatch();
  const { listingId } = useParams();
  const listing = useSelector(getListing(listingId));

  useEffect(() => {
    dispatch(fetchListing(listingId));
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
            <img src={airbnb} alt="photo" />
            <div className="listing-small-photos">
              <img src={airbnb} alt="photo" />
              <img src={airbnb} alt="photo" />
              <img src={airbnb} alt="photo" />
              <img src={airbnb} alt="photo" />
            </div>
          </div>
        </div>
      </div>
      <div className="listing-description">
        <p>{listing?.description}</p>
        <p>{listing?.num_beds}</p>
        <p>{listing?.num_rooms}</p>
        <p>{listing?.num_bathrooms}</p>
      </div>
    </>
  );
};

export default ListingShowPage;
