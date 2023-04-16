import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "../components/Shimmer";
import useRestaurant from "./utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  console.log(params);

  const { resId } = params;

  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(resId);
  // console.log("params=====>", params);

  // console.log("restaurant====", restaurant);
  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <div>
        <h1>Restaurants ID: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt=""
          className="logo"
        />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <button className="p-2 m-5 bg-green-500">Add Item</button>
      </div>

      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
