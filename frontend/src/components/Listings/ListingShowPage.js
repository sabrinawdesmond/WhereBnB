import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import { useEffect } from "react";
import airbnb from "./airbnb.png"

const ListingShowPage = () => {
  const dispatch = useDispatch();
  const {listingId} = useParams();
  const listing = useSelector(getListing(listingId));

  useEffect(() => { 
    dispatch(fetchListing(listingId))
  }, [listingId, dispatch])

  if (!listing) {
    return null
  }
  
  return(
    <>
    <div className="ListingPage">
    <h1>{listing.title}</h1>
    <div className="listing-photo">
            <img src={airbnb} alt="photo" />
            </div>
    <ul>
      <p>{listing.address}</p>
      <p>{listing.city}</p>
      <p>{listing.country}</p>
    </ul>
    <p>{listing.description}</p>
    <p>{listing.num_beds}</p>
    <p>{listing.num_rooms}</p>
    <p>{listing.num_bathrooms}</p>
    </div>
    </>
  )

};

export default ListingShowPage;