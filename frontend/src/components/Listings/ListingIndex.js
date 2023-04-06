import { useDispatch, useSelector } from "react-redux";
import { getListings, fetchListings } from "../../store/listings";
import { useEffect } from "react";
import ListingIndexItem from '`/ListingIndexItem';

export const ListingIndex = () =>  {
  const dispatch = useDispatch();
  const listings = useSelector(getListings)

  useEffect(() => {
    dispatch(fetchListings(listings))
  }, [])

  return (
    <>
    <ul>
      {listings.map(listing => 
        <ListingIndexItem listing={listing} key={listing.id}/> 
      )}
    </ul>
    </>
  )
};

export default ListingIndex;