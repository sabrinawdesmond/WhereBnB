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
  
  return(
    <>
    <div className="ListingPage">
    <h2>{listing.title}</h2>
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