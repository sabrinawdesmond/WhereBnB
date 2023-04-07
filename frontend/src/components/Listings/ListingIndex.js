import { useDispatch, useSelector } from "react-redux";
import { getListings, fetchListings } from "../../store/listings";
import { useEffect } from "react";
import ListingIndexItem from "./ListingIndexItem";

export const ListingIndex = () => {
  const dispatch = useDispatch();
  const listings = useSelector(getListings);

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  return (
    <>
      <ul className="listingsIndex">
        <h1>Test</h1>
        {listings.map((listing) => {
          return <ListingIndexItem listing={listing} key={listing.id} />
        })}
      </ul>
    </>
  );
};

export default ListingIndex;
