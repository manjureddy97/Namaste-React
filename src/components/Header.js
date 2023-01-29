import { useState } from "react";
import { Logo } from "../assets/img/logo.jpeg";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img
      src="https://i.pinimg.com/200x150/ad/7e/14/ad7e14008bbd4ceae6b5a3f8047998ac.jpg"
      alt=""
      className="logo"
    />
  </Link>
  //   <a href="/">
  //     <img className="logo" src="../assets/img/logo.jpeg" alt="" />
  //   </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      )}
    </div>
  );
};

export default Header;
