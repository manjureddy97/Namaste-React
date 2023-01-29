import { restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("render");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);

            setFilteredRestaurants(data);
          }}
        >
          <FiSearch />
        </div>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
