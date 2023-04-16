import { IMG_CDN_URL } from "../../constants";
import { useContext } from "react";
import UserContext from "./utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  // user,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <div className="card">
        <h1 className="font-bold text-xl w-56">{name}</h1>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" className="logo" />
        <h2>{cuisines}</h2>
        <h3>{lastMileTravelString}</h3>
        <span className="font-bold text-red-900">{user.name}</span>
        <span className="font-bold text-red-900">{user.email}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
