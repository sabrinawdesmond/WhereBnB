import { useDispatch } from "react-redux";
import "./ListingIndex.css";

const ListingIndexItem = ({ listing }) => {
  const dispatch = useDispatch();

  return (
    <li className="listing-item">
      <h2>{listing.title}</h2>
      <h4>{listing.description}</h4>
    </li>
  );
};

export default ListingIndexItem;
