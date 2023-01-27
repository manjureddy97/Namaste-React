import { IMG_CDN_URL } from "../../constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <h1>{name}</h1>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" className="logo" />
        <h2>{cuisines}</h2>
        <h3>{lastMileTravelString}minutes</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
