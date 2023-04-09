import { useDispatch } from "react-redux";
import "./ListingIndex.css";

const ListingIndexItem = ({ listing }) => {
  const dispatch = useDispatch();

  return (
    <li className="listing-item">
      <h3>{listing.title}</h3>
      <h4>{listing.description}</h4>
    </li>
  );
};

export default ListingIndexItem;
