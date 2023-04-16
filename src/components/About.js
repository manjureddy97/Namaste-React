import React from "react";
import { json, Outlet } from "react-router-dom";
import ProfileFunc from "./Profile";
import Profile from "./ProfileClass";
import UserContext from "./utils/UserContext";
/**
 * 
 * const About = () => {
  return (
    <div>
      <h1>About Us page</h1>
      <p>
        This is the Namaste React Live Course Chapter-7 Finding the path
        🔥🔥🔥🔥🔥🔥
      </p>

      <ProfileFunc name={"Akshay"} />
      <Profile name={"Akshay Calsses"} />
    </div>
  );
};
 
 * 
 */

class About2 extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent-constructor");
  }

  componentDidMount() {
    console.log("parent-componentDidMount");
  }

  render() {
    console.log("parent-render");
    return (
      <div>
        <h1>About Us page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-red-900">
              {user.name}-{user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p>
          This is the Namaste React Live Course Chapter-7 Finding the path
          🔥🔥🔥🔥🔥🔥
        </p>

        <ProfileFunc name={"Akshay"} />
        <Profile name={"first child Akshay Calsses"} />
        <Profile name={"second child Akshay Calsses"} />
      </div>
    );
  }
}

/***
 *
 * Parent constructor
 * Parent render
 *   First - child-constructor
 *   First Child - render
 *   Second - Child constructor
 *   Second - Child - render
 *   First child componentDidMount
 *   Second Child componentDidMount
 * Parent componentDidMount
 *
 */
export default About2;
