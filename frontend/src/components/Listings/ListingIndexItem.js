import { useDispatch } from "react-redux";
import "./ListingIndex.css";
import { Link, useHistory } from "react-router-dom";
import airbnb from "./airbnb.png"

const ListingIndexItem = ({ listing }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="listing-item">
      <div onClick={() => history.push(`/listings/${listing.id}`)}>
        <Link to={`/listings/${listing.id}`}>
        <div className="photo-container">
            <img src={airbnb} alt="photo" />
            </div>
          <h3>{listing.city}, {listing.country}</h3>
          <br></br>
          <h4>${listing.price} per night</h4>
        </Link>
      </div>
    </div>
  );
};

export default ListingIndexItem;
