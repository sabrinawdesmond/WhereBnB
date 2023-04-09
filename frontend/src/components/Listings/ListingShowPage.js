import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import { useEffect } from "react";

const ListingShowPage = () => {
  const dispatch = useDispatch();
  const {listingId} = useParams();
  const listing = useSelector(getListing(listingId));
  console.log("here it is")
  console.log(listing)

  useEffect(() => { 
    dispatch(fetchListing(listingId))
  }, [listingId, dispatch])

  if (!listing) {
    return <div>Loading...</div>;
  }

  return(
    <>
    <div className="ListingPage">
    <h2>{listing.title}</h2>
    <ul>
      {listing.address}
      {listing.city}
      {listing.country}
    </ul>
    <p>{listing.description}</p>
    </div>
    </>
  )

};

export default ListingShowPage;