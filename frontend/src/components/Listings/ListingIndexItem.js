import { useDispatch } from "react-redux";
import "./ListingIndex.css";
import { Link, useHistory } from "react-router-dom";

const ListingIndexItem = ({ listing }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <li className="listing-item">
      <div onClick={() => history.push(`/listings/${listing.id}`)}>
        <Link to={`/listings/${listing.id}`}>
          <h3>{listing.title}</h3>
          <h4>{listing.description}</h4>
        </Link>
      </div>
    </li>
  );
};

export default ListingIndexItem;
