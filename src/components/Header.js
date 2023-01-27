const Title = () => (
  <img
    src="https://i.pinimg.com/200x150/ad/7e/14/ad7e14008bbd4ceae6b5a3f8047998ac.jpg"
    alt=""
    className="logo"
  />
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
