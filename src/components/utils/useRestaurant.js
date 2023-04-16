import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../../../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  // get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId + "&categories=true");
    const json = await data.json();
    console.log("json.data=====", resId);
    setRestaurant(json.data);
  }

  //return restaurant data

  return restaurant;
};

export default useRestaurant;
