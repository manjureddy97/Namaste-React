import { restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="wrapper">
        <input
          type="text"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="input"
        />

        <div
          className="icon"
          onClick={() => {
            const data = filterData(searchText, restaurants);

            setRestaurants(data);
            {
              console.log("data", data);
            }
          }}
        >
          <FiSearch />
        </div>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
