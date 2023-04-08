import { useDispatch, useSelector } from "react-redux";
import { getListings, fetchListings } from "../../store/listings";
import { useEffect } from "react";
import ListingIndexItem from "./ListingIndexItem";
import "./ListingIndex.css"

const ListingIndex = () => {
  const dispatch = useDispatch();
  const listings = useSelector(getListings);

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  return (
    <>
    <div className="listingsIndex">
      <ul className="listings-grid">
        {listings.map((listing) => {
          return <ListingIndexItem listing={listing} key={listing.id} />
        })}
      </ul>
      </div>
    </>
  );
};

export default ListingIndex;
