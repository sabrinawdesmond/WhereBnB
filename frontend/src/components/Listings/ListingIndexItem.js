import { useDispatch } from "react-redux";

const ListingIndexItem = ({listing}) => {
  const dispatch = useDispatch();
  
  return (
    <>
    <h2>{listing.title}</h2>
    </>
  )
};

export default ListingIndexItem;