import { useDispatch, useSelector } from "react-redux";
import { getListings, fetchListings } from "../../store/listings";
import { useEffect } from "react";
import ListingIndexItem from './ListingIndexItem';

export const ListingIndex = () =>  {
  const dispatch = useDispatch();
  const listings = useSelector(getListings)

  useEffect(() => {
    dispatch(fetchListings(listings))
  }, [])

  const listingsItems = listings.map(listing => {
    return <ListingIndexItem listing={listing} key={listing.id}/>
  })

  return (
    <>
    <ul className="listingsIndex">
      {listingsItems}
    </ul>
    </>
  )
};

export default ListingIndex;