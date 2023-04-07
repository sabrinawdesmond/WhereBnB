import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import { useEffect } from "react";

const ListingShow = () => {
  const dispatch = useDispatch();
  const {listingId} = useParams();
  const listing = useSelector(getListing(listingId));

  useEffect(() => {
    dispatch(fetchListing(listingId))
  }, [listingId, dispatch])

  return(
    <>
    </>
  )

};

export default ListingShow;