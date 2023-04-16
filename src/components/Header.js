import { useState, useContext } from "react";
import { Logo } from "../assets/img/logo.jpeg";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <Link to="/">
    <img
      // src="https://i.pinimg.com/200x150/ad/7e/14/ad7e14008bbd4ceae6b5a3f8047998ac.jpg"
      src="https://scontent.fhyd2-2.fna.fbcdn.net/v/t31.18172-8/22255139_1540199156039402_142328484624834724_o.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=110&ccb=1-7&_nc_sid=85a577&_nc_ohc=qcPDr1_ojxUAX8Gi5Jx&_nc_ht=scontent.fhyd2-2.fna&oh=00_AfBeZnF_k6aZz6oDNtYCOkJXs-gUJ07HJVyS06KaWsjd7g&oe=64230078"
      alt=""
      className="h-28 p-2"
    />
  </Link>
  //   <a href="/">
  //     <img className="logo" src="../assets/img/food.webp" alt="" />
  //   </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserContext);

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2"> Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2"> About</li>
          </Link>
          <Link to="contact">
            <li className="px-2">Contact</li>
          </Link>

          <Link to="instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <li className="px-2"> Cart-{cartItems.length}</li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-900">{user.name}</span>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
