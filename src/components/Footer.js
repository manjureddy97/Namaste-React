import { useContext } from "react";
import UserContext from "./utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h4>Footer</h4>
      <h2>
        {user.name}-{user.email}
      </h2>
    </>
  );
};

export default Footer;
