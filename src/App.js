import React, { lazy, Suspense, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import { IMG_CDN_URL } from "../constants";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Profile from "./components/Profile";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import store from "./components/utils/store";
// import Instamart from "./components/Instamart";

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

const Instamart = lazy(() => import("./components/Instamart"));
const burgerKing = {
  name: "BurgerKing",
  image: IMG_CDN_URL,
  // "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/smfhai0o8rnjuzp3ngxu",
  cusines: ["Burger", "America"],
  rating: "4.2",
};

// props

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Akshay Saini",
    email: "support@namastedev.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        {/***
    OutLet
    */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
          // user={{
          //   name: "Namaste React",
          //   email: "support@namastedev.com",
          // }}
          />
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
