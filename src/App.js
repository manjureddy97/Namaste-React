import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import { IMG_CDN_URL } from "../constants";
import Footer from "./components/Footer";
import Body from "./components/Body";

/***
    Header
        - Logo
        - Nav Items(Right side)
        - Cart
    Body 
       - Search bar
       - RestaurantList
       - RestaurantCard
              - Image
              - Name
              - Rating
              - Cusines
    Footer
       - Links
       - Copyright              
   */

{
}
const burgerKing = {
  name: "BurgerKing",
  image: IMG_CDN_URL,
  // "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/smfhai0o8rnjuzp3ngxu",
  cusines: ["Burger", "America"],
  rating: "4.2",
};

// props

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
